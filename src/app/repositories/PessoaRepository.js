import connection from "../../config/database/connection.js";

class PessoaRepository {
  queryPessoa(sql, params = "") {
    return new Promise((resolve, reject) => {
      connection.query(sql, params, (error, result) => {
        if (error) {
          const erro = {
            erro: "SQL - reject",
            message: error.message,
          };
          return reject(erro);
        } else {
          const row = JSON.parse(JSON.stringify(result.rows));
          return resolve(row);
        }
      });
    });
  }

  create(pessoa) {
    const sql =
      "INSERT INTO pessoas(pessoa_nome, pessoa_email, pessoa_matricula, pessoa_curso, pessoa_rfid, pessoa_cpf, pessoa_externa, pessoa_responsavel) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);";
    return this.queryPessoa(sql, [
      pessoa.pessoaNome,
      pessoa.pessoaEmail,
      pessoa.pessoaMatricula,
      pessoa.pessoaCurso,
      pessoa.pessoaRfid,
      pessoa.pessoaCpf,
      pessoa.pessoaExterna,
      pessoa.pessoaResponsavel,
    ]);
  }

  findAll() {
    const sql = "SELECT * FROM pessoas ORDER BY pessoa_id ASC;";
    return this.queryPessoa(sql);
  }

  findById(id) {
    const sql = "SELECT * FROM pessoas WHERE pessoa_id = $1;";
    return this.queryPessoa(sql, [id]);
  }

  findByMatricula(matricula) {
    const sql = "SELECT * FROM pessoas WHERE matricula = $1;";
    return this.queryPessoa(sql, [matricula]);
  }

  findByNome(nome) {
    let nome2 = "%" + nome + "%";
    const sql = "SELECT * FROM pessoas WHERE pessoa_nome LIKE $1;";
    return this.queryPessoa(sql, [nome2]);
  }

  update(id, pessoa) {
    const sql =
      "UPDATE pessoas SET pessoa_nome = $1, pessoa_email = $2, pessoa_matricula = $3, pessoa_curso = $4, pessoa_rfid = $5, pessoa_cpf = $6, pessoa_externa = $7, pessoa_responsavel = $8 WHERE pessoa_id = $9;";
    return this.queryPessoa(sql, [
      pessoa.pessoaNome,
      pessoa.pessoaEmail,
      pessoa.pessoaMatricula,
      pessoa.pessoaCurso,
      pessoa.pessoaRfid,
      pessoa.pessoaCpf,
      pessoa.pessoaExterna,
      pessoa.pessoaResponsavel,
      id,
    ]);
  }
  delete(id) {
    const sql = "DELETE FROM pessoas WHERE pessoa_id = $1;";
    return this.queryPessoa(sql, [id]);
  }
}

export default new PessoaRepository();

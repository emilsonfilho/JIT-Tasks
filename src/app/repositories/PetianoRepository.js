import connection from "../../config/database/connection.js";

class PetianoRepository {
    queryPetiano(sql, params = "") {
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

    create(petiano) {
        const sql =
            "INSERT INTO petianos(petiano_nome, petiano_curso, petiano_data_ingresso, petiano_data_saida, petiano_caminho_foto) VALUES ($1, $2, $3, $4, $5);";
        return this.queryPetiano(sql, [
            petiano.petianoNome,
            petiano.petianoCurso,
            petiano.petianoDataIngresso,
            petiano.petianoDataSaida,
            petiano.petianoCaminhoFoto,
        ]);
    }

    findAll() {
        const sql = "SELECT * FROM petianos ORDER BY petiano_id ASC;";
        return this.queryPetiano(sql);
    }

    findById(id) {
        const sql = "SELECT * FROM petianos WHERE petiano_id = $1;";
        return this.queryPetiano(sql, [id]);
    }

    findByNome(nome) {
        let nome2 = "%" + nome + "%";
        const sql = "SELECT * FROM pessoas WHERE petiano_nome LIKE $1;";
        return this.queryPetiano(sql, [nome2]);
    }

    update(id, petiano) {
        const sql =
            "UPDATE petianos SET petiano_nome = $1, petiano_curso = $2, petiano_data_ingresso = $3, petiano_data_saida = $4, petiano_caminho_foto = $5 WHERE petiano_id = $6;";
        return this.queryPetiano(sql, [
            petiano.petianoNome,
            petiano.petianoCurso,
            petiano.petianoDataIngresso,
            petiano.petianoDataSaida,
            petiano.petianoCaminhoFoto,
            id,
        ]);
    }
    delete(id) {
        const sql = "DELETE FROM petianos WHERE petiano_id = $1;";
        return this.queryPetiano(sql, [id]);
    }
}

export default new PetianoRepository();

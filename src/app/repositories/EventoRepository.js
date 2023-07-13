import connection from "../../config/database/connection.js";

class EventoRepository {
    queryEvento(sql, params = "") {
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

    create(evento) {
        const sql =
            "INSERT INTO eventos(evento_nome, evento_tipo, evento_data_inicial, evento_data_final, evento_carga_horaria) VALUES ($1, $2, $3, $4, $5);";
        return this.queryEvento(sql, [
            evento.eventoNome,
            evento.eventoTipo,
            evento.eventoDataInicial,
            evento.eventoDataFinal,
            evento.eventoCargaHoraria,
        ]);
    }

    findAll() {
        const sql = "SELECT * FROM eventos ORDER BY evento_id ASC;";
        return this.queryEvento(sql);
    }

    findById(id) {
        const sql = "SELECT * FROM eventos WHERE evento_id = $1;";
        return this.queryEvento(sql, [id]);
    }

    findByNome(nome) {
        let nome2 = "%" + nome + "%";
        const sql = "SELECT * FROM eventos WHERE evento_nome LIKE $1;";
        return this.queryEvento(sql, [nome2]);
    }

    updateById(id, evento) {
        const sql =
            "UPDATE evento SET evento_nome = $1, evento_tipo = $2, evento_data_inicial = $3, evento_data_final = $4, evento_carga_horaria = $5 WHERE evento_id = $6;";
        return this.queryEvento(sql, [
            evento.eventoNome,
            evento.eventoTipo,
            evento.eventoDataInicial,
            evento.eventoDataFinal,
            evento.eventoCargaHoraria,
            id,
        ]);
    }
    delete(id) {
        const sql = "DELETE FROM evento WHERE evento_id = $1;";
        return this.queryEvento(sql, [id]);
    }
}

export default new EventoRepository();

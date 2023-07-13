import connection from "../../config/database/connection.js";

class EventoTipoRepository {
    queryEventoTipo(sql, params = "") {
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

    create(eventoTipo) {
        const sql =
            "INSERT INTO evento_tipo(evento_tipo_nome) VALUES ($1);";
        return this.queryEventoTipo(sql, [
            eventoTipo.eventoTipoNome,
        ]);
    }

    findAll() {
        const sql = "SELECT * FROM evento_tipo ORDER BY evento_tipo_id ASC;";
        return this.queryEventoTipo(sql);
    }

    findById(id) {
        const sql = "SELECT * FROM evento_tipo WHERE evento_tipo_id = $1;";
        return this.queryEventoTipo(sql, [id]);
    }

    findByNome(nome) {
        let nome2 = "%" + nome + "%";
        const sql = "SELECT * FROM evento_tipo WHERE event_tipo_nome LIKE $1;";
        return this.queryEventoTipo(sql, [nome2]);
    }

    updateById(id, eventoTipo) {

        const sql =
            "UPDATE evento_tipo SET evento_tipo_nome = $1 WHERE evento_tipo_id = $2;";
        return this.queryEventoTipo(sql, [
            eventoTipo.eventoTipoNome,
            id,
        ]);
    }
    delete(id) {
        const sql = "DELETE FROM evento_tipo WHERE evento_tipo_id = $1;";
        return this.queryEventoTipo(sql, [id]);
    }
}

export default new EventoTipoRepository();

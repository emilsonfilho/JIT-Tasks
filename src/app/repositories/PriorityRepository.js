import connection from "../../config/database/connection.js";

class PriorityRepository {
    queryPriority(sql, params = "") {
        return new Promise((resolve, reject) => {
            connection.query(sql, params, (error, result) => {
                if (error) {
                    const erro = {
                        erro: "SQL - reject",
                        message: error.message,
                    };
                    return reject(erro);
                }

                const row = JSON.parse(JSON.stringify(result.rows));
                return resolve(row);
            })
        })
    }

    findAll() {
        const sql = "SELECT id, name FROM priorities ORDER BY id ASC;";
        return this.queryPriority(sql);
    }
}

export default new PriorityRepository();
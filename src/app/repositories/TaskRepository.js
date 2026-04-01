import connection from "../../config/database/connection.js";

class TaskRepository {
  queryTask(sql, params = "") {
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

  create(task) {
    const sql =
      "INSERT INTO tasks (title, description, is_finished, priority_id) VALUES ($1,$2,$3,$4);";
    return this.queryTask(sql, [
      task.title,
      task.description,
      task.is_finished,
      task.priority_id,
    ]);
  }

  findAll() {
    const sql = "SELECT * FROM tasks ORDER BY priority_id DESC, id ASC;";
    return this.queryTask(sql);
  }

  findById(id) {
    const sql = "SELECT * FROM tasks WHERE id = $1;";
    return this.queryTask(sql, [id]);
  }

  update(id, task) {
    const sql =
      "UPDATE tasks SET title=$1, description=$2, is_finished=$3, priority_id=$4 WHERE id = $5;";
    return this.queryTask(sql, [
      task.title,
      task.description,
      task.is_finished,
      task.priority_id,
      id,
    ]);
  }
  delete(id) {
    const sql = "DELETE FROM tasks WHERE id = $1;";
    return this.queryTask(sql, [id]);
  }
}

export default new TaskRepository();

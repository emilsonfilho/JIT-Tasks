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
      "INSERT INTO tasks (title, description, is_finished, priority_id, due_date) VALUES ($1,$2,$3,$4,$5);";
    return this.queryTask(sql, [
      task.title,
      task.description,
      task.is_finished,
      task.priority_id,
      task.due_date,
    ]);
  }

  findAll() {
    const sql = "SELECT * FROM tasks ORDER BY priority_id DESC, id ASC;";
    return this.queryTask(sql);
  }

  findAllPending() {
    const sql = `
      SELECT * FROM vw_tasks_with_priority
      WHERE is_finished = false
      ORDER BY due_date ASC, priority_id DESC, id ASC;
    `;
    return this.queryTask(sql);
  }

  findAllFinished() {
    const sql = `
      SELECT * FROM vw_tasks_with_priority
      WHERE is_finished = true
      ORDER BY due_date DESC, priority_id DESC, id ASC;
    `;
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

  setStatus(id, isFinished) {
    const sql = "UPDATE tasks SET is_finished=$1 WHERE id = $2;";
    return this.queryTask(sql, [isFinished, id]);
  }

  delete(id) {
    const sql = "DELETE FROM tasks WHERE id = $1;";
    return this.queryTask(sql, [id]);
  }

  getDailyMetrics() {
    const sql = `
      SELECT
        COUNT(id) FILTER (WHERE due_date::DATE < CURRENT_DATE AND is_finished = false) AS overdated,
        COUNT(id) FILTER (WHERE due_date::DATE = CURRENT_DATE AND is_finished = false) AS pending,
        COUNT(id) FILTER (WHERE due_date::DATE = CURRENT_DATE and is_finished = true) AS done
      FROM tasks
    `;
    return this.queryTask(sql);
  }
}

export default new TaskRepository();

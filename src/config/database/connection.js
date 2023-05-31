import postgres from "pg";

const connection = new postgres.Pool({
  user: "postgres",
  host: "localhost",
  database: "jit-model",
  password: "jit",
  port: "5432",
});

connection.connect();

export default connection;

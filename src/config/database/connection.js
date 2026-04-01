import 'dotenv/config';
import postgres from "pg";

const connection = new postgres.Pool({
  connectionString: process.env.DATABASE_URL
});

try {
  connection.connect();
  console.log("connection - database on");
} catch (error) {
  console.log(error.message);
}

export default connection;

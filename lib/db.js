import mysql from "mysql2/promise";

// a connection pool is reused across requests instead of opening a new connection each time
export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  // TiDB Cloud requires TLS but local CAMPP does not, so enable it only when DB_SSL=true
  ssl:
       process.env.DB_SSL === "true" || process.env.NODE_ENV === "production"
      ? { minVersion: "TLSv1.2", rejectUnauthorized: true }
      : undefined,
});
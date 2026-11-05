import mysql from "mysql2/promise";

// a connection pool is reused across requests
export const pool = mysql.createPool({
  host: "gateway01.ap-northeast-1.prod.aws.tidbcloud.com",
  port: 4000,
  user: "2zoZnnkV4WVRPUS.root",
  password: process.env.DB_PASSWORD,
  database: "dit205_db",

  // TiDB Cloud requires TLS
  ssl: {
    minVersion: "TLSv1.2",
    rejectUnauthorized: true,
  },
});
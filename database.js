import mysql from "mysql2/promise";

const db = await mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"abcd4321",
    "database":"nodejs",
    "port":3307
});

export default db;
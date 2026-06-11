import express from "express";
import mysql from 'mysql2/promise';


const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});

app.get("/", (req, res) => {
    res.send("Ola TESTEz");
});

try {
  const connection = await mysql.createConnection('mysql://root:abcd4321@127.0.0.1:3307/nodejs');

  const sql = 'SELECT * FROM `users`';

  const [rows, fields] = await connection.query(sql);

  console.log(rows);
  console.log(fields);
  
  await connection.end();
} catch (err) {
  console.log(err);
}
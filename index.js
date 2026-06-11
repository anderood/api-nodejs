import express, { json } from "express";

import db from "./database.js";


const app = express();

// app.use(express.json);

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});

app.get("/", async (req, res) => {

    const [rows] = await db.query("SELECT * FROM users");
    
    res.send(rows[0].full_name)
    

});

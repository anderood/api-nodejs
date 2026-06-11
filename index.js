import express, { json } from "express";
import UserModel from "./src/models/UserModel.js";

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});

app.get("/users", async (req, res) => {

    const users = await UserModel.findAll();

    const userId = await UserModel.findById(4);

    res.send(userId);

});

app.post("/users", async (req, res) => {


   const { name, email } = req.body;

   const data = await UserModel.create(name, email);

   res.send(data)

})

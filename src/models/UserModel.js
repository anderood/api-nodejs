import db from "../../database.js"

const UserModel = {
    async findAll() {
        const [rows] = await db.query("SELECT * FROM users");
        return rows;
    },

    async findById(id) {
        const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);

        return rows[0];
    },

    async create(name, email) {
        const [result] = await db.query("INSERT INTO users (name, email, id) VALUES (?,?, 0)", [name, email]);
        return {
            id: result.id,
            name,
            email
        }
    }
}

export default UserModel;
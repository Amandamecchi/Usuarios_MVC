const pool = require("../config/database");

const getUsers = async () => {
    const result = await pool.query("SELECT * FROM usuarios");
    return result.rows[0];
}

const getUserById = async (id) => {
    const result = await pool.query("SELECT * FROM usuarios WHERE id = ?", [id]);
    return result.rows[0];
};

const deleteUser = async (id) => {
    const result = await pool.query("DELETE FROM usuarios WHERE id = ?", [id]);
    return result.rows[0];
}

const createUser = async (nome, email, senha, photo) => {
    const result = await pool.query(
        "INSERT INTO usuarios (nome, email, senha, photo) VALUES ($1, $2, $3, $4) RETURNING *",
        [nome, email, senha, photo]

    );

    return result.rows[0];
};

const updateUser = async (id, data) => {
    const { nome, email, senha } = data;
    const result = await pool.query("UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id = $4 RETURNING *", [nome, email, senha, id]);
    return result.rows[0];
}

module.exports = {
    getUsers,
    getUserById,
    deleteUser,
    createUser,
    updateUser
};
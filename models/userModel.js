const pool = require('../configs/db');

const getAllUser = async () => {
    let [rows] = await pool.query('SELECT * FROM  users')

    return rows
}

const getByID = async (id) => {
    let [rows ] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);

    return rows;
}

const findEmail = async (body) => {
    let [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [body.email]);

    return rows;
}
const create = async (body) => {
    let arr = [body.name, body.email, body.is_active];
    const [rows] = await pool.query('INSERT INTO users (name, email, is_active) VALUES(?, ?, ?)', arr);

    return rows.insertId;
}

const updateStatus = async (id, is_active) => {
    const [rows] = await pool.query(
        'UPDATE users SET is_active = ? WHERE id = ?',
        [is_active, id]
    );
    return rows.insertId;
};

const deleteUser = async (id) => {
    const [rows] = await pool.query('DELETE FROM users WHERE id = ?', [id]);

    return rows;
}


module.exports = {
    getAllUser,
    getByID,
    findEmail,
    create,
    updateStatus,
    deleteUser
}
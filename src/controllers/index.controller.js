const { Pool } = require('pg');

const pool = new Pool({
    host: 'bbbhtrvrefexxtiz9gvi-postgresql.services.clever-cloud.com',
    user: 'uqrhp5uqbjbseicrxrko',
    password: 'W0YbEXRGoorHWeqFRXgP',
    database: 'bbbhtrvrefexxtiz9gvi',
    port: '5432'
    /*host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'firstapi',
    port: '5432'*/
})

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    res.json(response.rows);
}

const getUser = async (req, res) => {
    const response = await pool.query(`SELECT * FROM users WHERE id = ${req.params.id}`);
    res.json(response.rows);
}

const createUser = async (req, res) =>{
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users(name, email) VALUES ($1, $2)', [name, email]);
    res.json({
        message: 'user created',
        json: {
            user: {name, email}
        }
    })
}

const updateUser = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
        name,
        email,
        req.params.id
    ]);
    res.send('user update');
}

const deleteUser = async (req, res) => {
    const response = await pool.query('DELETE FROM users WHERE id = $1', [req.params.id]);
    res.send('user deleted');
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
const pool = require('./pool');
require('dotenv').config();

const getUserByUserName = async (userName) => {
    const { rows } = await pool.query(
        `
        SELECT * FROM users WHERE user_name = $1;
    `,
        [userName],
    );
    return rows[0];
};

const getUserById = async (id) => {
    const { rows } = await pool.query(
        `
        SELECT * FROM users WHERE id = $1;
    `,
        [id],
    );
    return rows[0];
};

module.exports = {
    getUserByUserName,
    getUserById,
};

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

// const getUserByUserName = async (userName) => {
//     const { rows } = await pool.query(
//         `
//         SELECT * FROM users WHERE user_name = $1;
//     `,
//         [userName],
//     );

//     return rows[0];
// };

const insertNewUser = async (firstName, lastName, userName, pwd, isAdmin) => {
    await pool.query(
        `
        INSERT INTO user 
            (first_name, last_name, user_name, password, is_admin) VALUES
            ($1, $2, $3, $4, $5);
    `,
        [firstName, lastName, userName, pwd, isAdmin],
    );
};

const getPostQuantity = async () => {
    const { rows } = await pool.query('SELECT COUNT(id) FROM posts;');
    return rows[0].count;
};

const getAllPostsAndTheirInfo = async () => {
    const { rows } = await pool.query(`
        SELECT 
            p.id AS post_id,
            p.post_title,
            p.post_content,
            p.created_at AS post_created_at,
            u.id AS user_id,
            u.first_name,
            u.last_name,
            u.user_name,
            COUNT (pc.comment_id) AS number_comment
        FROM posts p
        JOIN post_user pu
            ON pu.post_id = p.id
        JOIN users u
            ON u.id = pu.user_id
        LEFT JOIN post_comment pc
            ON pc.post_id = p.id
        GROUP BY p.id, u.id
        ORDER BY p.id;
    `);

    return rows;
};

const getSpecificNumberOfPostsAndTheirInfoFromBeginning = async (postQuantity) => {
    const { rows } = await pool.query(
        `
        SELECT 
            p.id AS post_id,
            p.post_title,
            p.post_content,
            p.created_at AS post_created_at,
            u.id AS user_id,
            u.first_name,
            u.last_name,
            u.user_name,
            u.avatar_url,
            COUNT (pc.comment_id) AS number_comment
        FROM posts p
        JOIN post_user pu
            ON pu.post_id = p.id
        JOIN users u
            ON u.id = pu.user_id
        LEFT JOIN post_comment pc
            ON pc.post_id = p.id
        GROUP BY p.id, u.id
        ORDER BY p.id
        LIMIT $1;
    `,
        [postQuantity],
    );

    return rows;
};

module.exports = {
    getUserByUserName,
    getUserById,
    insertNewUser,
    getPostQuantity,
    getAllPostsAndTheirInfo,
    getSpecificNumberOfPostsAndTheirInfoFromBeginning,
};

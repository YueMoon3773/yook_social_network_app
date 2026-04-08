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

const updateUserInfo = async (id, firstName, lastName, avatarUrl, bio, location, birthdayDate) => {
    await pool.query(
        `
        UPDATE users SET
            first_name = $2,
            last_name = $3,
            avatar_url = $4,
            bio = $5,
            location = $6,
            birthday_date = $7
        WHERE id = $1;
    `,
        [id, firstName, lastName, avatarUrl, bio, location, birthdayDate],
    );
};

const insertNewUser = async (firstName, lastName, userName, pwd, isAdmin) => {
    await pool.query(
        `
        INSERT INTO users 
            (first_name, last_name, user_name, password, is_admin) VALUES
            ($1, $2, $3, $4, $5);
    `,
        [firstName, lastName, userName, pwd, isAdmin],
    );
};

const insertNewPostAndItsRelation = async (postTitle, postContent, userId) => {
    const { rows: newPostId } = await pool.query(
        `
        INSERT INTO posts 
            (post_title, post_content) VALUES
            ($1, $2)
        RETURNING id;
    `,
        [postTitle, postContent],
    );

    await pool.query(
        `
        INSERT INTO post_user
            (post_id, user_id) VALUES
            ($1, $2);
    `,
        [newPostId[0].id, userId],
    );
};

const getPostQuantity = async () => {
    const { rows } = await pool.query('SELECT COUNT(id) FROM posts;');
    return rows[0].count;
};

const getSpecificPostAndItsInfoByPostId = async (postId) => {
    const { rows } = await pool.query(
        `
        SELECT 
            p.id AS post_id,
            p.post_title,
            p.post_content,
            p.created_at,
            u.id AS user_id,
            u.first_name,
            u.last_name,
            u.user_name,
            u.avatar_url,
            u.is_admin,
            COUNT (pc.comment_id) AS number_comment
        FROM posts p
        JOIN post_user pu
            ON pu.post_id = p.id
        JOIN users u
            ON u.id = pu.user_id
        LEFT JOIN post_comment pc 
            ON pc.post_id = p.id
        WHERE p.id = $1
        GROUP BY p.id, p.post_title, p.post_content, u.id
        ORDER BY p.id;
    `,
        [postId],
    );

    return rows[0];
};

const getAllPostsAndTheirInfo = async () => {
    const { rows } = await pool.query(`
        SELECT 
            p.id AS post_id,
            p.post_title,
            p.post_content,
            p.created_at AS created_at,
            u.id AS user_id,
            u.first_name,
            u.last_name,
            u.user_name,
            u.avatar_url,
            u.is_admin,
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

const getInitialNumberOfPostsAndTheirInfoForBaseRender = async (postPerPage) => {
    const { rows } = await pool.query(
        `
        SELECT 
            p.id AS post_id,
            p.post_title,
            p.post_content,
            p.created_at AS created_at,
            u.id AS user_id,
            u.first_name,
            u.last_name,
            u.user_name,
            u.avatar_url,
            u.is_admin,
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
        [postPerPage],
    );

    return rows;
};

const getSpecificNumberOfPostsAndTheirInfoFromTheBeginningOrderById = async (orderDirection, postPerPage) => {
    const { rows } = await pool.query(
        `
        SELECT 
            p.id AS post_id,
            p.post_title,
            p.post_content,
            p.created_at AS created_at,
            u.id AS user_id,
            u.first_name,
            u.last_name,
            u.user_name,
            u.avatar_url,
            u.is_admin,
            COUNT (pc.comment_id) AS number_comment
        FROM posts p
        JOIN post_user pu
            ON pu.post_id = p.id
        JOIN users u
            ON u.id = pu.user_id
        LEFT JOIN post_comment pc
            ON pc.post_id = p.id
        GROUP BY p.id, u.id
        ORDER BY p.id ${orderDirection}
        LIMIT $1;
    `,
        [postPerPage],
    );

    return rows;
};

const getSpecificNumberOfPostsAndTheirInfoFromTheBeginningOrderByCommentNumber = async (
    orderDirection,
    postPerPage,
) => {
    const { rows } = await pool.query(
        `
        SELECT 
            p.id AS post_id,
            p.post_title,
            p.post_content,
            p.created_at AS created_at,
            u.id AS user_id,
            u.first_name,
            u.last_name,
            u.user_name,
            u.avatar_url,
            u.is_admin,
            COUNT (pc.comment_id) AS number_comment
        FROM posts p
        JOIN post_user pu
            ON pu.post_id = p.id
        JOIN users u
            ON u.id = pu.user_id
        LEFT JOIN post_comment pc
            ON pc.post_id = p.id
        GROUP BY p.id, u.id
        ORDER BY number_comment ${orderDirection}
        LIMIT $1;
    `,
        [postPerPage],
    );

    return rows;
};

const getAllPostsFromSpecificUserByUserId = async (userId) => {
    const { rows } = await pool.query(
        `
        SELECT 
            p.id AS post_id,
            p.post_title,
            p.post_content,
            p.created_at,
            COUNT (pc.comment_id) As number_comment
        FROM posts p
        JOIN post_user pu
            ON p.id = pu.post_id
        LEFT JOIN post_comment pc
            ON pc.post_id = p.id
        WHERE pu.user_id = $1
        GROUP BY p.id, p.post_title, p.post_content
        ORDER BY p.id;
    `,
        [userId],
    );

    return rows;
};

const getAllCommentsFromSpecificUserByUserId = async (userId) => {
    const { rows } = await pool.query(
        `
        SELECT 
            c.id AS comment_id,
            c.comment,
            c.created_at,
            pc.post_id AS post_id,
            p.post_title AS post_title
        FROM comments c
        JOIN comment_user cu
            ON cu.comment_id = c.id
        LEFT JOIN post_comment pc
            ON pc.comment_id = cu.comment_id
        LEFT JOIN posts p
            ON p.id = pc.post_id
        WHERE cu.user_id = $1
        GROUP BY c.id, pc.post_id, c.comment, p.post_title
        ORDER BY c.id;
    `,
        [userId],
    );

    return rows;
};

const getCommentsAndItsInfoFromSpecificPostByPostId = async (postId) => {
    const { rows } = await pool.query(
        `
        SELECT 
            c.id AS comment_id,
            c.comment,
            c.created_at,
            pc.post_id AS post_id,
            u.id AS user_id,
            u.first_name,
            u.last_name,
            u.user_name,
            u.avatar_url,
            u.is_admin
        FROM comments c
        RIGHT JOIN post_comment pc
            ON pc.comment_id = c.id
        JOIN comment_user cu
            ON cu.comment_id = c.id
        JOIN users u
            ON u.id = cu.user_id
        WHERE pc.post_id = $1
        GROUP BY c.id, c.comment, pc.post_id, u.id
        ORDER BY c.id;
    `,
        [postId],
    );

    return rows;
};

const insertNewCommentAndItsRelations = async (postId, userId, comment) => {
    const { rows: newCommentId } = await pool.query(
        `
        INSERT INTO comments
            (comment) VALUES
            ($1)
        RETURNING id;
    `,
        [comment],
    );

    await pool.query(
        `
        INSERT INTO post_comment
            (post_id, comment_id) VALUES
            ($1, $2);
    `,
        [postId, newCommentId[0].id],
    );

    await pool.query(
        `
        INSERT INTO comment_user
            (comment_id, user_id) VALUES
            ($1, $2);
    `,
        [newCommentId[0].id, userId],
    );
};

module.exports = {
    getUserByUserName,
    getUserById,
    insertNewUser,
    updateUserInfo,
    insertNewPostAndItsRelation,
    getPostQuantity,
    getSpecificPostAndItsInfoByPostId,
    getAllPostsAndTheirInfo,
    getInitialNumberOfPostsAndTheirInfoForBaseRender,
    getSpecificNumberOfPostsAndTheirInfoFromTheBeginningOrderById,
    getSpecificNumberOfPostsAndTheirInfoFromTheBeginningOrderByCommentNumber,
    getAllPostsFromSpecificUserByUserId,
    getAllCommentsFromSpecificUserByUserId,
    getCommentsAndItsInfoFromSpecificPostByPostId,
    insertNewCommentAndItsRelations,
};

const { body, query, validationResult, matchedData } = require('express-validator');

const db = require('../db/queries');

const homePageGet = async (req, res) => {
    const data = await db.getUserByUserName();
    // console.log({ data });

    res.json({ data });
};

module.exports = {
    homePageGet,
};

const db = require('../db/queries');

const checkHeath = async (req, res, next) => {
    await db.checkHealth();
    res.status(200).json({ ok: true, msg: 'server and DB are OK' });
};

module.exports = { checkHeath };

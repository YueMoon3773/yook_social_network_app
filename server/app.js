const express = require('express');
// const path = require('node:path');
const cors = require('cors');
require('dotenv').config();

/* =================================================================== */
/* IMPORT FOR PASSPORT + SESSION SET UP */
/* =================================================================== */
const pool = require('./db/pool');
const session = require('express-session');
const passport = require('passport');
const pgSession = require('connect-pg-simple')(session);

/* =================================================================== */
/* IMPORT FOR SET UP DB */
/* =================================================================== */
const populateDb = require('./db/populateDb');

/* =================================================================== */
/* IMPORT ROUTES */
/* =================================================================== */
const helperRouter = require('./routes/helperRouter');
const userRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');
const commentRouter = require('./routes/commentRouter');

/* =================================================================== */
/* App setup */
/* =================================================================== */
const app = express();
const BE_PORT = process.env.BE_PORT || 6600;

/* =================================================================== */
/* Set up to communicate with FE */
/* =================================================================== */
const allowedOrigins = ['http://localhost:3300', 'http://127.0.0.1:3300', `${process.env.FE_URL}`].filter(Boolean);
const corsOptions = {
    origin: (origin, callback) => {
        // allow non-browser requests (Postman, server-to-server)
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error(`CORS blocked: ${origin}`));
    },
    credentials: true, // for authentication, allows cookies to be send cross-origin
};
app.use(cors(corsOptions));

/* =================================================================== */
/* Populate DB */
/* =================================================================== */
const setupDB = async () => {
    if (process.env.POPULATE_DB === 'true') {
        try {
            console.log('STARTING SETUP DB');
            await populateDb();
            console.log('SETUP DB DONE');
        } catch (err) {
            console.log('SETUP DB FAILED', err);
        }
    } else {
        console.log('POPULATE_DB not enabled - skipping DB population.');
    }
};

(async () => {
    await setupDB();
})();

/* =================================================================== */
/* Set up static directory */
/* =================================================================== */
// const publicPath = path.join(__dirname, 'public');
// app.use(express.static(publicPath));

/* =================================================================== */
/* Use middleware to get post req, take all data from url and convert to an encoded object to use in req */
/* =================================================================== */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* =================================================================== */
/* SESSION + PASSPORT SET UP */
/* =================================================================== */
const sessionStore = new pgSession({
    pool,
    createTableIfMissing: true,
    pruneSessionInterval: 30 * 60, // Delete expired session rows stored in postgres every 30 min
});
app.set('trust proxy', 1);
app.use(
    session({
        secret: `${process.env.SESSION_SECRET_KEY}`,
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // ← MUST be true in production (HTTPS)
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // ← MUST be 'none' for cross-origin
            maxAge: 3 * 24 * 60 * 60 * 1000,
        },
    }),
);

require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

// app.use((req, res, next) => {
//     res.locals.user = req.user;
//     next();
// });

/* =================================================================== */
/* Routes logic handle */
/* =================================================================== */
app.use('/health', helperRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/comment', commentRouter);

/* =================================================================== */
/* Handle Errors */
/* =================================================================== */
app.use((err, req, res, next) => {
    const errStatusCode = err.status || err.statusCode || 500;
    const errMsg = err.message;
    console.error({ errMsg });
    if (errStatusCode !== 404) console.log({ errStatusCode });

    res.status(errStatusCode).json({ errStatusCode, message: errMsg });
});

// app.use((req, res) => {
//     res.status(404).render('404', { pageTitle: 'Error' });
// });

app.listen(BE_PORT, (err) => {
    if (err) console.log(err);
    console.log(`Listen on PORT: ${BE_PORT}`);
});

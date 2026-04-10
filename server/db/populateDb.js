#! /usr/bin/env node
const { Client } = require('pg');
require('dotenv').config();
const { createTablesSQL, insertToTablesSQL } = require('./seedSql');

async function populateDb() {
    console.log('PREPARING DB...');
    const client = new Client({
        // connectionString: `postgresql://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
        connectionString: `${process.env.DB_URL}`,
    });
    console.log('DONE SETTING CONNECTION STRING');

    await client.connect();
    console.log('CONNECTED TO DB');

    await client.query(createTablesSQL);
    console.log('CREATED TABLES');

    await client.query(insertToTablesSQL);
    console.log('INSERTED DATA INTO TABLES');

    await client.end();
    console.log('DB SET UP DONE');
}

// populateDb();

module.exports = populateDb;

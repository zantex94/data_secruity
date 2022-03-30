'use strict';

const { MongoClient } = require('mongodb');

const url = "mongodb://0.0.0.0:27017";
const client = new MongoClient(url);

module.exports = {
    connect: async function (dbname) {
        await client.connect();
        const db = client.db(dbname);
        return db;
    },
    close: async function() {
        client.close();
    }
}
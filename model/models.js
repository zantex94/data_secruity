'use strict';
/*
 * models
 * functions for data manipulation
 */
const bcrypt = require('bcrypt');
const dbmod = require('./dbMod.js');
const dbw = "world";

module.exports = {
    // async insertCity(obj) {
    //     const db = await dbmod.connect(dbw);
    //     console.log(obj);
    //     await db.collection("city").insertOne({"name" : obj.name, "countrycode" : obj.countrycode, "population" : obj.population})
    //     dbmod.close();
    // },
    // async showCity (city) {
    //     const db = await dbmod.connect(dbw);
    //     const rows = await db.collection("city").find({countrycode: city + ""}).toArray();
    //     dbmod.close();
    //     return rows;
    // }
}
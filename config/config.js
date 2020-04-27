const path = require("path");


module.exports = {
    development: {
        username: "root",
        password: null,
        database: "",
        host: "127.0.0.1",
        dialect: "sqlite",
        storage: path.join(__dirname, "../db.sqlite"),
        logging: str => console.log(`************************************\n${str}\n************************************`)
    }
}
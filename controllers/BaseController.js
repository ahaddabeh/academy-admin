class BaseController {
    constructor(db) {
        this.db = db;
    }

    create = async (req, res) => {
        await res.status(200).send("Create handler");
    }

    read = async (req, res) => {
        await res.status(200).send("Read single record");
    }

    list = async (req, res) => {
        await res.status(200).send("Reads a list of records");
    }

    update = async (req, res) => {
        await res.status(200).send("Update record");
    }

    delete = async (req, res) => {
        await res.status(200).send("Delete record");
    }



}

module.exports = BaseController;
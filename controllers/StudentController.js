const BaseController = require("./BaseController");

class StudentController extends BaseController {
    constructor(db) {
        super(db)
    }

    // Override BaseController List method 
    list = async (req, res) => {
        req.options = {
            include: ["mother", "father", "teacher"]
        }
        const result = await this._findAndCountAll(req, res);
        await res.status(200).send(result);
    }

    read = async (req, res) => {
        req.options = {
            include: ["mother", "father", "teacher"]
        }
        const result = await this._findByPk(req, res);
        await res.status(200).send(result);
    }
}

module.exports = StudentController;
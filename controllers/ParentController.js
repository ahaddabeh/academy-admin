const BaseController = require("./BaseController");

class ParentController extends BaseController {
    constructor(models, model) {
        super(models, model);
        this.models = models;
    }
    read = async (req, res) => {
        req.options = {
            include: [
                {
                    model: this.models.Student,
                    through: "parents_students",
                }
            ]
        }
        const result = await this._findByPk(req, res);
        await res.status(200).send(result);
    }
}

module.exports = ParentController;
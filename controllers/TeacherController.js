const BaseController = require("./BaseController");

class TeacherController extends BaseController {
    constructor(models, model) {
        super(models, model)
        this.models = models
    }

    read = async (req, res) => {
        req.options = {
            include: [this.models.Student]
        }
        const result = await this._findByPk(req, res);
        await res.status(200).send(result);
    }
}

module.exports = TeacherController;
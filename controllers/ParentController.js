const BaseController = require("./BaseController");

class ParentController extends BaseController {
    constructor(db) {
        super(db)
    }
}

module.exports = ParentController;
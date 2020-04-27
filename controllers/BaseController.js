class BaseController {
    constructor(model) {
        this.model = model;
    }


    _findAndCountAll = async (req, res) => {
        const { page = 1, size = 25, sort = "createdAt", order = "DESC", ..._where } = req.query
        const { where = null, include = null, ..._options } = req.options || {}
        const options = {
            where: { ...where, ..._where },
            include,
            order: [[sort, order]],
            limit: size,
            offset: size * (page - 1),
            ..._options
        }
        return await this.model.findAndCountAll(options);
    }

    _create = async (req, res) => {
        return await this.model.create(req.body);
    }

    _findByPk = async (req, res) => {
        const { where = null, include = null, ..._options } = req.options || {}
        const options = { where, include, ..._options };
        return await this.model.findByPk(req.params.id, options);
    }

    create = async (req, res) => {
        await res.status(200).send("Create handler");
    }

    read = async (req, res) => {
        const result = await this._findByPk(req, res);
        await res.status(200).send(result);
    }

    list = async (req, res) => {
        const result = await this._findAndCountAll(req, res);
        await res.status(200).send(result);
    }

    update = async (req, res) => {
        await res.status(200).send("Update record");
    }

    delete = async (req, res) => {
        await res.status(200).send("Delete record");
    }



}

module.exports = BaseController;
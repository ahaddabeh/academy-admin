const BaseController = require("./BaseController");
// const sequelize = require("sequelize")
class StudentController extends BaseController {
    constructor(models, model) {
        super(models, model)
        this.models = models
    }

    // Override BaseController List method 
    // list = async (req, res) => {
    //     req.options = {
    //         include: ["mother", "father", "teacher"]
    //     }
    //     const result = await this._findAndCountAll(req, res);
    //     await res.status(200).send(result);
    // }

    read = async (req, res) => {
        req.options = {
            include: [
                {
                    model: this.models.Parent,
                    through: "parents_students",
                },
                "teacher"
            ]
        }
        const result = await this._findByPk(req, res);
        await res.status(200).send(result);
    }

    registerStudent = async (req, res) => {
        const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(req.body);
        const { mother: m_data, father: f_data, student: s_data } = req.body
        const _teachers = await this.models.Teacher.findAll({
            where: {
                grade: +s_data.grade
            }
        })
        const teachers = JSON.parse(JSON.stringify(_teachers));
        const teacherId = teachers[getRandom(0, teachers.length - 1)].id
        await this.models.sequelize.transaction(async (transaction) => {
            const mother = await this.models.Parent.create(m_data, { transaction });
            const father = await this.models.Parent.create(f_data, { transaction });
            const student = await this.models.Student.create({ ...s_data, teacherId }, { transaction });
            transaction.afterCommit(async () => {
                await student.addParent(mother.id);
                await student.addParent(father.id);

            });
        });
        await res.status(200).send({ msg: "successfully registered" });
    };

}

module.exports = StudentController;
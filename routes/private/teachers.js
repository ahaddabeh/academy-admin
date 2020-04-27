const express = require("express");
const { TeacherController } = require("../../controllers")
const router = express.Router();

router.get("/", TeacherController.list);
router.get("/:id", TeacherController.read);
router.patch("/:id", TeacherController.update);
router.post("/", TeacherController.create);
router.delete("/:id", TeacherController.delete);


module.exports = router
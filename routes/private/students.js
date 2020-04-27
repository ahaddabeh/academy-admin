const express = require("express");
const { StudentController } = require("../../controllers")
const router = express.Router();

router.get("/", StudentController.list);
router.get("/:id", StudentController.read);
router.patch("/:id", StudentController.update);
router.post("/", StudentController.create);
router.delete("/:id", StudentController.delete);


module.exports = router
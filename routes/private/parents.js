const express = require("express");
const { ParentController } = require("../../controllers")
const router = express.Router();

router.get("/", ParentController.list);
router.get("/:id", ParentController.read);
router.patch("/:id", ParentController.update);
router.post("/", ParentController.create);
router.delete("/:id", ParentController.delete);


module.exports = router
const express = require("express");
const { ParentController } = require("../../controllers")
const router = express.Router();


// List all
router.get("/", ParentController.list);
// Get one
router.get("/:id", ParentController.read);
// Update
router.patch("/:id", ParentController.update);
// Create new
router.post("/", ParentController.create);
// Delete
router.delete("/:id", ParentController.delete);


module.exports = router
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => console.log("list parents"));
router.get("/:id", (req, res) => console.log("get parent"));
router.patch("/:id", (req, res) => console.log("edit parents"));
router.post("/", (req, res) => console.log("add new parent"));
router.delete("/:id", (req, res) => console.log("add new parent"));



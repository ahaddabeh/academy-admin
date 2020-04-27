const express = require("express");

const router = express.Router();

router.get("/", (req, res) => console.log("list teachers"));
router.get("/:id", (req, res) => console.log("get teacher"));
router.patch("/:id", (req, res) => console.log("edit teachers"));
router.post("/", (req, res) => console.log("add new teacher"));
router.delete("/:id", (req, res) => console.log("add new teacher"));
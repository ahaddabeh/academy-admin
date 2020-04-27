const express = require("express");

const router = express.Router();

router.get("/", (req, res) => console.log("list students"));
router.get("/:id", (req, res) => console.log("get student"));
router.patch("/:id", (req, res) => console.log("edit students"));
router.post("/", (req, res) => console.log("add new student"));
router.delete("/:id", (req, res) => console.log("add new student"));
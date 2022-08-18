const express = require("express");
const router = express.Router();
const {
    getAll,
    getFavorites,
    getWeb,
    getApps,
    getDesigns,
    getById,
} = require("../controller/projectController");

// get favorite projects
router.get("/", getAll);

// get favorites
router.get("/favorites/", getFavorites);

// get web
router.get("/web", getWeb);

// getprojects
router.get("/apps", getApps);

// get designs
router.get("/designs", getDesigns);

// get by id
router.get("/:id", getById);

module.exports = router;

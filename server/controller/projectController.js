const Project = require("../model/projectModel");

// get all projects
const getAll = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
        console.log("app is running");
        return;
    } catch (err) {
        console.error(err);
    }
};

const getById = async (req, res) => {
    try {
        const projects = await Project.findById(req.params.id);
        res.status(200).json(projects);
        console.log("app is running");
        return;
    } catch (err) {
        console.error(err);
    }
};

const getFavorites = async (req, res) => {
    try {
        const projects = await Project.find({ favorite: true });
        res.status(200).json(projects);
        console.log("app is running");
        return;
    } catch (err) {
        console.error(err);
    }
};

const getWeb = async (req, res) => {
    const projects = await Project.find({ type: "web" });
    res.status(200).json(projects);
    console.log("app is running");
    return;
};

const getApps = async (req, res) => {
    const projects = await Project.find({ type: "app" });
    res.status(200).json(projects);
    console.log("app is running");
    return;
};

const getDesigns = async (req, res) => {
    const projects = await Project.find({ type: "design" });
    res.status(200).json(projects);
    console.log("app is running");
    return;
};

module.exports = {
    getAll,
    getFavorites,
    getWeb,
    getApps,
    getDesigns,
    getById,
};

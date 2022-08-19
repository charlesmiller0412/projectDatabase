const Project = require("../model/projectModel");

// get all projects
const getAll = async (req, res) => {
    try {
        const projects = await Project.find().sort({ title: 1, _id: 1 });
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
        const projects = await Project.find({ favorite: true }).sort({
            title: 1,
            _id: 1,
        });
        res.status(200).json(projects);
        console.log("app is running");
        return;
    } catch (err) {
        console.error(err);
    }
};

const getWeb = async (req, res) => {
    const projects = await Project.find({ type: "web" }).sort({
        title: 1,
        _id: 1,
    });
    res.status(200).json(projects);
    console.log("app is running");
    return;
};

const getApps = async (req, res) => {
    const projects = await Project.find({ type: "app" }).sort({
        title: 1,
        _id: 1,
    });
    res.status(200).json(projects);
    console.log("app is running");
    return;
};

const getDesigns = async (req, res) => {
    const projects = await Project.find({ type: "design" }).sort({
        title: 1,
        _id: 1,
    });
    res.status(200).json(projects);
    console.log("app is running");
    return;
};

const getPortfolios = async (req, res) => {
    const projects = await Project.find({ type: "portfolio" }).sort({
        title: 1,
        _id: 1,
    });
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
    getPortfolios,
    getById,
};

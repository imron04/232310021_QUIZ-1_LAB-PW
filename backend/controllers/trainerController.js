const db = require("../models");
const Trainer = db.Trainer;
const { Op } = db.Sequelize;

exports.getAllTrainers = async (req, res) => {
  try {
    let orderClause = [["id", "ASC"]];
    const trainers = await Trainer.findAll({ order: orderClause });
    res.json({
      success: true,
      count: trainers.length,
      data: trainers,
    });
  } catch (error) {
    console.error("Error fetching trainers:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch trainers",
      error: error.message,
    });
  }
};

exports.getTrainerById = async (req, res) => {
  try {
    const trainer = await Trainer.findByPk(req.params.id);
    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: "Trainer not found",
      });
    }
    res.json({
      success: true,
      data: trainer,
    });
  } catch (error) {
    console.error("Error fetching trainer:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch trainer",
      error: error.message,
    });
  }
};

exports.createTrainer = async (req, res) => {
  try {
    const { name, role, bio, image } = req.body;
    if (!name || !role || !bio) {
      return res.status(400).json({
        success: false,
        message: "Name, Role, Bio are required",
      });
    }

    const trainer = await Trainer.create({
      name,
      role,
      bio,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Traier berhasil dibuat",
      data: trainer,
    });
  } catch (error) {
    console.error("error creating trainer:", error);
    // Handle validation errors
    if (error.name === "SequelizeValidationError") {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors.map((e) => ({
          field: e.path,
          message: e.message,
        })),
      });
    }
    res.status(500).json({
      success: false,
      message: "Failed to create book",
      error: error.message,
    });
  }
};
exports.patchTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByPk(req.params.id);
    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: "Trainer not found",
      });
    }

    await trainer.update(req.body);

    res.json({
      success: true,
      message: "Trainer berhasil diupdate",
      data: trainer,
    });
  } catch (error) {
    console.error("Error updating trainer:", error);
    if (error.name === "SequelizeValidationError") {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors.map((e) => ({
          field: e.path,
          message: e.message,
        })),
      });
    }
    res.status(500).json({
      success: false,
      message: "gagal update trainer",
      error: error.message,
    });
  }
};

exports.deleteTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByPk(req.params.id);
    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: "Trainer tidak ditemukan",
      });
    }
    await trainer.destroy();
    res.json({
      success: true,
      message: "Trainer berhasil dihapus",
    });
  } catch (error) {
    console.error("error deleteing trainer:", error);
    res.status(500).json({
      success: false,
      message: "Failed delete trainer",
      error: error.message,
    });
  }
};

const express = require("express");
const router = express.Router();
const trainerController = require("../controllers/trainerController");

router.get("/", trainerController.getAllTrainers);
router.get("/:id", trainerController.getTrainerById);
router.post("/", trainerController.createTrainer);
router.patch("/:id", trainerController.patchTrainer);
router.delete("/:id", trainerController.deleteTrainer);

module.exports = router;

const express = require("express");
const router = express.Router();

const carsController = require("../controllers/carsController");

router.get("/", carsController.getAllCars);
router.post("/", carsController.addCars);
router.get("/:id", carsController.getById);
router.put("/:id", carsController.updateCars);
router.delete("/:id", carsController.deleteCars);

module.exports = router;
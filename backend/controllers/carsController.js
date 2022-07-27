const Car = require("../models/carsModel");

const getAllCars = async (req, res, next) => {
  let cars;
  try {
    cars = await Car.find();
  } catch (err) {
    console.log(err);
  }

  if (!cars) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ cars });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let car;
  try {
    car = await Car.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!car) {
    return res.status(404).json({ message: "No Car found" });
  }
  return res.status(200).json({ car });
};

const addCars = async (req, res, next) => {
  const { matricule,date,typeV,nomv,prenomv,adressev,codepostal,villev,telv,emailv,image } = req.body;
  let car;
  try {
    car = new Car({
      matricule,date,typeV,nomv,prenomv,adressev,codepostal,villev,telv,emailv, image
    });
    await car.save();
  } catch (err) {
    console.log(err);
  }

  if (!car) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ car });
};

const updateCars = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let car;
  try {
    car = await Car.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    car = await car.save();
  } catch (err) {
    console.log(err);
  }
  if (!car) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ car });
};

const deleteCars = async (req, res, next) => {
  const id = req.params.id;
  let car;
  try {
    car = await Car.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!car) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllCars = getAllCars;
exports.addCars = addCars;
exports.getById = getById;
exports.updateCars = updateCars;
exports.deleteCars = deleteCars;
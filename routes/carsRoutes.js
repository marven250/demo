const express = require("express");
const router = express.Router();
const { listCars, findCar } = require("../Data/data");


router.get("/", (req, res)=>{
    const cars = listCars();
    res.json(cars)
})


router.get("/:id", (req, res)=>{
    const carId = req.params.id
    const car = findCar(carId)

    res.json(car)
})


module.exports = router;
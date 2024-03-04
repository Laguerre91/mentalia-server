const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const Psyc = require("../models/Psyc.model")

router.get('/', (req, res, next) => {

    Psyc
        .find()
        .populate("appointments")
        .then(allPsics => res.json(allPsics))
        .catch(err => next(err))
})

router.get('/:psycId', (req, res, next) => {
    const { psycId } = req.params

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    Psyc
        .findById(psycId)
        .populate("appointments")
        .then(psic => res.status(200).json(psic))
        .catch(err => next(err))

})

router.post("/", (req, res, next) => {
    const { name, lastName, contact, password, birth, profileImage, yearsOfExperience, rate, appointments } = req.body

    Psyc
        .create({ name, lastName, contact, password, birth, profileImage, yearsOfExperience, rate, appointments: [] })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.put("/:psycId", (req, res, next) => {
    const { psycId } = req.params
    const { name, lastName, contact, password, birth, profileImage, yearsOfExperience, rate, appointments } = req.body


    if (!mongoose.Types.ObjectId.isValid(psycId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    Psyc
        .findByIdAndUpdate(
            psycId,
            { name, lastName, contact, password, birth, profileImage, yearsOfExperience, rate, appointments },
            { new: true, runValidators: true })
        .then(updatedPsic => res.json(updatedPsic))
        .catch(err => next(err))
})

router.delete("/:psycId", (req, res, next) => {
    const { psycId } = req.params

    if (!mongoose.Types.ObjectId.isValid(psycId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    Psyc
        .findByIdAndDelete(psycId)
        .then(() => res.json({ message: `Psychologist with id ${psycId} has been deleted successfully` }))
        .catch(err => next(err))
})

module.exports = router
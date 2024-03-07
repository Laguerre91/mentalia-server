const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const Appointment = require('./../models/Appointment.model')
require('./../models/User.model')
require('./../models/Psyc.model')

router.get('/', (req, res, next) => {

    Appointment
        .find()
        .populate('user', 'psycologist')
        .then(allAppointments => res.json(allAppointments))
        .catch(err => next(err))
})

router.get('/:appointmentId', (req, res, next) => {

    const { appointmentId } = req.params

    if (!mongoose.Types.ObjectId.isValid(appointmentId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    Appointment
        .findById(appointmentId)
        .populate('user', 'psycologist')
        .then((appointment) => res.json(appointment))
        .catch(err => next(err))
})

router.post('/', (req, res, next) => {

    const { date, psycologist, client, comments } = req.body

    Appointment
        .create({ date, psycologist, client, comments })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.put('/:appointmentId', (req, res, next) => {

    const { appointmentId } = req.params

    if (!mongoose.Types.ObjectId.isValid(appointmentId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    Appointment
        .findByIdAndUpdate(appointmentId, req.body, { new: true })
        .then((updatedAppointment) => res.json(updatedAppointment))
        .catch(err => next(err))
})

router.delete('/:appointmentId', (req, res, next) => {

    const { appointmentId } = req.params

    if (!mongoose.Types.ObjectId.isValid(appointmentId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    Appointment
        .findByIdAndDelete(appointmentId)
        .then(() => res.json({ message: `Appointment with id ${appointmentId} has been deleted successfully` }))
        .catch(err => next(err))

})

module.exports = router
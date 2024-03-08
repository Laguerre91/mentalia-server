const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const Appointment = require('./../models/Appointment.model')
const User = require('./../models/User.model')
const Psycologist = require('./../models/Psyc.model')

router.post('/', (req, res, next) => {

    const { date, time, client, comments, psycologist } = req.body

    Appointment
        .create({ date, time, client, comments, psycologist })
        .then((createdAppointment) => {
            return User.findByIdAndUpdate(client, {
                $push: { appointments: createdAppointment._id }
            })
        })
        .then((createdAppointment) => {
            return Psycologist.findByIdAndUpdate(psycologist, {
                $push: { appointments: createdAppointment._id }
            })
        })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/', (req, res, next) => {

    Appointment
        .find()
        // .populate('psycs')
        .then(allAppointments => res.json(allAppointments))
        .catch(err => next(err))

})

router.get('/:appointmentId', (req, res, next) => {

    const { appointmentId } = req.params
    const { date, psycologist, client, comments } = req.body

    if (!mongoose.Types.ObjectId.isValid(appointmentId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    Appointment
        .findByIdAndUpdate(
            appointmentId,
            { date, psycologist, client, comments },
            { new: true, runValidators: true }
        )
        .populate('psycs')
        .then(updatedAppointment => res.json(updatedAppointment))
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
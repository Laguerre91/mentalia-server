const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const Appointment = require('./../models/Appointment.model')
const User = require('./../models/User.model')
const Psycologist = require('./../models/Psyc.model')

router.post('/', (req, res, next) => {

    const { date, client, comments, psycologist } = req.body

    Appointment
        .create({ date, psycologist, client, comments, psycologist })
        .then((newAppointment) => {
            return Psycologist.findByIdAndUpdate(psycologist, {
                $push: { appointments: newAppointment._id }
            })
        })
        .then((newAppointment) => {
            return User.findByIdAndUpdate(client, {
                $push: { appointments: newAppointment._id }
            })
        })
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router
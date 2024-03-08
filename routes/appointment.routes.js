const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const Appointment = require('./../models/Appointment.model')
const User = require('./../models/User.model')
const Psycologist = require('./../models/Psyc.model')

router.post('/', (req, res, next) => {

    const { date, client, comments, psycologist } = req.body

    Appointment
        .create({ date, client, comments, psycologist })
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

module.exports = router
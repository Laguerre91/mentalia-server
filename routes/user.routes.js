const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const User = require('./../models/User.model')
require('./../models/Record.model')
const Appointment = require('./../models/Appointment.model')


router.get('/:userId', (req, res, next) => {
    const { userId } = req.params

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    User
        .findById(userId)
        .populate({
            path: 'appointments',
            populate: {
                path: 'psycologist',
                model: 'Psyc'
            }
        })
        .populate("records")
        .populate({
            path: 'posts',
            populate: {
                path: 'username',
                model: 'Post'
            }
        })
        .then((user) => res.json(user))
        .catch(err => next(err))
})

router.put('/:userId', (req, res, next) => {
    const { userId } = req.params

    const { email,
        password,
        username,
        imageUrl,
        birth,
        gender,
        sexualOrientation,
        employed,
        sentimentalStatus,
        hoursOfSleep,
        records,
        appointments } = req.body

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    User
        .findByIdAndUpdate(
            userId,
            {
                email,
                password,
                username,
                imageUrl,
                birth,
                gender,
                sexualOrientation,
                employed,
                sentimentalStatus,
                hoursOfSleep,
                records,
                appointments
            },

            { new: true, runValidators: true })
        .populate("appointments records")
        .then(updatedUser => res.json(updatedUser))
        .catch(err => next(err))

})

router.delete('/:userId', (req, res, next) => {
    const { userId } = req.params

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    User
        .findByIdAndDelete(userId)
        .then(() => res.json({ message: `User with id ${userId} is removed successfully` }))
        .catch(err => next(err))

})


module.exports = router
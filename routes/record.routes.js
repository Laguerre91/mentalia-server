const express = require("express")
const router = express.Router()
const Record = require('./../models/Record.model')
const User = require('./../models/User.model')


router.post('/', (req, res, next) => {

    const {
        date,
        mood,
        rateDay, worries, didExercise, didHidrate, ateHealthy, hasPsyc, isMedicated, isMenstruating, hasPeriodPain, weather, hoursOfSleep, reflection, userId } = req.body

    Record
        .create({ date, mood, rateDay, worries, didExercise, didHidrate, ateHealthy, hasPsyc, isMedicated, isMenstruating, hasPeriodPain, weather, hoursOfSleep, reflection, user: userId })
        .then((newRecord) => {
            return User.findByIdAndUpdate(userId, {
                $push: { records: newRecord._id }
            })
        })
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router
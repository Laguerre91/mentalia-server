const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const Record = require('./../models/Record.model')
const User = require('./../models/User.model')


router.post('/', (req, res, next) => {

    const {
        date,
        mood,
        rateDay,
        worries,
        didExercise,
        didHidrate,
        ateHealthy,
        hasPsyc,
        isMedicated,
        isMenstruating,
        hasPeriodPain,
        weather,
        hoursOfSleep,
        reflection,
        user
    } = req.body

    Record
        .create({
            date,
            mood,
            rateDay,
            worries,
            didExercise,
            didHidrate,
            ateHealthy,
            hasPsyc,
            isMedicated,
            isMenstruating,
            hasPeriodPain,
            weather,
            hoursOfSleep,
            reflection,
            user
        })
        .then((newRecord) => {
            return User.findByIdAndUpdate(user, {
                $push: { records: newRecord._id }
            })
        })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/', (req, res, next) => {

    Record
        .find()
        .then(allRecords => res.json(allRecords))
        .catch(err => next(err))

})

router.get('/:recordId', (req, res, next) => {

    const { recordId } = req.params

    if (!mongoose.Types.ObjectId.isValid(recordId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    Record
        .findById(recordId)
        .then(updatedRecord => res.json(updatedRecord))
        .catch(err => next(err))

})

router.put('/:recordId', (req, res, next) => {
    const { recordId } = req.params

    const {
        date,
        mood,
        rateDay,
        worries,
        didExercise,
        didHidrate,
        ateHealthy,
        hasPsyc,
        isMedicated,
        isMenstruating,
        hasPeriodPain,
        weather,
        hoursOfSleep,
        reflection,
        user
    } = req.body

    if (!mongoose.Types.ObjectId.isValid(recordId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    Record
        .findByIdAndUpdate(
            recordId,
            {
                date,
                mood,
                rateDay,
                worries,
                didExercise,
                didHidrate,
                ateHealthy,
                hasPsyc,
                isMedicated,
                isMenstruating,
                hasPeriodPain,
                weather,
                hoursOfSleep,
                reflection,
                user
            },

            { new: true, runValidators: true })
        .then(updatedRecord => res.json(updatedRecord))
        .catch(err => next(err))

})

router.delete('/:recordId', (req, res, next) => {
    const { recordId } = req.params

    if (!mongoose.Types.ObjectId.isValid(recordId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    Record
        .findByIdAndDelete(recordId)
        .then(() => res.json({ message: `Record with id ${recordId} has been deleted successfully` }))
        .catch(err => next(err))
})

module.exports = router
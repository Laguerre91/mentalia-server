const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const User = require('./../models/User.model')


router.get('/:userId', (req, res, next) => {
    const { userId } = req.params

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    User
        .findById(userId)
        .populate("records", "appointments")
        .then((user) => res.status(200).json(user))
        .catch(err => next(err))
})

router.put('/:userId', (req, res, next) => {
    const { userId } = req.params

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    User
        .findByIdAndUpdate(userId, req.body, { new: true })
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
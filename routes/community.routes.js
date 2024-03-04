const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const Post = require('./../models/Post.model')

router.get('/', (req, res, next) => {

    Post
        .find()
        .populate('user')
        .then(allPosts => res.json(allPosts))
        .catch(err => next(err))
})

router.put('/:postId', (req, res, next) => {
    const { postId } = req.params

    if (!mongoose.Types.ObjectId.isValid(postId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    Post
        .findByIdAndUpdate(postId, req.body, { new: true })
        .then((updatedPost) => res.json(updatedPost))
        .catch(err => next(err))
})

router.post('/postId', (req, res, next) => {
    const { username, comment, image, date, likes } = req.body

    Post
        .create({ username, comment, image, date, likes, replies: [] })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.delete('/postId', (req, res, next) => {
    const { postId } = req.params

    if (!mongoose.Types.ObjectId.isValid(postId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    Post
        .findByIdAndDelete(postId)
        .then(() => res.json({ message: `Post with id ${postId} has been deleted successfully` }))
        .catch(err => next(err))

})

module.exports = router
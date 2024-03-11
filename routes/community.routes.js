const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = require('./../models/Post.model');
const User = require('./../models/User.model');
const Reply = require('./../models/Reply.model')

router.get('/posts', (req, res, next) => {
    Post.find()
        .populate('username')
        .populate({
            path: 'replies',
            populate: {
                path: 'username'
            },
        })
        .then(allPosts => res.json(allPosts))
        .catch(error => next(error));
});

router.post('/posts', (req, res, next) => {
    const { username, comment, date } = req.body;

    Post.create({ username, comment, date })
        .then(createdPost => {
            return User.findByIdAndUpdate(username, {
                $push: { posts: createdPost._id }
            });
        })
        .then(response => res.json(response))
        .catch(error => next(error));
});

router.post('/posts/:postId/replies', (req, res, next) => {
    const { postId: post } = req.params;
    const { reply, username, date } = req.body

    Reply
        .create({ reply, username, date, post })
        .then(createdReply => {
            Post.findByIdAndUpdate(post, {
                $push: { replies: createdReply._id }
            }).then().catch(err => next(err));
            return createdReply;
        })
        .then(createdReply => {
            console.log(`Enviando respuesta al usuario: ${createdReply}`)
            res.json(createdReply)
        })
        .catch(err => next(err))
})


router.delete('/posts/:postId', (req, res, next) => {
    const { postId } = req.params;

    Post.findByIdAndDelete(postId)
        .then(() => res.json({ message: `Post with id ${postId} has been deleted successfully` }))
        .catch(error => next(error));
});

module.exports = router;

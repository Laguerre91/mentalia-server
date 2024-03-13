const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = require('./../models/Post.model');
const User = require('./../models/User.model');
const Reply = require('./../models/Reply.model')

router.get('/posts', (req, res, next) => {
    Post
        .find()
        .populate('owner replies')
        .then(allPosts => res.json(allPosts))
        .catch(error => next(error));
});

router.post('/posts', (req, res, next) => {

    const { owner, comment, date } = req.body;

    Post.create({ owner, comment, date })
        .then(createdPost => {
            return User.findByIdAndUpdate(owner, {
                $unshift: { posts: createdPost._id }
            });
        })
        .then(response => res.json(response))
        .catch(error => next(error));
});


router.get('/posts/:postId/replies', (req, res, next) => {

    const { postId } = req.params;

    Reply
        .find({ post: postId })
        .populate('owner')
        .then(allReplies => res.json(allReplies))
        .catch(error => next(error));
})

router.post('/posts/:postId/replies', (req, res, next) => {

    const { postId: post } = req.params;
    const { reply, owner, date } = req.body

    Reply
        .create({ reply, owner, date, post })
        .then(createdReply => {
            return Post.findByIdAndUpdate(
                post,
                { $push: { replies: createdReply._id } },
                { new: true }
            )
        })
        .then(updatedPost => res.json(updatedPost))
        .catch(err => next(err))
})


router.delete('/posts/:postId', (req, res, next) => {
    const { postId } = req.params;

    Post.findByIdAndDelete(postId)
        .then(() => res.json({ message: `Post with id ${postId} has been deleted successfully` }))
        .catch(error => next(error));
});

router.delete('/replies/:replyId', (req, res, next) => {
    const { replyId } = req.params

    Reply
        .findByIdAndDelete(replyId)
        .then(() => res.json({ message: `Reply with id ${replyId} has been deleted successfully` }))
        .catch(error => next(error));

})

module.exports = router;

const { Schema, model } = require("mongoose")

const replySchema = new Schema(

    {
        post: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        reply: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }, {

    timestamps: true
}

)


const Reply = model("Reply", replySchema)

module.exports = Reply

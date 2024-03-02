const { Schema, model } = require("mongoose")

const postSchema = new Schema(
    {
        username: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        comment: {
            type: String,
            required: true,
            default: ''
        },
        image: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        },
        likes: {
            type: Number,
            default: 0
        },
        replies: [
            {
                username: {
                    type: Schema.Types.ObjectId,
                    ref: 'User'
                },
                comment: {
                    type: String,
                    required: true
                },
                date: {
                    type: Date,
                    default: Date.now
                }
            }
        ],
    },
    {
        timestamps: true
    }
)

const Post = model("Post", postSchema)

module.exports = Post
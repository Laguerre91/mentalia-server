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
        date: {
            type: String,
            default: new Date().toISOString()
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
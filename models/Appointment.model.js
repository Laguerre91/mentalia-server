const mongoose = require("mongoose");
const { Schema, model } = mongoose

const appointmentSchema = new Schema(

    {
        date: {
            type: Date,
            default: Date.now,
            required: true
        },
        psycologist: {
            type: Schema.Types.ObjectId,
            ref: 'Psic',
            required: true
        },
        client: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        comments: {
            type: String
        }
    }, {
    timestamps: true
}
)

const Appointment = model("Appointment", appointmentSchema)

module.exports = Appointment
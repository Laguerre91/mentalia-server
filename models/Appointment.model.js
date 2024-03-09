const mongoose = require("mongoose");
const { Schema, model } = mongoose

const appointmentSchema = new Schema(

    {
        date: {
            type: String,
            default: new Date().toISOString(),
            required: true
        },
        time: {
            type: String,
            required: true
        },
        psycologist: {
            type: Schema.Types.ObjectId,
            ref: 'Psyc',
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
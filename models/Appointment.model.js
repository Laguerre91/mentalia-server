const { Schema, model } = require("mongoose")

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
        }
    }, {
    timestamps: true
}
)

const Appointment = model("Appointment", appointmentSchema)

module.exports = Appointment
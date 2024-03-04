const { Schema, model } = require("mongoose")

const psicSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        contact: [{
            email: {
                type: String,
                required: [true, 'Email is required.'],
                lowercase: true,
                trim: true
            },
            phoneNumber: {
                type: String,
                required: true
            }
        }],
        password: {
            type: String,
            required: [true, 'Password is required.']
        },
        birth: {
            type: Date
        },
        profileImage: {
            type: String,
            required: true
        },
        yearsOfExperience: {
            type: Number,
            default: 0
        },
        rate: {
            type: [Number],
            default: 0
        },
        appointments: [{
            type: Schema.Types.ObjectId,
            ref: 'Appointment'
        }]
    }, {
    timestamps: true
}
)

const Psic = model("Psic", psicSchema)

module.exports = Psic

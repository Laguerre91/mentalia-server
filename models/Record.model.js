const { Schema, model, SchemaType } = require("mongoose")

const recordSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        date: {
            type: Date,
            default: new Date,
            required: true
        },
        mood: {
            type: String,
            required: [true, 'Mood es necesario.'],
            enum: ['Muy mal', 'Mal', 'Algo mal', 'Normal', 'Algo bien', 'Bien', 'Muy bien']
        },
        rateDay: {
            type: Number,
            required: [true, 'Rating es necesario'],
            enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        worries: {
            type: [String],
            enum: ['Salud', 'Deporte', 'Identidad', 'Espiritualidad', 'Familia', 'Amistades', 'Pareja', 'Soledad', 'Trabajo', 'Educación', 'Dinero', 'Actualidad']
        },
        didExercise: {
            type: Boolean,
            default: false
        },
        didHidrate: {
            type: Boolean,
            default: false,
        },
        ateHealthy: {
            type: Boolean,
            default: false
        },
        hasPsyc: {
            type: Boolean,
            default: false
        },
        isMedicated: {
            type: Boolean,
            default: false
        },
        isMenstruating: {
            type: Boolean,
            default: false
        },
        hasPeriodPain: {
            type: Boolean,
            default: false
        },
        weather: {
            type: String,
            enum: ['Sol', 'Nubes', 'Lluvia', 'Nieve', 'Tormenta']
        },
        hoursOfSleep: {
            type: Number,
            default: 0
        },
        reflection: {
            type: String,
        }
    },
    {
        timestamps: true
    }
)

const Record = model("Record", recordSchema)

module.exports = Record
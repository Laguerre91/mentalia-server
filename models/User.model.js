const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email es necesario.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password es necesario.']
    },
    username: {
      type: String,
      required: [true, 'Username es necesario.'],
    },
    imageUrl: {
      type: String
    },
    birth: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ['Masculino', 'Femenino', 'No-binario', 'Prefiero no responder']
    },
    sexualOrientation: {
      type: String,
      enum: ['Heterosexual', 'Bisexual', 'Homosexual', 'Asexual', 'Otros', 'Prefiero no responder']
    },
    employed: {
      type: Boolean,
      default: false
    },
    sentimentalStatus: {
      type: String,
      enum: ['Soltero/a', 'Casado/a', 'En una relación', 'Viudo/a', 'Es complicado']
    },
    records: [{
      type: Schema.Types.ObjectId,
      ref: 'Record'
    }],
    appointments: [{
      type: Schema.Types.ObjectId,
      ref: 'Appointment'
    }]
  },
  {
    timestamps: true
  }
)

const User = model("User", userSchema)

module.exports = User

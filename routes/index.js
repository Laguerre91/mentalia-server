module.exports = app => {
    const userRouter = require("./user.routes")
    app.use("/api/usuarios", userRouter)

    const communityRouter = require("./community.routes")
    app.use("/api/comunidad", communityRouter)

    const psycRouter = require("./psyc.routes")
    app.use("/api/psic", psycRouter)

    const appointmentsRouter = require('./appointment.routes')
    app.use("/api/appointments", appointmentsRouter)

    const uploadRouter = require("./upload.routes")
    app.use("/api/upload", uploadRouter)

    const authRouter = require("./auth.routes")
    app.use("/api/auth", authRouter)

    const recordRouter = require("./record.routes")
    app.use("/api/records", recordRouter)

}
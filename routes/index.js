module.exports = app => {
    const userRouter = require("./user.routes")
    app.use("/api/usuarios", userRouter)

    const communityRouter = require("./community.routes")
    app.use("/api/comunidad", communityRouter)

    const psycRouter = require("./psyc.routes")
    app.use("/api/psic", psycRouter)

    const appointmentRouter = require('./appointment.routes')
    app.use("/api/appointment", appointmentRouter)

    const authRouter = require("./auth.routes")
    app.use("/api/auth", authRouter)

}
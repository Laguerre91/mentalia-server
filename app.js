require("dotenv").config();
require("./db");

const express = require("express");
const app = express();

require("./config")(app);

const { isAuthenticated } = require("./middleware/jwt.middleware")


const userRouter = require("./routes/user.routes")
app.use("/api/usuarios", userRouter)

const communityRouter = require("./routes/community.routes")
app.use("/api/comunidad", communityRouter)

const authRouter = require("./routes/auth.routes")
app.use("/api", authRouter)


require("./error-handling")(app);

module.exports = app;

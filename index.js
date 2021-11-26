// ./index.js
// 1. IMPORTACIONES
const express 	= require("express")
const app		= express()
const hbs		= require("hbs")

const connectDB = require("./config/db")

require("dotenv").config()

// 2. MIDDLEWARES
app.use(express.static("public"))

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")

connectDB()

// 3. RUTAS
app.use("/", require("./routes/index"))

app.use("/rooms", require("./routes/rooms"))

// 4. SERVIDOR
app.listen(process.env.PORT, () => {
	console.log(`Servidor conectado en el puerto ${process.env.PORT}`)
})

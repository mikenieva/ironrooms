// 1. IMPORTACIONES
const mongoose			= require("mongoose")
const Room				= require("./../models/Room")

require("dotenv").config()

// 2. CONEXIÓN A BD
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

// 3. LOS DATOS A POBLAR
const rooms = [
	{
		name: "Loft en Valle de Bravo",
		description: "123",
		numberBeds: 2,
		location: "Valle de Bravo",
		photoUrl: "https://www.gob.mx/cms/uploads/article/main_image/83083/PANORAMICA-VALLE-web.jpg"
	},
	{
		name: "Interesante y enigmático cuarto en Cañitas",
		description: "123",
		numberBeds: 1,
		photoUrl: "https://www.armandoplanes.mx/wp-content/uploads/2018/10/la-moira-google-maps-e.png",
		location: "Ciudad de México"
	},
	{
		name: "Romántico cuarto en Tepoztlán",
		description: "123",
		numberBeds: 1,
		photoUrl: "https://www.dondeir.com/wp-content/uploads/2020/04/portada-tepoztlan.jpg",
		location: "Tepoztlán"
	}
]

// 4. DECLARAR FUNCIÓN (POBLAR LA BASE DE DATOS)
const createRooms = async () => {

	const newRooms = await Room.create(rooms)

	console.log(newRooms)

	mongoose.connection.close()

}


// 5. INVOCACIÓN
createRooms()

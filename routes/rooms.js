// routes/rooms.js

const express = require("express")
const router	=  express.Router()

const roomsController	= require("./../controllers/roomsController")

// CRUD

// CREATE
// CREAR UN CUARTO
// A. VISTA DEL FORMULARIO

// B. MANEJO DE FORMULARIO


// READ
// LISTADO DE CUARTOS
// A. VISTA
router.get("/", roomsController.viewList)

// MUESTRA DE LOS DETALLES DE UN CUARTO
// A. VISTA
router.get("/:roomID", roomsController.viewRoom)


// UPDATE
// EDITAR UN CUARTO
// A. VISTA DE EDICIÓN

// B. MANEJO DE FORMULARIO PARA EDITAR UN CUARTO


// DELETE
// BORRADO DE UN CUARTO


module.exports = router

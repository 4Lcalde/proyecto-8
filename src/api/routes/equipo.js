const upload = require('../../middleware/cloudinary')
const {
  getEquipo,
  postEquipos,
  updateEquipos,
  deleteEquipos
} = require('../controllers/equipo')

const equiposRoutes = require('express').Router()

equiposRoutes.get('/', getEquipo)
equiposRoutes.post('/', upload.single('escudo'), postEquipos)
//! Con esta ruta creo una manera de enviar una carpeta reutilizable a la función upload para cloudinary
// equiposRoutes.post('/', storageReutilizable("AlbumReutilizable").single('escudo'), postEquipos)
equiposRoutes.put('/:id', updateEquipos)
equiposRoutes.delete('/:id', deleteEquipos)

module.exports = equiposRoutes

const upload = require('../../middleware/cloudinary')
const {
  getJugador,
  postJugadores,
  putJugadores,
  deleteJugadores
} = require('../controllers/jugadores')

const jugadoresRoutes = require('express').Router()

jugadoresRoutes.get('/', getJugador)
jugadoresRoutes.post('/', upload.single('foto'), postJugadores)
jugadoresRoutes.put('/:id', putJugadores)
jugadoresRoutes.delete('/:id', deleteJugadores)

module.exports = jugadoresRoutes

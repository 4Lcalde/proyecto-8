const mongoose = require('mongoose')

const jugadoresSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    equipo: { type: mongoose.Types.ObjectId, ref: 'equipos' },
    foto: { type: String, required: true }
  },
  { timestamps: true, collection: 'jugadores' }
)

const Jugador = mongoose.model('jugadores', jugadoresSchema, 'jugadores')
module.exports = Jugador

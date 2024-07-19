const mongoose = require('mongoose')

const equipoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    liga: { type: String, required: true },
    escudo: { type: String, required: true }
  },
  { timestamps: true, collection: 'equipos' }
)

const Equipo = mongoose.model('equipos', equipoSchema, 'equipos')
module.exports = Equipo

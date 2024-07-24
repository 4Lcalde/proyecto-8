require('dotenv').config()
const mongoose = require('mongoose')
const { jugadoresData, equiposData } = require('../data/dataSeeds')
const Jugador = require('../api/models/jugadores')
const Equipo = require('../api/models/equipo')

const lanzarSemilla = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Conexión establecida')

    await Jugador.collection.drop()
    await Jugador.insertMany(jugadoresData)
    await Equipo.collection.drop()
    await Equipo.insertMany(equiposData)

    await mongoose.disconnect()
    console.log('Desconexión realizada')
  } catch (error) {
    console.error('Error en la conexión', error)
    await mongoose.disconnect()
  }
}

lanzarSemilla()

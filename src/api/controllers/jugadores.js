const { deleteFile } = require('../../utils/deleteFiles')
const Jugador = require('../models/jugadores')

const getJugador = async (req, res, next) => {
  try {
    const allJugadores = await Jugador.find().populate('equipo')
    return res.status(200).json(allJugadores)
  } catch (error) {
    return res.status(400).json('Error al obtener los jugadores')
  }
}

const postJugadores = async (req, res, next) => {
  try {
    const newJugador = new Jugador(req.body)
    if (req.file) {
      newJugador.foto = req.file.path
    }
    const duplicatedjugador = await Jugador.findOne({ nombre: req.body.nombre })
    if (duplicatedjugador) {
      return res.status(400).json('El jugador ya existe')
    }
    const jugadorSaved = await newJugador.save()

    return res.status(200).json(jugadorSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putJugadores = async (req, res, next) => {
  try {
    const { id } = req.params

    // Verifico si ya existe un jugador con el mismo nombre excluyendo el actual que busco
    const duplicatedJugador = await Jugador.findOne({
      nombre: req.body.nombre,
      _id: { $ne: id } // Con esto hago que el jugador que se está actualizando no se tenga en cuenta y no aparezca que ya existe
    })

    if (duplicatedJugador) {
      return res.status(400).json('El jugador ya existe')
    }

    if (req.file) {
      deleteFile(req.body.foto)
      req.body.foto = req.file.path
    }

    const jugadorActualizado = await Jugador.findByIdAndUpdate(id, req.body, {
      new: true
    })

    return res.status(200).json(jugadorActualizado)
  } catch (error) {
    return res.status(400).json('Error al actualizar el jugador')
  }
}

const deleteJugadores = async (req, res, next) => {
  try {
    const { id } = req.params
    const jugadorEliminado = await Jugador.findByIdAndDelete(id)
    deleteFile(jugadorEliminado.foto)
    return res.status(200).json(jugadorEliminado)
  } catch (error) {
    return res.status(400).json('Error al eliminar el jugador')
  }
}

module.exports = { getJugador, postJugadores, putJugadores, deleteJugadores }

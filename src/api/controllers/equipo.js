const { deleteFile } = require('../../utils/deleteFiles')
const Equipo = require('../models/equipo')

const getEquipo = async (req, res, next) => {
  try {
    const allEquipos = await Equipo.find()
    return res.status(200).json(allEquipos)
  } catch (error) {
    return res.status(400).json('Error al obtener los equipos')
  }
}

const postEquipos = async (req, res, next) => {
  try {
    const newEquipo = new Equipo(req.body)
    if (req.file) {
      newEquipo.escudo = req.file.path
    }
    const duplicatedEquipo = await Equipo.findOne({ nombre: req.body.nombre })
    if (duplicatedEquipo) {
      return res.status(400).json('El equipo ya existe')
    }
    const equipoSaved = await newEquipo.save()
    return res.status(200).json(equipoSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const updateEquipos = async (req, res, next) => {
  try {
    const { id } = req.params

    const duplicatedEquipo = await Equipo.findOne({
      nombre: req.body.nombre,
      _id: { $ne: id }
    })

    if (duplicatedEquipo) {
      return res.status(400).json('El equipo ya existe')
    }

    if (req.file) {
      deleteFile(req.body.escudo)
      req.body.escudo = req.file.path
    }

    const jugadorActualizado = await Equipo.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.status(200).json(jugadorActualizado)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const deleteEquipos = async (req, res, next) => {
  try {
    const { id } = req.params
    const equipoDeleted = await Equipo.findByIdAndDelete(id)
    deleteFile(equipoDeleted.escudo)
    return res.status(200).json(equipoDeleted)
  } catch (error) {
    return res.status(400).json('Error al eliminar equipo')
  }
}

module.exports = { getEquipo, postEquipos, updateEquipos, deleteEquipos }

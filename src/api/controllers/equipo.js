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
    return res.status(400).json('Error al crear equipo')
  }
}

const updateEquipos = async (req, res, next) => {
  try {
    const { id } = req.params
    const duplicatedEquipo = await Equipo.findOne({ nombre: req.body.nombre })
    if (duplicatedEquipo) {
      return res.status(400).json('El equipo ya existe')
    }
    const newEquipo = new Equipo(req.body)

    newEquipo._id = id
    const up = await Equipo.findByIdAndUpdate(id, newEquipo, {
      new: true
    })

    return res.status(200).json(up)
  } catch (error) {
    return res.status(400).json('Error al actualizar equipo')
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

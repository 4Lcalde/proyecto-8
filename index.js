require('dotenv').config()
const express = require('express')
const cloudinary = require('cloudinary').v2
const { connectDB } = require('./src/config/db')
const equiposRoutes = require('./src/api/routes/equipo')
const jugadoresRoutes = require('./src/api/routes/jugadores')
const app = express()
connectDB()
app.use(express.json())

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

app.listen(3000, () => {
  console.log('Servidor levantado en http://localhost:3000')
})

app.use('/api/v1/equipos', equiposRoutes)
app.use('/api/v1/jugadores', jugadoresRoutes)

app.use('*', (req, res, next) => {
  return res.status(400).json('Route not found')
})

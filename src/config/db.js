const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Conexión con BBDD exitosa')
  } catch (error) {
    console.log('Conexión con BBDD errónea')
  }
}

module.exports = { connectDB }

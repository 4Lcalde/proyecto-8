const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Album',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'svg']
  }
})

const upload = multer({ storage })

//!con esta función añado un parámetro que es folder e indica a que carpeta debe ir el elemento que subo.
// const storageReutilizable = (folder) => {
//   return new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//       folder: folder,
//       allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'svg']
//     }
//   })
// }

module.exports = upload

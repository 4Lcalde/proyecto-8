const cloudinary = require('cloudinary').v2

const deleteFile = (imgUrl) => {
  const imgSplited = imgUrl.split('/')
  const folderName = imgSplited.at(-2)
  const imgName = imgSplited.at(-1).split('.')
  const publicID = `${folderName}/${imgName[0]}`

  cloudinary.uploader.destroy(publicID, () => {
    console.log('Elemento eliminado de cloudinary')
  })
}

module.exports = { deleteFile }

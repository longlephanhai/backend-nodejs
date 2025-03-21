const path = require('path')
const uploadSingleFile = async (fileObject) => {
  fileObject.name = Date.now() + "-" + fileObject.name;
  const uploadPath = path.join("./src/public/image/upload/") + fileObject.name;
  try {
    await fileObject.mv(uploadPath)
    return {
      status: 'success',
      path: 'link-image',
      error: null
    }
  } catch (error) {
    return {
      status: 'failed',
      path: null,
      error: JSON.stringify(error)
    }
  }
}

const uploadMultipleFile =async (fileObject) => {
  fileObject.forEach(async (file) => {
    file.name = Date.now() + "-" + file.name;
    const uploadPath = path.join("./src/public/image/upload/") + file.name;
    try {
      await file.mv(uploadPath)
      return {
        status: 'success',
        path: 'link-image',
        error: null
      }
    } catch (error) {
      return {
        status: 'failed',
        path: null,
        error: JSON.stringify(error)
      }
    }
  })
}

module.exports = {
  uploadSingleFile,
  uploadMultipleFile
}
const fs = require('fs')

function deleteFile (path) {
  fs.unlink(path, (err) => {
    if (err) throw err
    console.log('successfully deleted')
  })
}

module.exports = deleteFile

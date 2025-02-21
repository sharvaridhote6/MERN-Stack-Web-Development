import multer from "multer";
// Multer configuration, diskStorage is used to configure the destination and filename of the file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
  export const upload = multer({ storage })//upload is used to upload the file to the destination specified in the storage
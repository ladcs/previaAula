const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
  dest: path.resolve(__dirname, '..', '..', '..', 'uploads'),
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', '..', 'uploads'));
    },
    filename: (_req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if(err) cb(err);
        const fileName = `${hash.toString('hex')}-${file.originalname}`;
        cb(null, fileName);
      })
    },
  }),
}
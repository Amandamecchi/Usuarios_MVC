const multer = require('multer');
const path = require('path');

// Pasta de armazenamento das iamgens
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uniqueName);
    },
});

const upload = multer({
    storage, fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== '.jpg' && ext !== '.png' && ext !== '.jpeg') {
            return cb(new Error('Apenas arquivos JPG, PNG e JPEG são permitidos'));
        }
        cb(null, true);
    }
});
module.exports = upload;
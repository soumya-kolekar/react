const cloudinary =require('cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name:'dzsndoflc',
    api_key:'446999823985427',
    api_secret:'NPUNemMJ2Nef2Qfn8shzdF2Uio8'
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };

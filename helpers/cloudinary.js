// const cloudinary = require("cloudinary");
// const cloudinaryStorage = require("multer-storage-cloudinary");
// const multer = require("multer");

// cloudinary.config({
//   cloud_name: "dp7uswlet",
//   api_key: "384357197549155",
//   api_secret: "qnzwQYwy8-4GP38cqmq1d6C6FpQ"
// });
// var storage = cloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: "images",
//   allowedFormats: ["jpg", "png", "jpeg", "gif", "pdf"],
//   filename: function(req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// const uploadCloud = multer({ storage: storage });
// module.exports = uploadCloud;

const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
cloud_name: process.env.CLOUDINARY_NAME,
api_key: process.env.CLOUDINARY_KEY,
api_secret: process.env.CLOUDINARY_SECRET
});

var storage = cloudinaryStorage({
cloudinary: cloudinary,
folder: 'images', // The name of the folder in cloudinary
allowedFormats: ['jpg', 'png'],
filename: function (req, file, cb) {
  cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
}
});

const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud;
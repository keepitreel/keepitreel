const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

require("dotenv").config(); //get access to environmental variables

const { AWS_SECRET_ACCESS, AWS_ACCESS_KEY } = process.env;

aws.config.update({
  secretAccessKey: AWS_SECRET_ACCESS,
  accessKeyId: AWS_ACCESS_KEY,
  region: "us-east-1"
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "keepitreel-images",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: "testing_metadata" });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;

import multer from "multer";
import multerS3 from "multer-s3";

import s3 from "../configs/aws.config";

if (!process.env.AWS_S3_BUCKET_NAME) {
  throw new Error(
    "AWS_S3_BUCKET_NAME environment variable is required"
  );
}

const storage = multerS3({
  s3,
  bucket: process.env.AWS_S3_BUCKET_NAME,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: "public-read",
  metadata: function (_, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (_, file, cb) {
    cb(null, Date.now().toString());
  },
});

const upload = multer({ storage });

export default upload;

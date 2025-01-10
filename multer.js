import multer from "multer";

const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, file.originalname)
 // callback(null, file.originalname) sets the uploaded file's name to its original name (file.originalname).       
    }
});

const upload = multer({ storage: storage })

export default upload


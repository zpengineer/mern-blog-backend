import express from "express";
import fs from "fs";
import multer from "multer";

import checkAuth from "../utils/CheckAuth.js";

const storage = multer.diskStorage({
    destination: (_, __, cb) => {

        if (!fs.existsSync('uploads')) {
        fs.mkdirSync('uploads');
        }
        
        cb(null, 'uploads');
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage });

const UploadRoutes = express.Router();

UploadRoutes.post('/', checkAuth,  upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    });
});

export default UploadRoutes;
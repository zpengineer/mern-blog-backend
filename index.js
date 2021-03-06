import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { UserRoutes, PostsRoutes, UploadRoutes } from "./routes/index.js";

dotenv.config({path: '.env'});

const DB_CONNECTION = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8888;

mongoose
  .connect(DB_CONNECTION)
  .then(() => console.log('DB ok'))
  .catch((error) => console.error(error));

const app = express();

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.use('/users', UserRoutes);
app.use('/posts', PostsRoutes);
app.use('/upload', UploadRoutes);

app.listen(PORT, () =>
  console.log(`Server is running @ : http://localhost:${PORT}`)
);
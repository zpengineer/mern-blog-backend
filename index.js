import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import { UserRoutes, PostsRoutes, UploadRoutes } from "./routes/index.js";

dotenv.config();

const app = express();
const DB_CONNECTION = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8888;


app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/users', UserRoutes);
app.use('/posts', PostsRoutes);
app.use('/upload', UploadRoutes);

mongoose
  .connect(DB_CONNECTION)
  .then(() => console.log('DB ok'))
  .catch((error) => console.error(error));

app.listen(PORT, () =>
  console.log(`Server is running @ : http://localhost:${PORT}`)
);
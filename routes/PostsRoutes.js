import express from "express";

import CheckAuth from "../utils/CheckAuth.js";
import { PostCreateValidation } from '../middlewares/Validator.js';
import { createPost, deletePost, updatePost, getOnePost, getAllPosts, getAllTags, getPopularePosts } from "../controllers/PostControllers.js";

const PostsRoutes = express.Router();

PostsRoutes.get('/tags', getAllTags);
PostsRoutes.get('/populate', getPopularePosts);
PostsRoutes.post('/', CheckAuth, PostCreateValidation, createPost);
PostsRoutes.delete('/:id', CheckAuth, PostCreateValidation, deletePost);
PostsRoutes.patch('/:id', CheckAuth, PostCreateValidation, updatePost);
PostsRoutes.get('/', getAllPosts);
PostsRoutes.get('/:id', getOnePost);


export default PostsRoutes;
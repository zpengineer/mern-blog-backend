import express from "express";

import CheckAuth from "../utils/CheckAuth.js";
import { RegisterValidation, LoginValidation } from '../middlewares/Validator.js';
import { register, login, current } from "../controllers/UserControllers.js";
import handleValidationErrors from "../utils/HandleValidationErrors.js";

const UserRoutes = express.Router();

UserRoutes.post('/register', RegisterValidation, handleValidationErrors, register);
UserRoutes.post('/login', LoginValidation, handleValidationErrors, login);
UserRoutes.get('/current', CheckAuth, current);

export default UserRoutes;
import jwt from "jsonwebtoken";

import UserModel from '../models/User.js';

export default async (req, res, next) => {
    
    const token = (req.headers.authorization).split(' ')[1];

    if (token) {
        
        try {
    
            const {_id} = jwt.verify(token, 'password228');
    
            const user = await UserModel.findById(_id);
    
            if (!user || !user.token) {
                return res.status(404).json({message: "Not found token"})
            }

            req.user = user;
    
            next();
    
        } catch (err) {
            return res.status(401).json({
                 message: 'Не авторизован'
            });
        }

    }

}
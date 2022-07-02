import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import UserModel from '../models/User.js';

export const register = async (req, res) => {

    try {

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            email: req.body.email,
            fullName: req.body.fullName,
            avatarUrl: req.body.avatarUrl,
            passwordHash: hash,
        });

        const user = await doc.save();

        const token = jwt.sign(
            {
                _id: user._id,
            },
            'password228',
            {
                expiresIn: '24h',
            }
        );

        const { passwordHash, ...UserData } = user._doc;

        res.json(
            {
                ...UserData,
                token
            }
        );

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось зарегистрироваться",
        });
    }

};

export const login = async (req, res) => {
    try {
        
        const user = await UserModel.findOne({ email: req.body.email });
        
        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден'
            });
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);

        if (!isValidPass) {
            return res.status(403).json({
                message: 'Не верная почта или пароль'
            });
        }

        const token = jwt.sign(
            {
                _id: user._id,
            },
            'password228',
            {
                expiresIn: '24h',
            }
        );

        await UserModel.findByIdAndUpdate(user._id, {token});

        res.json(
            {
                status: "success",
                code: 200,
                data: {
                    token
                },

            }
        );

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось авторизоваться",
        });
    }
};

export const logout = async (req, res) => {

    const { _id } = req.user;
    
    await UserModel.findByIdAndUpdate(_id, { token: null });
    
    res.status(204).json();

};

export const current = async (req, res) => {
    try {

        const user = await UserModel.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден'
            });
        }

        const { passwordHash, ...UserData } = user._doc;

        res.json(UserData);
        
    } catch (err) {

        console.log(err);
        res.status(500).json({
            message: "Нет доступа",
        });

    }
};
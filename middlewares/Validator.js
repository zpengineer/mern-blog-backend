import { body } from 'express-validator';

export const LoginValidation = [
    body('email', 'Не верный формат почты').isEmail(),
    body('password', 'Пароль слишком короткий').isLength({ min: 5, max: 10 }),
];

export const RegisterValidation = [
    body('email', 'Не верный формат почты').isEmail(),
    body('password', 'Пароль слишком короткий').isLength({ min: 5, max: 10 }),
    body('fullName', 'Укажите имя').isLength({ min: 3 }),
    body('avatarUrl', 'Не верная ссылка на аватарку').optional().isURL(),
];

export const PostCreateValidation = [
    body('title', 'Введите заголовок статьи').isLength({ min: 5}).isString(),
    body('description', 'Введите текст статьи').isLength({ min: 5}).isString(),
    body('tags', 'Теги не были указаны').optional().isArray(),
    body('imgUrl', 'Не верная ссылка на изображение').optional().isString(),
];
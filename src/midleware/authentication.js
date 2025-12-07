import jwt from 'jsonwebtoken';
import 'dotenv/config';
const secret_key = process.env.JWT_SECRET_KEY || "4lR82qFb9Xc0ZpW7tLs1JvQ3Hy6BnD";
// Middleware para verificar el token JWT
export const authentication = (req, res, next) => {
    const token = req.headers['authorization'].split(" ")[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, secret_key, (err) => {
        if (err) return res.sendStatus(403);
        next();
    });
}
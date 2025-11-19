import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader) {
            return res.status(401).json({ error: 'Token não fornecido' })
        }

        const token = authHeader.split(' ')[1]

        if (!token) {
            return res.status(401).json({ error: 'Token inválido' })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!)

        // @ts-ignore (porque sim, Express nem sempre tem user no req)
        req.user = decoded

        next()
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido ou expirado' })
    }
}

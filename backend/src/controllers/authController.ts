import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { prisma } from '../config/prisma'

export const register = async (req: Request, res: Response) => {
    try {
        const { email, username, password } = req.body
        const userExists = await prisma.user.findFirst({
            where: { OR: [{ email }, { username }] }
        })

        console.log('Register attempt:', req.body);

        if (userExists) {
            return res.status(400).json({ error: "Email ou nome já cadastrados" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: { email, username, password: hashedPassword }
        })

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: '7d' }
        )

        res.status(201).json({
            user: { id: user.id, email: user.email, username: user.username },
            token
        })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' })
        console.error('Register error:', error);
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        const user = await prisma.user.findUnique({ where: { email } })

        if (!user) {
            return res.status(401).json({ error: 'Credenciais inválidas ' })
        }

        const correctPassword = await bcrypt.compare(password, user.password)

        if (!correctPassword){
            return res.status(401).json({ error: 'Credenciais inválidas' })
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: '7d' }
        )
        res.json({
            user: { id: user.id, email: user.email, username: user.username },
            token
        })
    } catch (error) {
        res.status(500).json({ error: 'Erro no login' })
    }
}
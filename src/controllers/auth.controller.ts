import type { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { db } from '../db/connection.ts'
import { students, type NewStudent } from '../db/schema.ts'
import { generateToken } from '../utils/jwt.ts'
import { hashPassword } from '../utils/password.ts'

export const register = async (
  req: Request<any, any, NewStudent>,
  res: Response,
) => {
  try {
    const hashedPassword = await hashPassword(req.body.password)

    const [user] = await db
      .insert(students)
      .values({
        ...req.body,
        password: hashedPassword,
      })
      .returning({
        id: students.id,
        email: students.email,
        username: students.username,
        firstName: students.firstName,
        lastName: students.lastName,
        createdAt: students.createdAt,
        updatedAt: students.updatedAt,
      })

    const token = await generateToken({
      id: user.id,
      email: user.email,
      username: user.username,
    })

    return res.status(201).json({
      message: 'User registered successfully',
      user,
      token,
    })
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ message: 'Failed to register' })
  }
}

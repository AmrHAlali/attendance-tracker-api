import type { Request, Response, NextFunction } from "express";
import { type ZodSchema, ZodError } from "zod";

const validateBody = (schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const validatedData = schema.parse(req.body);
            req.body = validatedData;
            next();
        } catch (error) {
            if(error instanceof ZodError) {
                const validationErrors = error.issues.map((err) => ({
                    field: err.path.join('.'),
                    message: err.message,
                }));
                return res.status(400).json({ errors: validationErrors });
            }
            next(error);
        }
    }
}

const validateQuery = (schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.query);
            next();
        } catch (error) {
            if(error instanceof ZodError) {
                const validationErrors = error.issues.map((err) => ({
                    field: err.path.join('.'),
                    message: err.message,
                }));
                return res.status(400).json({ errors: validationErrors });
            }
            next(error);
        }
    }
}

export { validateBody, validateQuery };
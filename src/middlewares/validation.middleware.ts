import type { Request, Response, NextFunction } from "express";
import { type ZodType, ZodError } from "zod";

type RequestPart = "body" | "query" | "params";

const formatZodError = (error: ZodError) =>
    error.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message,
    }));

const validate = (part: RequestPart, schema: ZodType) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const validatedData = schema.parse(req[part]);

            if (part === "query") {
                // Express 5 exposes req.query as a getter, so it can't be reassigned directly
                Object.defineProperty(req, "query", {
                    value: validatedData,
                    writable: true,
                    enumerable: true,
                    configurable: true,
                });
            } else {
                req[part] = validatedData as any;
            }

            next();
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(400).json({
                    error: "Validation failed",
                    details: formatZodError(error),
                });
                return;
            }
            next(error);
        }
    };
};

const validateBody = (schema: ZodType) => validate("body", schema);
const validateQuery = (schema: ZodType) => validate("query", schema);
const validateParams = (schema: ZodType) => validate("params", schema);

export { validate, validateBody, validateQuery, validateParams };

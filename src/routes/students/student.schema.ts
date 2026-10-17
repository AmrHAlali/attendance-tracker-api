import { z } from 'zod';

const createStudentBodySchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
});

const studentIdParamsSchema = z.object({
  id: z.string().min(5, { message: "Id must be at least 5 characters" }),
});

const updateStudentBodySchema = createStudentBodySchema;

export { createStudentBodySchema, studentIdParamsSchema, updateStudentBodySchema };

import { z } from 'zod';

const createStudentBodySchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
});

const updateStudentQuerySchema = z.object({
  id: z.string().min(5, { message: "Id is required" }),
});

export { createStudentBodySchema, updateStudentQuerySchema };
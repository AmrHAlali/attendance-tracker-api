import express from 'express';
import { getStudents, createStudent, updateStudent } from '../../controllers/student.controller.ts';
import { validateBody, validateParams } from '../../middlewares/validation.middleware.ts';
import { createStudentBodySchema, studentIdParamsSchema, updateStudentBodySchema } from './student.schema.ts';

const router = express.Router();

router.get('/', getStudents);
router.post('/', validateBody(createStudentBodySchema), createStudent);
router.put('/:id', validateParams(studentIdParamsSchema), validateBody(updateStudentBodySchema), updateStudent);

export default router;

import express from 'express';
import { getStudents, createStudent, updateStudent } from '../../controllers/student.controller.ts';
import { validateBody, validateQuery } from '../../middlewares/validation.middleware.ts';
import { createStudentBodySchema, updateStudentQuerySchema } from './student.schema.ts';

const router = express.Router();

router.get('/', getStudents);
router.post('/', validateBody(createStudentBodySchema), createStudent);
router.put('/:id', validateQuery(updateStudentQuerySchema), updateStudent);

export default router;
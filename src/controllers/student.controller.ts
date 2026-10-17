import type { Request, Response } from 'express';

const getStudents = (req: Request, res: Response) => {
  res.json({ message: 'Fetching all students' });
};

const createStudent = (req: Request, res: Response) => {
  const { name } = req.body;
  res.status(201).json({ message: `Student ${name} created` });
};

const updateStudent = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  res.json({ message: `Student ${id} updated with name ${name}` });
}

export { getStudents, createStudent, updateStudent };
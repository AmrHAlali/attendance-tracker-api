import type { Request, Response } from 'express';

const healthCheck = (req: Request, res: Response) => {
  res.json({ message: 'Health check passed' });
};

export { healthCheck };
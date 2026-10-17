import express from 'express';
import { healthCheck } from '../../controllers/health.controller.ts';

const router = express.Router();

router.get('/', healthCheck);

export default router;

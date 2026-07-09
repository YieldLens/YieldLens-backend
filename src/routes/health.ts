import { Router, Request, Response } from 'express';
import { config } from '../config';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: config.version,
    environment: config.nodeEnv,
    uptime: process.uptime(),
  });
});

export default router;

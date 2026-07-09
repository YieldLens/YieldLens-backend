import { Router, Request, Response } from 'express';
import { getHistoricalAPY } from '../services/apy';

const router = Router();

// GET /api/apy/historical - Get all historical APY data
router.get('/historical', (req: Request, res: Response) => {
  const protocol = req.query.protocol as string | undefined;
  const startDate = req.query.startDate as string | undefined;
  const endDate = req.query.endDate as string | undefined;

  const data = getHistoricalAPY(protocol, startDate, endDate);
  res.json({ data, count: data.length });
});

// Legacy route for specific protocol
router.get('/historical/:protocol', (req: Request, res: Response) => {
  const data = getHistoricalAPY(req.params.protocol);
  res.json({ data, count: data.length });
});

export default router;

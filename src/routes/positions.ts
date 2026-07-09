import { Router, Request, Response } from 'express';
import { getPositionsByProtocol, getPositionById } from '../services/positions';

const router = Router();

// GET /api/positions - Get all positions, optionally filtered by protocol
router.get('/', (req: Request, res: Response) => {
  const protocol = req.query.protocol as string | undefined;
  const positions = getPositionsByProtocol(protocol);
  res.json({
    data: positions,
    count: positions.length,
  });
});

// GET /api/positions/:id - Get a single position by ID
router.get('/:id', (req: Request, res: Response) => {
  const position = getPositionById(req.params.id);
  if (!position) {
    res.status(404).json({ error: { message: 'Position not found', status: 404 } });
    return;
  }
  res.json({ data: position });
});

export default router;

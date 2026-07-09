import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config';
import healthRouter from './routes/health';
import positionsRouter from './routes/positions';
import apyRouter from './routes/apy';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';

const app = express();
const PORT = config.port;

// Middleware
app.use(cors({ origin: config.cors.origin }));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/health', healthRouter);
app.use('/api/positions', positionsRouter);
app.use('/api/apy', apyRouter);

// Root route
app.get('/', (_req, res) => {
  res.json({ message: 'YieldLens Backend API', version: config.version });
});

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`YieldLens backend running on port ${PORT} in ${config.nodeEnv} mode`);
});

export default app;

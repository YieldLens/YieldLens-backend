import express from 'express';
import { config } from './config';
import healthRouter from './routes/health';

const app = express();
const PORT = config.port;

// Middleware
app.use(express.json());

// Routes
app.use('/api/health', healthRouter);

// Root route
app.get('/', (_req, res) => {
  res.json({ message: 'YieldLens Backend API', version: config.version });
});

app.listen(PORT, () => {
  console.log(`YieldLens backend running on port ${PORT} in ${config.nodeEnv} mode`);
});

export default app;

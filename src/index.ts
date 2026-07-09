import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Routes placeholder
app.get('/', (_req, res) => {
  res.json({ message: 'YieldLens Backend API' });
});

app.listen(PORT, () => {
  console.log(`YieldLens backend running on port ${PORT}`);
});

export default app;

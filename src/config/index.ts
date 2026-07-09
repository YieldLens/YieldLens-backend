export const config = {
  port: parseInt(process.env.PORT || '3001', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  version: '0.1.0',
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  },
};

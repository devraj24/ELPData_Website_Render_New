import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist/client')));

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Download endpoints
app.get('/elpdata-complete-website.tar.gz', (_req, res) => {
  const file = path.join(__dirname, '../elpdata-complete-website.tar.gz');
  res.setHeader('Content-Disposition', 'attachment; filename=elpdata-complete-website.tar.gz');
  res.setHeader('Content-Type', 'application/gzip');
  res.download(file);
});

// Catch-all handler for React Router
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../dist/client/index.html'));
});

export default app;
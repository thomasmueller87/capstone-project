import express from 'express';
import path from 'path';

import { dirname } from './lib/pathHelpers.js';

const __dirname = dirname(import.meta.url);

const server = express();

const port = process.env.PORT || 4000;

server.get('/api', (req, res) => {
  res.json({ message: 'Hi, express here!' });
});

// Static assets (images, css, js)
server.use(express.static(path.join(__dirname, '../client/dist')));

server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

server.listen(port, () =>
  console.log(`Server is up and running on port ${port}`)
);

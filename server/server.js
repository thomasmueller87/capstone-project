import express from 'express';

const server = express();

const port = process.env.PORT || 4000;

server.get('/api', (req, res) => {
  res.json({ message: 'Hi, express here!' });
});

server.listen(port, () =>
  console.log(`Server is up and running on port ${port}`)
);

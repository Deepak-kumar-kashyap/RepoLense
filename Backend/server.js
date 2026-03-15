const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const repoRoutes = require('./routes/repo');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true,
}));

app.use(express.json());

app.use('/api/repo', repoRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'RepoLense API is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 RepoLense backend running on http://localhost:${PORT}`);
});

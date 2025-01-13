const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken'); // JWT muss importiert werden
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// Manual CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    console.log('Preflight OPTIONS request received');
    return res.sendStatus(204);
  }
  next(); // Dieser Aufruf muss außerhalb des if-Blocks sein
});

// Routes
app.use('/api/users', userRoutes);

// Beispiel für einen geschützten Endpunkt
app.get('/protected', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token erforderlich' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Ungültiges Token' });
    }

    res.json({ message: 'Zugriff auf geschützten Endpunkt', user: decoded });
  });
});

// Server starten
const PORT = process.env.PORT || 10100;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));

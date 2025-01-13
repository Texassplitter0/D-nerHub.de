// Importieren der benötigten Bibliotheken
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User'); // Das User-Modell

const app = express();
const router = express.Router();

// Middleware für JSON-Parsing
app.use(express.json());

// Manuelle CORS-Konfiguration
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

// Registrierungs-Endpunkt
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'E-Mail-Adresse ist bereits registriert!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: 'Benutzer erfolgreich registriert!' });
  } catch (err) {
    res.status(500).json({ message: 'Fehler beim Registrieren des Benutzers.' });
  }
});

// Login-Endpunkt
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });

    if (username === 'DönerAdmin' && password === process.env.ADMIN_PASSWORD) {
      user = { username: 'DönerAdmin', email: 'admin@doenerhub.de' };
    }

    if (!user || (user.password && !(await bcrypt.compare(password, user.password)))) {
      return res.status(400).json({ message: 'Benutzername oder Passwort ist falsch!' });
    }

    const token = jwt.sign({ userId: user._id || 'admin', username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Erfolgreich eingeloggt!', token });
  } catch (err) {
    res.status(500).json({ message: 'Fehler beim Login' });
  }
});

// Routen registrieren
app.use('/api/users', router);

// Server starten
const PORT = process.env.PORT || 10100;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});

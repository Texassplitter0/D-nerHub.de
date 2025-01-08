
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Benutzerbezogene Routen importieren
const db = require('./utils/db'); // Datenbankverbindung

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Erlaubt Anfragen von der Frontend-Domain
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test der Datenbankverbindung
db.getConnection()
    .then(() => console.log('Datenbank erfolgreich verbunden'))
    .catch((err) => console.error('Fehler bei der Datenbankverbindung:', err));

// Routen
app.use('/api/users', userRoutes); // Benutzerbezogene Routen hinzufügen

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

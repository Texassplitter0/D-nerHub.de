// Importieren der benötigten Bibliotheken
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User'); // Das User-Modell
const router = express.Router();

// Registrierungs-Endpunkt
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Überprüfen, ob der Benutzer bereits existiert
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'E-Mail-Adresse ist bereits registriert!' });
        }

        // Passwort verschlüsseln
        const hashedPassword = await bcrypt.hash(password, 10);

        // Neuen Benutzer erstellen
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Benutzer speichern
        await newUser.save();

        // Erfolgreiche Registrierung
        res.status(201).json({ message: 'Benutzer erfolgreich registriert!' });
    } catch (err) {
        res.status(500).json({ message: 'Fehler beim Registrieren des Benutzers.' });
    }
});

module.exports = router;

// Login-Endpunkt
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Prüfen, ob der Benutzer existiert
        let user = await User.findOne({ username });

        // Admin-Login überprüfen
        if (username === 'DönerAdmin' && password === 'DönerHub.Admin.MC') {
            // Admin-Daten zurückgeben
            user = { username: 'DönerAdmin', email: 'admin@doenerhub.de' };
        }

        if (!user) {
            return res.status(400).json({ message: 'Benutzername oder Passwort ist falsch!' });
        }

        // Passwort überprüfen
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Benutzername oder Passwort ist falsch!' });
        }

        // JWT Token generieren
        const token = jwt.sign({ userId: user._id, username: user.username }, 'your-jwt-secret', { expiresIn: '1h' });

        // Erfolgreicher Login
        res.status(200).json({ message: 'Erfolgreich eingeloggt!', token });
    } catch (err) {
        res.status(500).json({ message: 'Fehler beim Login' });
    }
});

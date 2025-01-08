const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Dummy-Userdaten (normalerweise aus der Datenbank)
const users = [];
const ADMIN_USER = { username: 'DönerAdmin', password: 'DönerHub.Admin.MC' };

// Admin-Login-Route
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Überprüfe, ob der Benutzer Admin ist
    if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
        const token = jwt.sign({ username: ADMIN_USER.username, role: 'admin' }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        return res.json({ token });
    }

    // Überprüfe normale Benutzer
    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(400).json({ message: 'Benutzer nicht gefunden!' });
    }

    bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Fehler bei der Passwortüberprüfung!' });
        }
        if (result) {
            const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.json({ token });
        } else {
            return res.status(400).json({ message: 'Falsches Passwort!' });
        }
    });
});

// Registrierung-Route
router.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (users.some(u => u.username === username)) {
        return res.status(400).json({ message: 'Benutzername bereits vergeben!' });
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ message: 'Fehler beim Passwort-Hashing!' });
        }

        users.push({ username, password: hashedPassword });
        res.status(201).json({ message: 'Benutzer erfolgreich registriert!' });
    });
});

module.exports = router;

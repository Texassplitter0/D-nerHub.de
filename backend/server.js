const express = require('express');
const app = require('./app');

// Manuelle CORS-Konfiguration
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || 'http://localhost'); // Erlaubt Frontend auf localhost
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // Cookies/Headers erlauben
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }
    next();
});

// Restlicher Backend-Code
const PORT = process.env.PORT || 10100;

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});

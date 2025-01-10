const express = require('express');
const app = require('./app');
const cors = require('cors');
var app = express();

// CORS-Konfiguration
app.use(cors({
    origin: 'http://localhost', // Erlaubt Frontend auf localhost
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Cookies/Headers erlauben
}));

// Restlicher Backend-Code

const PORT = process.env.PORT || 10100;

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});

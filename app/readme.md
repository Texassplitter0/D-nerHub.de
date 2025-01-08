# DönerHub Website

Die DönerHub Website umfasst verschiedene Funktionen wie ein Login-System, Registrierung, Admin-Zugang und eine Profilseite. Zudem wird eine dynamische Navigation verwendet, die nach dem Login aktualisiert wird. Der gesamte Backend-Code verwendet Node.js und Express, und das Frontend besteht aus HTML, CSS und JavaScript.

## Features

- **Login-System**: Benutzer können sich mit einem bestehenden Konto einloggen. (Under Development)
- **Registrierung**: Neue Benutzer können sich registrieren. (Under Development)
- **Admin-Zugang**: Admins können sich mit festen Anmeldedaten (`DönerAdmin` / `DönerHub.Admin.MC`) einloggen. (Under Development)
- **Dynamische Navigation**: Nach dem Login wird der Benutzer zur Profilseite weitergeleitet und die Navigation wird aktualisiert. (Under Development)
- **Passwort-Sichtbarkeit**: Benutzer können ihr Passwort während der Eingabe anzeigen lassen.
- **Abmeldung**: Benutzer können sich von ihrem Konto abmelden und werden zur Login-Seite weitergeleitet.

## Technologie-Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Datenbank**: SQL
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Docker**: Für die Containerisierung der Anwendung

## Installation und Konfiguration

### 1. Backend-Setup

1. **Backend installieren**:
   Navigiere in das Backend-Verzeichnis und installiere die notwendigen Abhängigkeiten.

   ```bash
   cd backend
   npm install
   ```

2. **Environment Variables konfigurieren**:
   Erstelle eine `.env`-Datei im Backend-Verzeichnis und füge die notwendigen Variablen hinzu (z. B. Datenbank-URL, JWT-Secret).

3. **Server starten**:
   
   ```bash
   npm start
   ```

### 2. Frontend-Setup

1. **Frontend konfigurieren**:
   Navigiere in das Frontend-Verzeichnis und stelle sicher, dass die statischen Dateien korrekt referenziert sind.

2. **Lokalhost-Verbindung sicherstellen**:
   Prüfe, ob das Frontend mit dem Backend kommunizieren kann (API-Endpunkte korrekt).

### 3. Docker-Setup

1. **Docker-Umgebung starten**:
   Stelle sicher, dass Docker installiert ist und führe den folgenden Befehl aus:

   ```bash
   docker-compose up --build
   ```

2. **Zugriff auf die Anwendung**:
   Die Anwendung sollte nun unter `http://localhost` verfügbar sein.

## Deployment

1. **Produktionsumgebung vorbereiten**:
   - Stelle sicher, dass alle Umgebungsvariablen gesetzt sind.
   - Verwende den `docker-compose.yml`, um die Container in der Produktionsumgebung auszuführen.

2. **NGINX konfigurieren**:
   Passe die `nginx.conf` Datei an die Produktionsanforderungen an.

3. **Datenbank migrieren**:
   Führe alle notwendigen SQL-Skripte aus, um die Datenbank auf den aktuellen Stand zu bringen.

## Testing

- **Unit Tests**: Führe Unit-Tests für das Backend aus:
  
  ```bash
  npm test
  ```

- **End-to-End Tests**: Teste die vollständige Anwendung mit Tools wie Selenium oder Cypress.

## Mitwirkende

Wir freuen uns über Beiträge! Bitte folge diesen Schritten, um Änderungen vorzuschlagen:

1. Forke das Repository.
2. Erstelle einen neuen Branch (`feature/neue-funktion`).
3. Committe deine Änderungen und pushe sie.
4. Erstelle einen Pull-Request.

## Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Weitere Details findest du in der `LICENSE`-Datei.

# DönerHub Website

Die DönerHub Website ist eine vollständige Webanwendung, die Funktionen wie Benutzer-Login, Registrierung, Profilverwaltung und eine dynamische Navigation bietet. Dieses Projekt nutzt moderne Technologien und eine containerisierte Architektur.

## Projektstruktur

Die Verzeichnisstruktur sieht wie folgt aus:

```
DönerHub.de/
  └── Dönerhub-website 2.0/
      ├── docker-compose.yml
      ├── Dockerfile
      ├── doener-website/
          ├── backend/
          ├── db/
          ├── frontend/
          └── nginx.conf
```

### Hauptkomponenten

- **Backend**: Node.js mit Express für die serverseitige Logik.
- **Frontend**: HTML, CSS und JavaScript für die Benutzeroberfläche.
- **Datenbank**: MySQL zur Speicherung von Benutzer- und Anwendungsdaten.
- **Nginx**: Als Reverse-Proxy und Webserver.

## Features

- **Login-System**: Benutzer können sich mit ihren Zugangsdaten anmelden.
- **Registrierung**: Neue Benutzer können ein Konto erstellen.
- **Admin-Zugang**: Spezielle Funktionen für Administratoren.
- **Profilseite**: Benutzer können ihr Profil ansehen und bearbeiten.
- **Dynamische Navigation**: Die Navigation ändert sich je nach Login-Status.

## Voraussetzungen

- Docker und Docker-Compose
- Node.js und npm (falls lokal ohne Docker verwendet)
- MySQL-Server

## Installation und Einrichtung

1. **Repository klonen**:
   ```bash
   git clone <repository-url>
   cd Dönerhub-website 2.0
   ```

2. **Docker-Container starten**:
   ```bash
   docker-compose up --build
   ```

   Dies startet die Anwendung mit allen notwendigen Diensten (Frontend, Backend, Datenbank, Nginx).

3. **Manuelle Installation (optional)**:
   
   Wenn Docker nicht verwendet wird, können die einzelnen Komponenten wie folgt gestartet werden:

   - Backend:
     ```bash
     cd doener-website/backend
     npm install
     npm start
     ```

   - Frontend:
     Öffnen Sie die `index.html` im Browser oder hosten Sie die Dateien mit einem lokalen Server.

   - MySQL:
     Richten Sie die Datenbank basierend auf den in der Backend-Konfigurationsdatei angegebenen Einstellungen ein.

## Nutzung

1. **Zugriff auf die Anwendung**:
   - Nach dem Start der Container ist die Website über `http://localhost` erreichbar.

2. **Registrierung und Login**:
   - Erstellen Sie ein Konto über die Registrierungsseite.
   - Melden Sie sich mit Ihren Zugangsdaten an.

3. **Admin-Funktionen**:
   - Administratoren haben Zugriff auf spezielle Seiten und Funktionen.

## Entwicklungsanweisungen

- **Backend-Entwicklung**:
  Arbeiten Sie im Verzeichnis `doener-website/backend`. Führen Sie nach jeder Codeänderung die Tests mit `npm test` aus.

- **Frontend-Entwicklung**:
  Bearbeiten Sie die Dateien im Verzeichnis `doener-website/frontend`. Nutzen Sie einen lokalen Server für die Vorschau.

## Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Weitere Details finden Sie in der Datei `LICENSE`.

## Kontakt

Falls Sie Fragen oder Feedback haben, wenden Sie sich bitte an:
- **Name**: DönerHub Team
- **E-Mail**: support@doenerhub.de

Viel Spaß beim Entwickeln und Nutzen der DönerHub-Website!

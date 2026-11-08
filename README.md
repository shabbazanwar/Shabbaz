# Shabbaz Portfolio

Full-stack portfolio site: a React + Vite frontend and a small Express backend that sends contact-form emails via Gmail SMTP.

## Project structure

- `src/` - React frontend (Vite, React Router, React-Bootstrap)
- `server/` - Express backend for the contact form (`/api/send-email`)

## Setup

### 1. Frontend

```
npm install
cp .env.example .env
```

`VITE_API_URL` in `.env` should point at the backend (defaults to `http://localhost:5000`).

### 2. Backend

```
cd server
npm install
cp .env.example .env
```

Fill in `server/.env`:

- `EMAIL_USER` - the Gmail address that sends and receives contact form messages
- `EMAIL_PASS` - a Gmail **App Password** (not your normal password) - generate one at https://myaccount.google.com/apppasswords (requires 2-Step Verification enabled on the account)
- `CLIENT_ORIGIN` - the frontend origin allowed to call the API (defaults to `http://localhost:5173`)

### 3. Run both together

From the project root:

```
npm run dev:all
```

Or run them separately:

```
npm run dev      # frontend on http://localhost:5173
npm run server   # backend on http://localhost:5000
```

## Build

```
npm run build
```

Deploy `server/` and the built frontend separately (e.g. Render for the backend, any static host for the frontend), setting `VITE_API_URL` to the deployed backend URL at build time.

## CV

The downloadable CV lives at `public/Abdulazeem-Salau-CV.pdf` and is linked from the navigation and About section. Its editable content and PDF generator are in `scripts/generate-cv.mjs`. After editing the content, regenerate it with:

```
node scripts/generate-cv.mjs
```

The CV is based on the existing September 2026 CV, with the Agunwami Enterprise role added for October 2026 onward. No unconfirmed responsibilities are included for that role.

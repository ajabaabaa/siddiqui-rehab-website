# Siddiqui Rehab — Bilingual website

English and Urdu physiotherapy website for Siddiqui Rehab, Johar Town, Lahore.

## Languages

- `/` — English
- `/ur` — Urdu, rendered right-to-left with Urdu typography
- Language switching uses ordinary links, not cookies, third-party translation or automatic translation.
- English is maintained in `index.html`; Urdu is generated from reviewed strings in `scripts/build-bilingual.js` with `npm run build:i18n`. Both HTML pages are committed for fast delivery and search engine access.

## Development

`npm run build:i18n` regenerates Urdu; `npm test` verifies language coverage, contacts, accessibility wiring and static assets; `npm start` starts the server on `$PORT` or 3000.

## Deployment

Railway project: https://railway.com/project/6a5bb570-b93c-4823-ad2f-26bd25f13f47

Production: https://siddiqui-rehab-production.up.railway.app

Push to `main` for Railway's GitHub-connected deployment. `/health` reports `{"status":"ok"}`.

## Safety and launch notes

- Contact numbers, location, treatments and 30-year experience claim come from the clinic flyer.
- No patient intake form or personal medical data collection is present.
- Clinic hours, credentials, photos, reviews, recovery guarantees and clinical outcomes were not invented.
- WhatsApp links use a language-appropriate prefilled appointment message; they open an external service.
- Confirm exact Google Maps pin, correct WhatsApp number, original logo artwork and Urdu wording with the clinic before public marketing.

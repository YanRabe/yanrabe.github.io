# Yan Rabefaniraka Portfolio

Personal e-portfolio rebuilt with SvelteKit and TypeScript.

## Development

Install dependencies and start the local server:

```sh
npm install
npm run dev
```

Run the project checks and production build:

```sh
npm run check
npm run lint
npm run build
```

## Content

Typed portfolio content lives in `src/lib/data.ts`. Shared site components live in `src/lib/components/`, while each primary page is a SvelteKit route under `src/routes/`:

- `/` — profile and introduction
- `/engineering-course/` — engineering degree subjects
- `/sustainability-civic-engagement/` — civic and sustainability work
- `/sport-other-activities/` — hobbies and creative practice
- `/cv/` — English CV with a link to the French PDF

Project, publication, repository and detail pages from the previous Jekyll site are intentionally deferred from this first migration pass. The migrated pages currently reference the original hosted media while the asset inventory is being consolidated.

## Stack

- SvelteKit
- Svelte 5 runes
- TypeScript
- Vite
- Tailwind CSS integration
- Storybook

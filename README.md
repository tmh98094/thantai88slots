# thantai88slots

Standalone Vietnamese slots/iGaming website built with Next.js App Router.

This repository is prepared as a frontend-only handoff for design review and Cloudflare deployment. Backend integrations can wait until client approval.

## Run locally

Node.js 22 or later is recommended.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Cloudflare setup

- Install command: `npm install`
- Build/test command: `npm run cf:build`
- Preview locally on the Cloudflare adapter: `npm run preview`
- Deploy with Wrangler/OpenNext: `npm run deploy`

Optional environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://thantai888.co
PARTNER_URL=https://www.thantai688.com/?f=55
```

## Pre-upload checks

Run these before deploying to Cloudflare:

```bash
npm test
npm run lint
npm run typecheck
npm run build
npm run cf:dry-run
```

## Images

Current image assets are placeholders/temporary visuals until final client-approved images are generated.

Use:

- [docs/AI_IMAGE_PROMPTS.md](./docs/AI_IMAGE_PROMPTS.md)
- [docs/IMAGE_PLACEMENT_AND_QA.md](./docs/IMAGE_PLACEMENT_AND_QA.md)

Generate photos without baked-in logo text, then composite the exact `public/images/thantai88-logo-official.webp` afterward.

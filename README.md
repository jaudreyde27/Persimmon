# Persimmon Care Network — Provider Marketing Website

A polished, responsive single-page marketing site for **Persimmon Care
Network**, a concierge / remote-patient-monitoring (RPM) diabetes program that
partners with endocrinology practices. The **Providers** view is the landing
page (`/`), with a lightweight stub for **Patients** (`/patients`).

Built with **Next.js (App Router, TypeScript)** and **Tailwind CSS**, using
**Space Grotesk** (headings) and **Source Serif 4** (body) via `next/font`.

## Tech stack

- [Next.js 15](https://nextjs.org/) — App Router, TypeScript
- [Tailwind CSS 3](https://tailwindcss.com/) — brand palette defined as theme tokens
- Google Fonts via `next/font` (Space Grotesk + Source Serif 4)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

`npm run build` must pass cleanly before deploying.

## Routes

| Route       | Description                                              |
| ----------- | -------------------------------------------------------- |
| `/`         | Providers landing page (all marketing sections)         |
| `/patients` | Patients stub page (headline + intro + "Contact us")    |
| `/privacy`  | Privacy Policy stub                                      |
| `/api/contact` | Route handler for the Request Demo form              |

## Brand tokens

The palette lives in [`tailwind.config.ts`](./tailwind.config.ts) and is
referenced by name throughout (e.g. `bg-apricot-600`, `text-apricot-900`,
`text-denim-500`, `bg-neutral-25`). No off-brand hex values are hardcoded in
components.

- **Primary — Soft Apricot:** `apricot-100 … apricot-900`
- **Accent — Denim Blue:** `denim-100 … denim-600`
- **Neutrals:** `neutral-0, neutral-25, neutral-50, neutral-75, neutral-100`

## Where to plug things in

### Scheduling link (Calendly, etc.)

The two **"Schedule an Intro Call"** CTAs currently anchor to the contact form
(`#contact`). To point them at a scheduler, update the `href` where
`CtaButton` is used in [`app/page.tsx`](./app/page.tsx) (see the `TODO` in
[`components/CtaButton.tsx`](./components/CtaButton.tsx)).

### Contact form email delivery

The Request Demo form (fields: Name, Email, Role, Organization) posts to
[`app/api/contact/route.ts`](./app/api/contact/route.ts), which emails each
submission **silently** to **hello@persimmon-clinical.com** — the visitor just
presses Submit; no email client opens on their side.

Configure **one** provider (see [`.env.example`](./.env.example)):

- **Web3Forms (no account, recommended):** create an Access Key at
  [web3forms.com](https://web3forms.com) for `hello@persimmon-clinical.com`,
  then set `WEB3FORMS_ACCESS_KEY`.
- **Formspree:** create a form pointed at `hello@persimmon-clinical.com`, then
  set `FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx`.

Set it locally by copying `.env.example` to `.env.local`, or on Vercel under
Project → Settings → Environment Variables. Until one is configured, the form
shows a "please email us directly" message with a `mailto:` link.

The newsletter subscribe box in the footer still uses a `mailto:` fallback —
wire it to your email service provider when ready
([`components/Footer.tsx`](./components/Footer.tsx)).

## Deploy to Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com/), **Add New → Project** and import the repo.
   Vercel auto-detects Next.js — no configuration needed.
3. (Optional) Add the `WEB3FORMS_ACCESS_KEY` (or `FORMSPREE_ENDPOINT`)
   environment variable to enable contact-form email delivery.
4. Deploy.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Accessibility

Semantic HTML, keyboard-navigable nav and form, visible focus states, alt/ARIA
labels on icons, WCAG AA contrast, and smooth-scroll anchor navigation (with a
`prefers-reduced-motion` opt-out).

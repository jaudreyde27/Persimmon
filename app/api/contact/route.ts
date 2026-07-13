import { NextResponse } from "next/server";

/**
 * Contact / Request Demo form handler.
 *
 * Submissions are emailed to hello@persimmon-clinical.com — silently, with no
 * email client opening on the visitor's side. They just press Submit.
 *
 * ── HOW TO TURN IT ON (pick ONE, ~2 minutes) ─────────────────────────
 *
 * Option A — Web3Forms (no account needed, recommended):
 *   1. Go to https://web3forms.com, enter hello@persimmon-clinical.com,
 *      and click the verification link they email you.
 *   2. Copy your Access Key.
 *   3. Set the environment variable (Vercel → Settings → Environment Variables,
 *      or .env.local for local dev):
 *        WEB3FORMS_ACCESS_KEY=your-access-key
 *
 * Option B — Formspree (free account):
 *   1. Create a form at https://formspree.io pointed at
 *      hello@persimmon-clinical.com.
 *   2. Set:  FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
 *
 * Until one of these is set, the route returns 502 and the form shows a
 * "please email us directly" message with a mailto link.
 * ─────────────────────────────────────────────────────────────────────
 */

const CONTACT_EMAIL = "hello@persimmon-clinical.com";

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — silently accept and drop obvious bots.
  if (String(data.company_website ?? "").trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const role = String(data.role ?? "").trim();
  const organization = String(data.organization ?? "").trim();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 422 },
    );
  }

  const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

  try {
    if (web3Key) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3Key,
          subject: "New Request Demo — Persimmon Care Network",
          from_name: "Persimmon Care Network website",
          name,
          email,
          role,
          organization,
        }),
      });
      if (!res.ok) throw new Error(`Web3Forms responded ${res.status}`);
      return NextResponse.json({ ok: true });
    }

    if (formspreeEndpoint) {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _replyto: email,
          _subject: "New Request Demo — Persimmon Care Network",
          name,
          email,
          role,
          organization,
        }),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      return NextResponse.json({ ok: true });
    }

    // No email provider configured yet.
    return NextResponse.json(
      {
        error:
          "Email delivery is not configured. Set WEB3FORMS_ACCESS_KEY (or FORMSPREE_ENDPOINT).",
        contactEmail: CONTACT_EMAIL,
      },
      { status: 502 },
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to deliver your request. Please try again." },
      { status: 502 },
    );
  }
}

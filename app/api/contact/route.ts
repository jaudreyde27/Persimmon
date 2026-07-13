import { NextResponse } from "next/server";

/**
 * Contact / Request Demo form handler.
 *
 * Submissions are destined for hello@persimmon-clinical.com.
 *
 * ── HOW TO WIRE THIS UP ──────────────────────────────────────────────
 * The simplest option is Formspree: create a form at https://formspree.io
 * pointed at hello@persimmon-clinical.com, then set the environment variable
 *   FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
 * (in Vercel: Project → Settings → Environment Variables).
 *
 * When FORMSPREE_ENDPOINT is not set, this route returns a 501 so the client
 * transparently falls back to a mailto: link — nothing breaks on deploy.
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

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 422 },
    );
  }

  const endpoint = process.env.FORMSPREE_ENDPOINT;

  if (!endpoint) {
    // No email integration configured yet — signal the client to use its
    // mailto fallback so the lead still reaches the inbox.
    return NextResponse.json(
      {
        error:
          "Email integration not configured. Set FORMSPREE_ENDPOINT to enable server-side submissions.",
        fallbackEmail: CONTACT_EMAIL,
      },
      { status: 501 },
    );
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _replyto: email,
        _subject: "Request Demo — Persimmon Care Network",
        ...data,
      }),
    });

    if (!res.ok) throw new Error(`Upstream responded ${res.status}`);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to deliver your request. Please try again." },
      { status: 502 },
    );
  }
}

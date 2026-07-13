"use client";

import { useState } from "react";
import Link from "next/link";

const CONTACT_EMAIL = "hello@persimmon-clinical.com";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire newsletter signups to your ESP (e.g. Mailchimp) or a route
    // handler. For now we open a mailto so nothing breaks on deploy.
    if (email) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=Newsletter%20subscription&body=Please%20subscribe%20${encodeURIComponent(
        email,
      )}%20to%20the%20Persimmon%20Care%20Network%20newsletter.`;
      setSubscribed(true);
    }
  };

  return (
    <footer className="border-t border-apricot-200 bg-apricot-100 text-apricot-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="font-heading text-2xl font-bold">
            Subscribe to our newsletter
          </h2>

          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-md border border-apricot-200 bg-neutral-0 px-4 py-2.5 text-apricot-900 placeholder:text-apricot-900/50 focus:border-apricot-500 focus:outline-none focus:ring-2 focus:ring-apricot-300"
            />
            <button
              type="submit"
              className="rounded-md bg-apricot-600 px-6 py-2.5 font-heading font-medium text-neutral-0 transition-colors hover:bg-apricot-700 focus:outline-none focus:ring-2 focus:ring-apricot-500 focus:ring-offset-2 focus:ring-offset-apricot-100"
            >
              Subscribe
            </button>
          </form>
        </div>

        {subscribed && (
          <p className="mt-3 text-sm text-apricot-700" role="status">
            Thanks — opening your email client to confirm.
          </p>
        )}

        <div className="mt-10 border-t border-apricot-200 pt-6">
          <p className="text-center text-sm text-apricot-900/90">
            © 2026 by Persimmon Care Network. &nbsp;|&nbsp;{" "}
            <Link href="/privacy" className="underline hover:text-apricot-600">
              Privacy Policy
            </Link>
          </p>
          <p className="mt-2 text-center text-sm text-apricot-900/70">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-apricot-600"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

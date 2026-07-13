"use client";

import { useState } from "react";

const CONTACT_EMAIL = "hello@persimmon-clinical.com";

type Status = "idle" | "submitting" | "success" | "emailDraft";

const fieldClasses =
  "w-full rounded-md border border-neutral-100 bg-neutral-0 px-4 py-2.5 font-body text-apricot-900 placeholder:text-apricot-900/40 focus:border-apricot-500 focus:outline-none focus:ring-2 focus:ring-apricot-300";
const labelClasses =
  "mb-1.5 block font-heading text-sm font-medium text-apricot-900";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      // If a server-side email integration is configured (FORMSPREE_ENDPOINT),
      // this sends the request silently and we show a success message.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      // Default behavior with no server integration: open the visitor's email
      // client with a fully pre-filled message to our team — they just review
      // and hit send. Nothing is ever lost.
      const subject = encodeURIComponent(
        "Request Demo — Persimmon Care Network",
      );
      const body = encodeURIComponent(
        [
          "Hello Persimmon Care Network team,",
          "",
          "I'd like to learn more. Here are my details:",
          "",
          `Name: ${data.name ?? ""}`,
          `Email: ${data.email ?? ""}`,
          `Cell Phone: ${data.phone ?? ""}`,
          `Interested in: ${data.interest ?? ""}`,
          `How I heard about you: ${data.source ?? ""}`,
          `Role: ${data.role ?? ""}`,
          "",
          "Thank you!",
        ].join("\n"),
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("emailDraft");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClasses}>
          Cell Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={fieldClasses}
        />
      </div>

      <div>
        <label htmlFor="interest" className={labelClasses}>
          I&apos;m interested to learn more about…
        </label>
        <input
          id="interest"
          name="interest"
          type="text"
          className={fieldClasses}
        />
      </div>

      <div>
        <label htmlFor="source" className={labelClasses}>
          How did you hear about us?
        </label>
        <select id="source" name="source" className={fieldClasses} defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option>Referral from a colleague</option>
          <option>Conference or event</option>
          <option>Search engine</option>
          <option>Social media</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="role" className={labelClasses}>
          Which best describes your role?
        </label>
        <select id="role" name="role" className={fieldClasses} defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option>Provider</option>
          <option>Practice Administrator</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-md bg-apricot-600 px-8 py-3 font-heading font-semibold text-neutral-0 transition-colors hover:bg-apricot-700 focus:outline-none focus:ring-2 focus:ring-apricot-500 focus:ring-offset-2 disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting…" : "Submit"}
        </button>
      </div>

      {status === "success" && (
        <p className="font-body text-denim-600" role="status">
          Thank you — we&apos;ve received your request and will be in touch shortly.
        </p>
      )}
      {status === "emailDraft" && (
        <p className="font-body text-denim-600" role="status">
          We&apos;ve opened a pre-filled email to our team — just review and press
          send, and we&apos;ll be in touch shortly.
        </p>
      )}
    </form>
  );
}

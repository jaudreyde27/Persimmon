"use client";

import { useState } from "react";

const CONTACT_EMAIL = "hello@persimmon-clinical.com";

type Status = "idle" | "submitting" | "success" | "error";

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
      {/* Honeypot: hidden from people, tempting to bots. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

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

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="role" className={labelClasses}>
            Role
          </label>
          <select
            id="role"
            name="role"
            required
            className={fieldClasses}
            defaultValue=""
          >
            <option value="" disabled>
              Select an option
            </option>
            <option>Patient</option>
            <option>Provider</option>
            <option>Administrator</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="organization" className={labelClasses}>
            Organization
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            placeholder="Practice, hospital, or clinic"
            className={fieldClasses}
          />
        </div>
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
      {status === "error" && (
        <p className="font-body text-apricot-700" role="status">
          Something went wrong. Please email us directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );
}

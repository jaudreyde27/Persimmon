import Link from "next/link";

const CONTACT_EMAIL = "hello@persimmon-care.com";

export default function Footer() {
  return (
    <footer className="border-t border-apricot-200 bg-apricot-100 text-apricot-900">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-center text-sm text-apricot-900/90">
          © 2026 by Persimmon Care Network. &nbsp;|&nbsp;{" "}
          <Link href="/privacy" className="underline hover:text-apricot-600">
            Privacy Policy
          </Link>
        </p>
        <p className="mt-2 text-center text-sm text-apricot-900/70">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-apricot-600">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Wordmark from "./Wordmark";

/**
 * Rounded pill toggle grouping Patients | Providers.
 * `active` marks which segment is selected on the current page.
 */
function ViewToggle({ active }: { active: "patients" | "providers" }) {
  const segment =
    "rounded-full px-4 py-1.5 text-sm font-medium font-heading transition-colors";
  const activeSeg = "bg-apricot-600 text-neutral-0";
  const inactiveSeg =
    "border border-apricot-200 text-apricot-900 hover:bg-apricot-100";

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-apricot-200 bg-apricot-100 p-1">
      <Link
        href="/"
        className={`${segment} ${active === "providers" ? activeSeg : inactiveSeg}`}
        aria-current={active === "providers" ? "page" : undefined}
      >
        Providers
      </Link>
      <Link
        href="/patients"
        className={`${segment} ${active === "patients" ? activeSeg : inactiveSeg}`}
        aria-current={active === "patients" ? "page" : undefined}
      >
        Patients
      </Link>
    </div>
  );
}

type NavbarProps = {
  /** Which view is active. On the patients stub, links back to the providers home. */
  active?: "patients" | "providers";
  /**
   * Whether in-page anchor links (Home, Request Demo) apply. On the providers
   * landing page these scroll within the page; elsewhere they route to "/".
   */
  onProvidersPage?: boolean;
};

export default function Navbar({
  active = "providers",
  onProvidersPage = true,
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  const homeHref = onProvidersPage ? "#top" : "/";
  const demoHref = onProvidersPage ? "#contact" : "/#contact";

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-neutral-0 text-apricot-900 shadow-sm">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="Primary"
      >
        <Wordmark />

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <ViewToggle active={active} />
          <Link
            href={homeHref}
            className="font-heading text-sm font-medium text-apricot-900 hover:text-apricot-600"
          >
            Home
          </Link>
          <Link
            href={demoHref}
            className="rounded-full bg-denim-500 px-4 py-2 font-heading text-sm font-semibold text-neutral-0 transition-colors hover:bg-denim-600"
          >
            Schedule Intro Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-apricot-900 hover:bg-apricot-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-neutral-100 px-4 pb-4 pt-2 md:hidden"
        >
          <div className="mb-3 flex justify-center">
            <ViewToggle active={active} />
          </div>
          <div className="flex flex-col gap-1">
            <Link
              href={homeHref}
              onClick={closeMenu}
              className="rounded-md px-3 py-2 font-heading text-sm font-medium hover:bg-apricot-100"
            >
              Home
            </Link>
            <Link
              href={demoHref}
              onClick={closeMenu}
              className="mt-2 rounded-full bg-denim-500 px-4 py-2.5 text-center font-heading text-sm font-semibold text-neutral-0 transition-colors hover:bg-denim-600"
            >
              Schedule Intro Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

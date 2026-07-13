import Link from "next/link";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Primary call-to-action button (apricot-600 fill, hover apricot-700).
 *
 * TODO: Swap `href` on the "Schedule an Intro Call" CTAs for a scheduling link
 * (e.g. a Calendly URL) when available. It currently anchors to the contact
 * form (#contact).
 */
export default function CtaButton({
  href,
  children,
  className = "",
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md bg-apricot-600 px-8 py-3.5 font-heading text-base font-semibold text-neutral-0 transition-colors hover:bg-apricot-700 focus:outline-none focus:ring-2 focus:ring-apricot-500 focus:ring-offset-2 ${className}`}
    >
      {children}
    </Link>
  );
}

import Link from "next/link";

type WordmarkProps = {
  /** "dark" for use on dark bars (white text); "light" for light backgrounds (apricot-900 text). */
  variant?: "dark" | "light";
  href?: string;
  className?: string;
};

/**
 * Text wordmark: "Persimmon Care Network" with "Care" always in apricot-500.
 * The remaining words are white on dark bars, apricot-900 on light backgrounds.
 */
export default function Wordmark({
  variant = "dark",
  href = "/",
  className = "",
}: WordmarkProps) {
  const baseColor = variant === "dark" ? "text-neutral-0" : "text-apricot-900";

  return (
    <Link
      href={href}
      className={`font-heading text-lg font-bold tracking-tight sm:text-xl ${baseColor} ${className}`}
      aria-label="Persimmon Care Network — home"
    >
      Persimmon <span className="text-apricot-500">Care</span> Network
    </Link>
  );
}

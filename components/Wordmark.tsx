import Link from "next/link";

type WordmarkProps = {
  href?: string;
  className?: string;
};

/**
 * Persimmon Care Network brand logo: the persimmon mark (apricot circle with a
 * denim calyx) beside the stacked "Persimmon / Care Network" wordmark.
 */
export default function Wordmark({ href = "/", className = "" }: WordmarkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Persimmon Care Network — home"
    >
      <svg
        viewBox="24 18 72 94"
        className="h-11 w-auto shrink-0 sm:h-12"
        aria-hidden="true"
      >
        <circle
          cx="60"
          cy="76"
          r="31"
          fill="none"
          stroke="#cb6b3f"
          strokeWidth="7"
        />
        <g fill="#345b6f">
          <path d="M60 42C55 37 55 27 60 23C65 27 65 37 60 42Z" />
          <path
            d="M60 42C55 37 55 27 60 23C65 27 65 37 60 42Z"
            transform="rotate(90 60 42)"
          />
          <path
            d="M60 42C55 37 55 27 60 23C65 27 65 37 60 42Z"
            transform="rotate(180 60 42)"
          />
          <path
            d="M60 42C55 37 55 27 60 23C65 27 65 37 60 42Z"
            transform="rotate(270 60 42)"
          />
        </g>
      </svg>
      <span className="flex flex-col font-logo leading-none">
        <span className="text-[22px] font-semibold -tracking-[0.023em] text-apricot-700 sm:text-2xl">
          Persimmon
        </span>
        <span className="mt-[3px] text-[13px] font-semibold tracking-normal text-denim-600 sm:text-sm">
          Care Network
        </span>
      </span>
    </Link>
  );
}

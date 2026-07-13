type IconProps = { className?: string };

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function TrendIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M4 17l4-5 3 2 5-6 4-3" />
      <path d="M16.5 4.6L20 5l-.4 3.5" />
    </svg>
  );
}

function DeviceHandIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <rect x="8" y="3.5" width="8" height="12" rx="2" />
      <line x1="10.5" y1="7.5" x2="13.5" y2="7.5" />
      <line x1="10.5" y1="10.5" x2="13.5" y2="10.5" />
      <path d="M4 17.5c2 2 4 3 8 3s6-1 8-3" />
    </svg>
  );
}

function WalkingFigureIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <circle cx="13" cy="5" r="1.6" />
      <path d="M13 7v5" />
      <path d="M13 9l-3.5 1.5" />
      <path d="M13 9l4-1" />
      <path d="M13 12l-3 6" />
      <path d="M13 12l4 5" />
      <circle cx="6" cy="18" r="0.6" strokeOpacity="0.5" />
      <circle cx="4" cy="19.5" r="0.5" strokeOpacity="0.3" />
    </svg>
  );
}

function HeartHandsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M12 8.2c-1.4-1.9-3.8-1.9-4.8 0-1 1.9 0 3.8 4.8 6.6 4.8-2.8 5.8-4.7 4.8-6.6-1-1.9-3.4-1.9-4.8 0z" />
      <path d="M4 16.5c1 1.8 2.8 2.7 3.8 2.7" />
      <path d="M20 16.5c-1 1.8-2.8 2.7-3.8 2.7" />
    </svg>
  );
}

function WindingPathFlagIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M4 18.5c2-3 4 1 6-2s2-5 4-6.2" />
      <path d="M14 10.3V5" />
      <path d="M14 5.3l4.5 1.7-4.5 1.7" />
    </svg>
  );
}

function SpeechBubblesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <rect x="3" y="4.5" width="11" height="8" rx="3" />
      <path d="M6.5 12.5l-1 3 3.3-2" />
      <rect x="10" y="10.5" width="11" height="8" rx="3" />
      <path d="M15.3 14v3.4" />
      <path d="M13.6 16l1.7 1.8 1.7-1.8" />
    </svg>
  );
}

function BalanceScaleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M12 3v3.2" />
      <path d="M6 6.2h12" />
      <path d="M6 6.2l-2.2 5.6" />
      <path d="M18 6.2l2.2 5.6" />
      <path d="M1.6 11.8a2.8 2.8 0 005.6 0" />
      <path d="M16.8 11.8a2.8 2.8 0 005.6 0" />
      <path d="M4 8.6a1.9 1.9 0 102.1 2.9 2.3 2.3 0 01-2.1-2.9z" />
      <path d="M19.4 8.3c.9 1.1 1.4 2 1.4 2.6a1.4 1.4 0 11-2.8 0c0-.6.5-1.5 1.4-2.6z" />
    </svg>
  );
}

function SeatedFigureHeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <circle cx="10" cy="5.2" r="1.6" />
      <path d="M10 7.2c-2 0-3 1.5-3 3.5v6.8" />
      <path d="M10 7.2c2.2.2 3.8 2.1 4.2 4.7.4 2-.4 3.2-1.7 3.7" />
      <path d="M7 17.5h7" />
      <path d="M15 3.4c-.6-.7-1.5-.7-1.8 0-.4.7 0 1.4 1.8 2.5 1.8-1.1 2.2-1.8 1.8-2.5-.3-.7-1.2-.7-1.8 0z" />
    </svg>
  );
}

function BookLightbulbIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M12 6.5c-1.6-1.1-4.2-1.6-7.3-1.1v12c3.1-.5 5.7 0 7.3 1.1" />
      <path d="M12 6.5c1.6-1.1 4.2-1.6 7.3-1.1v12c-3.1-.5-5.7 0-7.3 1.1" />
      <path d="M12 6.5v12.5" />
      <path d="M12 1.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
    </svg>
  );
}

const badgeColors = ["bg-apricot-100", "bg-apricot-200", "bg-apricot-300", "bg-apricot-400"];

const topics = [
  { label: "Understanding your CGM trends", Icon: TrendIcon },
  { label: "Pump tech education and training", Icon: DeviceHandIcon },
  { label: "Making diabetes fit your lifestyle", Icon: WalkingFigureIcon },
  { label: "Diabetes distress & mental health support", Icon: HeartHandsIcon },
  { label: "Life changes and new routines", Icon: WindingPathFlagIcon },
  { label: "Collaborative support following hypos", Icon: SpeechBubblesIcon },
  { label: "Balancing exercise, sleep & stress", Icon: BalanceScaleIcon },
  { label: "Tactical coaching for moms-to-be", Icon: SeatedFigureHeartIcon },
  { label: "Education for the newly diagnosed", Icon: BookLightbulbIcon },
];

function TicketRow({
  ariaHidden,
  className = "",
}: {
  ariaHidden?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex shrink-0 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center ${className}`}
      aria-hidden={ariaHidden}
    >
      {topics.map(({ label, Icon }, i) => (
        <div
          key={i}
          className="flex w-[140px] shrink-0 flex-col items-center gap-3 px-3 sm:w-[200px] sm:px-5"
        >
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full sm:h-20 sm:w-20 ${badgeColors[i % badgeColors.length]}`}
          >
            <Icon className="h-7 w-7 text-denim-500 sm:h-10 sm:w-10" />
          </div>
          <p className="text-center font-heading text-sm font-semibold leading-tight text-apricot-900 sm:text-base">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

/**
 * Ambient, continuously auto-scrolling ticker of topics the care team covers.
 * Loops seamlessly by rendering the row twice and animating translateX(-50%);
 * the duplicate row is hidden from assistive tech and dropped entirely under
 * prefers-reduced-motion, leaving a single static row.
 */
export default function TopicsTicker() {
  return (
    <div
      role="region"
      aria-label="Topics we cover"
      className="relative overflow-hidden bg-neutral-25 py-10 sm:py-14"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-neutral-25 to-transparent sm:w-24"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-neutral-25 to-transparent sm:w-24"
        aria-hidden="true"
      />

      <div className="flex w-max animate-marquee motion-reduce:w-full motion-reduce:animate-none">
        <TicketRow />
        <TicketRow ariaHidden className="motion-reduce:hidden" />
      </div>
    </div>
  );
}

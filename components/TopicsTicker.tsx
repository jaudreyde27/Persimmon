type IconProps = { className?: string };

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* 1 — CGM trends: glucose curve on axes */
function GlucoseGraphIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M5 4v13a2 2 0 0 0 2 2h13" />
      <path d="M7.5 15c1.5 0 2-4 3.8-4s2 3 3.4 3 2-5 4.3-6" />
    </svg>
  );
}

/* 2 — Carb counting & pre-bolusing: plate with fork & knife */
function PlateIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M4 4v3M6 4v3M5 7v13" />
      <path d="M19.5 4c-1.2.4-1.6 3.4 0 4.4V20" />
    </svg>
  );
}

/* 3 — Pump tech: handheld device with screen, buttons and tubing */
function PumpIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <rect x="6.5" y="3" width="9" height="13" rx="2" />
      <rect x="8.5" y="5" width="5" height="3.5" rx="0.6" />
      <circle cx="9.6" cy="12.5" r="0.9" />
      <circle cx="12.4" cy="12.5" r="0.9" />
      <path d="M15.5 8.5c2.5.5 3.2 3 1.8 5.2-.8 1.3-.6 2.6.7 3.3" />
    </svg>
  );
}

/* 4 — Lifestyle: person mid-stride */
function WalkingPersonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <circle cx="13.5" cy="4.2" r="1.7" />
      <path d="M13.5 6.4l-1 5.3" />
      <path d="M14 8l3.3 1.6" />
      <path d="M12.8 8l-3.3 2" />
      <path d="M12.5 11.7l-2.7 6" />
      <path d="M12.5 11.7l3.2 5.5" />
    </svg>
  );
}

/* 5 — Mental health: person with a heart */
function MindHeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <circle cx="12" cy="8" r="5.5" />
      <path d="M12 6.4c-.9-1-2.4-.6-2.4.6 0 1 1.2 1.9 2.4 2.9 1.2-1 2.4-1.9 2.4-2.9 0-1.2-1.5-1.6-2.4-.6z" />
      <path d="M5.5 20c1-2.7 3.6-4.2 6.5-4.2S17.5 17.3 18.5 20" />
    </svg>
  );
}

/* 6 — New routines: calendar with a check */
function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 9.5h16" />
      <path d="M8.5 3v4M15.5 3v4" />
      <path d="M9 14.5l2 2 3.5-3.5" />
    </svg>
  );
}

/* 7 — Hypos support: two chat bubbles with a downward arrow */
function ChatHypoIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M2.5 5.5A1.5 1.5 0 0 1 4 4h7.5a1.5 1.5 0 0 1 1.5 1.5V9a1.5 1.5 0 0 1-1.5 1.5H7l-3 2.3V10.5A1.5 1.5 0 0 1 2.5 9z" />
      <path d="M13 11.5h6.5A1.5 1.5 0 0 1 21 13v4a1.5 1.5 0 0 1-1.5 1.5h-1.2l-2.8 2.2V18.5H13a1.5 1.5 0 0 1-1.5-1.5" />
      <path d="M16.7 13.4v3M15.3 15l1.4 1.4 1.4-1.4" />
    </svg>
  );
}

/* 8 — Balance: scale with two pans */
function BalanceScaleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <circle cx="12" cy="4" r="1.1" />
      <path d="M12 5.1V18" />
      <path d="M9 18.5h6" />
      <path d="M5.5 7.2h13" />
      <path d="M3.2 11.4a2.3 2.3 0 0 0 4.6 0l-2.3-4.2z" />
      <path d="M16.2 11.4a2.3 2.3 0 0 0 4.6 0l-2.3-4.2z" />
    </svg>
  );
}

/* 9 — Moms-to-be: pregnant profile with a heart */
function PregnantIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <circle cx="9.5" cy="4.2" r="1.8" />
      <path d="M9.5 6.2v3.4" />
      <path d="M9.5 9.6c2.6 0 4.4 1.6 4.4 3.6s-1.8 3.4-4.4 3.4" />
      <path d="M9.5 9.6V17" />
      <path d="M8 17l-1 4M11 17l1 4" />
      <path d="M13.4 7c-.6-.7-1.6-.4-1.6.4 0 .7.8 1.2 1.6 1.9.8-.7 1.6-1.2 1.6-1.9 0-.8-1-1.1-1.6-.4z" />
    </svg>
  );
}

/* 10 — Newly diagnosed: open book with a star */
function BookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M12 8.5c-2-1.3-4.5-1.5-7.5-1v11c3-.5 5.5-.3 7.5 1" />
      <path d="M12 8.5c2-1.3 4.5-1.5 7.5-1v11c-3-.5-5.5-.3-7.5 1" />
      <path d="M12 8.5V19.5" />
      <path d="M12 1.8l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8z" />
    </svg>
  );
}

const badgeColors = ["bg-apricot-100", "bg-apricot-200", "bg-apricot-300", "bg-apricot-400"];

const topics = [
  { label: "Understanding your CGM trends", Icon: GlucoseGraphIcon },
  { label: "Carb counting and pre-bolusing", Icon: PlateIcon },
  { label: "Pump tech education and training", Icon: PumpIcon },
  { label: "Making diabetes fit your lifestyle", Icon: WalkingPersonIcon },
  { label: "Diabetes distress & mental health support", Icon: MindHeartIcon },
  { label: "Life changes and new routines", Icon: CalendarIcon },
  { label: "Collaborative support following hypos", Icon: ChatHypoIcon },
  { label: "Balancing exercise, sleep & stress w/ Diabetes", Icon: BalanceScaleIcon },
  { label: "Tactical coaching for moms-to-be", Icon: PregnantIcon },
  { label: "Education for the newly diagnosed", Icon: BookIcon },
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
          className="flex w-[132px] shrink-0 flex-col items-center gap-3 px-2 sm:w-[176px] sm:px-3"
        >
          <div
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full sm:h-24 sm:w-24 ${badgeColors[i % badgeColors.length]}`}
          >
            <Icon className="h-8 w-8 text-denim-500 sm:h-12 sm:w-12" />
          </div>
          <p className="text-center font-heading text-sm font-semibold leading-tight text-apricot-900 sm:text-[15px]">
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
 * prefers-reduced-motion, leaving a single static wrapped grid.
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

import {
  LineChart,
  Utensils,
  Smartphone,
  PersonStanding,
  HeartHandshake,
  CalendarCheck,
  MessagesSquare,
  Scale,
  Baby,
  BookOpen,
  MoreHorizontal,
  type LucideIcon,
} from "lucide-react";

// Alternating two-tone rhythm — clean light/deeper pattern rather than a
// four-step ramp that reads as random light-vs-dark badges.
const badgeColors = ["bg-apricot-100", "bg-apricot-200"];

const topics: { label: string; Icon: LucideIcon }[] = [
  { label: "Actionable insights from your CGM trends", Icon: LineChart },
  { label: "Carb counting, pre-bolusing, split bolusing", Icon: Utensils },
  { label: "Pump tech education and training", Icon: Smartphone },
  { label: "Making diabetes fit your lifestyle", Icon: PersonStanding },
  { label: "Diabetes distress & mental health support", Icon: HeartHandshake },
  { label: "Life changes and adapting diabetes to new routines", Icon: CalendarCheck },
  { label: "Collaborative support following hypos", Icon: MessagesSquare },
  { label: "Balancing exercise, sleep & stress w/ diabetes", Icon: Scale },
  { label: "Guidance for moms-to-be", Icon: Baby },
  { label: "Education for the newly diagnosed", Icon: BookOpen },
  { label: "And more", Icon: MoreHorizontal },
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
            <Icon
              className="h-7 w-7 text-denim-500 sm:h-10 sm:w-10"
              strokeWidth={1.6}
              aria-hidden="true"
            />
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
export default function TopicsTicker({ title }: { title?: string }) {
  return (
    <section
      aria-label="Topics we cover"
      className="bg-neutral-25 pb-10 pt-6 sm:pb-14 sm:pt-8"
    >
      <div className="relative overflow-hidden">
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

      {title && (
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:mt-10">
          <p className="text-center font-body text-lg font-semibold leading-relaxed text-apricot-900 sm:text-xl sm:leading-relaxed">
            {title}
          </p>
          <div
            className="mx-auto mt-5 h-1 w-16 rounded-full bg-apricot-400"
            aria-hidden="true"
          />
        </div>
      )}
    </section>
  );
}

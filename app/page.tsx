import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaButton from "@/components/CtaButton";
import ContactForm from "@/components/ContactForm";
import HeroVideo from "@/components/HeroVideo";

const realityItems = [
  {
    id: "schedules",
    body: (
      <>
        <strong className="font-semibold">Busy schedules</strong> drive irregular
        visits
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    id: "one-size",
    body: (
      <>
        Many patients feel
        <br />
        <strong className="font-semibold">
          &ldquo;one size fits all&rdquo; approach does not work
        </strong>
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: "data",
    body: (
      <>
        Lots of data, but{" "}
        <strong className="font-semibold">
          insights only unlocked during short visits
        </strong>
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 16l3-4 3 2 4-6" />
      </svg>
    ),
  },
];

const steps = [
  "We enroll your patients into your Persimmon Care Program.",
  "Device data flows automatically into our dashboard.",
  "Your dedicated CDCES reviews patient data each month.",
  "The CDCES calls your patients monthly, between endo visits.",
  "We track time-based activity and deliver claims-ready billing reports.",
  "Your team bills RPM and keeps 100% of reimbursement.",
];

const stats = [
  {
    value: "+10%",
    label:
      "time-in-range improvements when patients are undergoing remote patient monitoring, compared to baseline",
    color: "text-apricot-600",
  },
  {
    value: "+$1,000",
    label: "per patient from insurance reimbursement",
    color: "text-denim-600",
  },
];

export default function Home() {
  return (
    <>
      <Navbar active="providers" onProvidersPage />
      <span id="top" />

      <main>
        {/* Section 1 — Hero */}
        <section className="relative overflow-hidden bg-apricot-100">
          <HeroVideo />
          {/* Apricot wash keeps the video very subtle beneath the hero color */}
          <div
            className="absolute inset-0 bg-apricot-100/70"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-32">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-apricot-600">
              Remote Patient Monitoring
            </p>
            <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight text-apricot-900 sm:text-6xl">
              Concierge Diabetes Care
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-body text-xl text-apricot-900/80 sm:text-2xl">
              Creating value for your patients and your practice.
            </p>
            <div className="mt-10">
              <CtaButton href="#contact">Schedule an Intro Call</CtaButton>
            </div>
            <p className="mx-auto mt-6 max-w-xl font-body text-base text-apricot-900/70 sm:text-lg">
              Explicitly built for Type One, Type Two, and Gestational Diabetes
            </p>
          </div>
        </section>

        {/* Section 2 — The reality today */}
        <section id="reality" className="bg-neutral-25">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <h2 className="text-center font-heading text-2xl font-bold text-apricot-900 sm:text-3xl">
              Today, the reality of diabetes care is:
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {realityItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-start rounded-2xl border border-neutral-100 bg-neutral-50 p-8"
                >
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-denim-500 text-neutral-0">
                    {item.icon}
                  </span>
                  <p className="font-body text-lg text-apricot-900">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Partnership callout */}
        <section className="bg-apricot-100">
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
            <p className="font-body text-2xl font-semibold leading-relaxed text-apricot-900 sm:text-3xl sm:leading-relaxed">
              Persimmon Care Network delivers high-touch, bespoke, between-visit
              care for patients living with{" "}
              <span className="underline decoration-apricot-400 decoration-2 underline-offset-4">
                all types of diabetes
              </span>
              .
            </p>
            <p className="mt-6 font-body text-2xl font-semibold leading-relaxed text-apricot-700 sm:text-3xl sm:leading-relaxed">
              At no extra cost to providers.
            </p>
          </div>
        </section>

        {/* Section 4 — How it works */}
        <section id="how-it-works" className="bg-neutral-25">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <h2 className="text-center font-heading text-3xl font-bold text-apricot-900 sm:text-4xl">
              How it works
            </h2>
            <ol className="mt-14 grid gap-x-6 gap-y-10 md:grid-cols-3">
              {steps.map((step, i) => (
                <li key={i} className="relative flex flex-col items-center text-center">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-apricot-600 font-heading text-xl font-bold text-neutral-0"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <p className="mt-5 max-w-xs font-body text-lg text-apricot-900">
                    <span className="sr-only">{`Step ${i + 1}: `}</span>
                    {step}
                  </p>
                  {/* Arrow to next step on desktop (not after the 3rd or 6th) */}
                  {i % 3 !== 2 && i !== steps.length - 1 && (
                    <span
                      className="absolute right-[-1.75rem] top-6 hidden text-apricot-400 md:block"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M5 12h14" />
                        <path d="M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Section 5 — Big-number callouts */}
        <section className="bg-apricot-100">
          <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
            <div className="grid gap-12 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.value} className="text-center">
                  <p className={`font-heading text-6xl font-bold sm:text-7xl ${stat.color}`}>
                    {stat.value}
                  </p>
                  <p className="mx-auto mt-4 max-w-xs font-body text-lg text-apricot-900/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — CDCES team callout */}
        <section className="border-y border-denim-200 bg-denim-100">
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
            <p className="mb-5 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-denim-600">
              Our care team
            </p>
            <p className="font-body text-xl leading-relaxed text-apricot-900 sm:text-2xl sm:leading-relaxed">
              Our care is delivered by top-tier Certified Diabetes Education and
              Care Specialist (CDCES) Registered Nurses.
            </p>
            <p className="mt-5 font-body text-xl leading-relaxed text-apricot-900 sm:text-2xl sm:leading-relaxed">
              Our CDCES team are certified CGM and Pump Trainers, specialized in
              Type One, Type Two, and Gestational Diabetes, and here to support
              patients on mental and physical health topics.
            </p>
          </div>
        </section>

        {/* Section 7 — Closing CTA */}
        <section className="bg-apricot-200">
          <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
            <p className="font-body text-3xl font-semibold leading-snug text-apricot-900 sm:text-4xl sm:leading-snug">
              Give your patients the attention they deserve, while unlocking
              additional value for your practice.
            </p>
            <div className="mt-10">
              <CtaButton href="#contact">Schedule an Intro Call</CtaButton>
            </div>
          </div>
        </section>

        {/* Section 8 — Contact / Request Demo */}
        <section id="contact" className="bg-neutral-25">
          <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
            <h2 className="text-center font-heading text-2xl font-bold text-apricot-900 sm:text-3xl">
              Want to see how it could work for your practice? We&apos;d love to
              show you around.
            </h2>
            <div className="mt-10 rounded-2xl border border-neutral-100 bg-neutral-0 p-6 shadow-sm sm:p-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaButton from "@/components/CtaButton";
import ContactForm from "@/components/ContactForm";

const realityItems = [
  {
    title: "Busy schedules drive irregular visits",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title:
      'Many patients feel a "one size fits all" approach does not work for them',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    title: "Data rich, but insights only unlocked in office",
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
  "We enroll your patient into Persimmon Care Network.",
  "Device data flows automatically into our dashboard.",
  "Your dedicated CDCES reviews patient data each month.",
  "The CDCES calls your patients monthly, between endo visits.",
  "We track time-based activity and deliver claims-ready billing reports.",
  "Your team bills RPM and keeps 100% of reimbursement.",
];

const stats = [
  { value: "+10%", label: "time-in-range improvements" },
  {
    value: "+$1,000",
    label: "revenue value / patient from insurance reimbursement",
  },
];

export default function Home() {
  return (
    <>
      <Navbar active="providers" onProvidersPage />
      <span id="top" />

      <main>
        {/* Section 1 — Hero */}
        <section className="bg-apricot-100">
          <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-32">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-apricot-600">
              Concierge Diabetes Care
            </p>
            <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight text-apricot-900 sm:text-6xl">
              Concierge Diabetes Care
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-body text-xl text-apricot-900/80 sm:text-2xl">
              Creating value for both your patients and your practice.
            </p>
            <div className="mt-10">
              <CtaButton href="#contact">Schedule an Intro Call</CtaButton>
            </div>
          </div>
        </section>

        {/* Section 2 — The reality today */}
        <section id="reality" className="bg-neutral-25">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <h2 className="text-center font-heading text-2xl font-bold text-apricot-900 sm:text-3xl">
              Today, the reality of Type One and Type Two Diabetes care is:
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {realityItems.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start rounded-2xl border border-neutral-100 bg-neutral-50 p-8"
                >
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-apricot-600 text-neutral-0">
                    {item.icon}
                  </span>
                  <p className="font-body text-lg text-apricot-900">
                    {item.title}
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
              Persimmon Care Network partners with Endocrinology practices to
              deliver high-touch, bespoke, between-visit care for patients living
              with all types of diabetes — at no extra cost to the provider.
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
                  <p className="font-heading text-6xl font-bold text-apricot-600 sm:text-7xl">
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
        <section className="bg-neutral-50">
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
            <p className="font-body text-xl leading-relaxed text-apricot-900 sm:text-2xl sm:leading-relaxed">
              Our care is delivered by top-tier Certified Diabetes Education and
              Care Specialists. Our CDCES team are certified CGM and Pump
              Trainers, specialized in Type One, Type Two, and Gestational
              Diabetes, and here to support patients on mental and physical health
              topics.
            </p>
          </div>
        </section>

        {/* Section 7 — Closing CTA */}
        <section className="bg-apricot-900">
          <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
            <p className="font-body text-3xl font-semibold leading-snug text-neutral-0 sm:text-4xl sm:leading-snug">
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
              Interested in exploring more? We&apos;d love to show you what
              we&apos;re about.
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

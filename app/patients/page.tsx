import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaButton from "@/components/CtaButton";
import TopicsTicker from "@/components/TopicsTicker";
import HeroImage from "@/components/HeroImage";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "For Patients — Persimmon Care Network",
  description:
    "Concierge, between-visit diabetes support for patients. More coming soon.",
};

export default function PatientsPage() {
  return (
    <>
      <Navbar active="patients" onProvidersPage={false} />

      <main>
        <section className="relative overflow-hidden bg-apricot-100">
          <HeroImage />
          {/* Apricot wash keeps the photo very subtle beneath the hero color */}
          <div
            className="absolute inset-0 bg-apricot-100/70"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-apricot-600">
              For Patients
            </p>
            <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight text-apricot-900 sm:text-5xl">
              It&apos;s time to upgrade your care
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-body text-xl text-apricot-900 sm:text-2xl">
              Let&apos;s make diabetes care about you, not about diabetes
            </p>
            <p className="mx-auto mt-6 max-w-2xl font-body text-sm text-apricot-900/80 sm:text-lg">
              Our program partners with your provider to meet you exactly where
              you are, on what you need.
              <br />
              From learning the basics to advanced basal/bolus strategies to
              emotional support, we&apos;re here to make diabetes care better.
            </p>
            <div className="mt-10">
              <CtaButton href="#contact">Contact us</CtaButton>
            </div>
          </div>
        </section>

        <TopicsTicker />

        <section id="contact" className="bg-neutral-25">
          <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
            <h2 className="text-center font-heading text-2xl font-bold text-apricot-900 sm:text-3xl">
              Want your provider to adopt Persimmon Care? Drop us a note here.
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

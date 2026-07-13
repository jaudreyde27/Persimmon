import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaButton from "@/components/CtaButton";
import TopicsTicker from "@/components/TopicsTicker";
import HeroImage from "@/components/HeroImage";

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
              Concierge care, between every visit.
            </h1>
            <p className="mx-auto mt-6 max-w-xl font-body text-lg text-apricot-900/80">
              We&apos;re building a dedicated space for the patients we support.
              In the meantime, if you&apos;d like to learn how Persimmon Care
              Network works alongside your endocrinology practice, we&apos;d
              love to hear from you.
            </p>
            <div className="mt-10">
              <CtaButton href="/#contact">Contact us</CtaButton>
            </div>
          </div>
        </section>

        <TopicsTicker />
      </main>

      <Footer />
    </>
  );
}

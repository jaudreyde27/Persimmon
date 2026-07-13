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
              It&apos;s time to upgrade your diabetes care
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-apricot-900/80">
              No more boilerplate diabetes care. Our program partners with your
              Endocrinologist (or OB-GYN) to meet you exactly where you are, on
              what you need. From learning the basics to advanced strategies to
              emotional support from someone who gets it, we&apos;re here to make
              diabetes care better.
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

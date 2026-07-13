import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "For Patients — Persimmon Care Network",
  description:
    "Concierge, between-visit diabetes support for patients. More coming soon.",
};

export default function PatientsPage() {
  return (
    <>
      <Navbar active="patients" onProvidersPage={false} />

      <main className="bg-apricot-100">
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-24 text-center sm:px-6">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-apricot-600">
            For Patients
          </p>
          <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight text-apricot-900 sm:text-5xl">
            Concierge care, between every visit.
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-body text-lg text-apricot-900/80">
            We&apos;re building a dedicated space for the patients we support.
            In the meantime, if you&apos;d like to learn how Persimmon Care
            Network works alongside your endocrinology practice, we&apos;d love
            to hear from you.
          </p>
          <div className="mt-10">
            <CtaButton href="/#contact">Contact us</CtaButton>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/images/patient-cgm-stretch.webp"
              alt="A woman stretching outdoors with a continuous glucose monitor visible on her upper arm"
              width={920}
              height={383}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

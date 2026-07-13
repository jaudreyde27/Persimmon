import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Persimmon Care Network",
  description: "Privacy Policy for Persimmon Care Network.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar active="providers" onProvidersPage={false} />

      <main className="bg-neutral-25">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <h1 className="font-heading text-3xl font-bold text-apricot-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-6 font-body text-lg text-apricot-900/80">
            This is a placeholder privacy policy. The full policy is coming soon.
            For any questions about how Persimmon Care Network handles your
            information, please reach out to{" "}
            <a
              href="mailto:hello@persimmon-clinical.com"
              className="text-denim-500 underline hover:text-denim-600"
            >
              hello@persimmon-clinical.com
            </a>
            .
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

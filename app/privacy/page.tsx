import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Persimmon Care Network.",
};

const CONTACT_EMAIL = "hello@persimmon-care.com";

export default function PrivacyPage() {
  return (
    <>
      <Navbar active="providers" onProvidersPage={false} />

      <main className="bg-neutral-25">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <h1 className="font-heading text-3xl font-bold text-apricot-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-apricot-900/80">
            Persimmon Care Network respects your privacy. This Privacy Policy
            explains what information may be collected through this website and
            how that information may be used.
          </p>

          <Section title="Information We Collect">
            <p className="mt-4 font-body text-lg leading-relaxed text-apricot-900/80">
              When you visit this website, certain information may be collected
              automatically, such as browser type, IP address, device
              information, and general website usage data.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-apricot-900/80">
              If you choose to contact Persimmon Care Network or submit
              information through a form, information such as your name, email
              address, phone number, or other details you provide may be
              collected.
            </p>
          </Section>

          <Section title="How Information Is Used">
            <p className="mt-4 font-body text-lg leading-relaxed text-apricot-900/80">
              Information collected through this website may be used to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 font-body text-lg leading-relaxed text-apricot-900/80">
              <li>Respond to inquiries or requests.</li>
              <li>Provide and improve website functionality and services.</li>
              <li>Communicate when appropriate.</li>
              <li>Maintain the security and operation of the website.</li>
            </ul>
          </Section>

          <Section title="Cookies">
            <p className="mt-4 font-body text-lg leading-relaxed text-apricot-900/80">
              This website may use cookies and similar technologies to improve
              the browsing experience and better understand how the website is
              used. Most web browsers allow cookie preferences to be managed
              through browser settings.
            </p>
          </Section>

          <Section title="Information Sharing">
            <p className="mt-4 font-body text-lg leading-relaxed text-apricot-900/80">
              Information may be shared with trusted service providers that
              assist in operating the website or providing services. Information
              may also be disclosed if required by law or when reasonably
              necessary to protect legal rights or comply with applicable legal
              obligations.
            </p>
          </Section>

          <Section title="Data Security">
            <p className="mt-4 font-body text-lg leading-relaxed text-apricot-900/80">
              Reasonable administrative, technical, and physical safeguards are
              used to help protect information collected through this website.
              However, no method of transmitting or storing information is
              completely secure, and absolute security cannot be guaranteed.
            </p>
          </Section>

          <Section title="Changes to This Privacy Policy">
            <p className="mt-4 font-body text-lg leading-relaxed text-apricot-900/80">
              This Privacy Policy may be updated from time to time. Any changes
              will be posted on this page.
            </p>
          </Section>

          <Section title="Contact">
            <p className="mt-4 font-body text-lg leading-relaxed text-apricot-900/80">
              Questions about this Privacy Policy may be directed to:
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-apricot-900">
              <strong className="font-semibold">Persimmon Care Network</strong>
              <br />
              <strong className="font-semibold">Email:</strong>{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-denim-500 underline hover:text-denim-600"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </Section>
        </div>
      </main>

      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-heading text-xl font-bold text-apricot-900 sm:text-2xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

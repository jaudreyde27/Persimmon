import Image from "next/image";

/**
 * Decorative background photo for the patients hero — the image counterpart
 * to HeroVideo on the providers page. Sits behind the hero content and is
 * washed out by an apricot-100 overlay so it reads as a subtle backdrop, not
 * a focal point.
 */
export default function HeroImage() {
  return (
    <Image
      src="/images/patient-cgm-stretch.webp"
      alt=""
      fill
      priority
      aria-hidden="true"
      className="object-cover opacity-70"
    />
  );
}

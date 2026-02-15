"use client";

export default function CtaFooter() {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-gradient-to-t
        from-[#5a341f]
        via-[#2b160d]
        to-black"
      />

      {/* CTA CARD */}
      <div className="relative z-10 flex justify-center px-4 pt-28 md:px-6 md:pt-40">
        <div
          className="w-full max-w-4xl rounded-2xl
          bg-gradient-to-t
          from-[#4a2717]
          via-[#2a150c]
          to-[#0e0906]
          px-6 py-14 text-center shadow-2xl
          md:px-12 md:py-20"
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Want us to make some for you ?
          </h2>

          <p className="mt-4 text-base font-bold text-white md:mt-6 md:text-4xl">
            That can be arranged
          </p>

          <p className="mt-3 text-3xl font-bold text-white/70  opacity-30">
            Let's talk it over on a 30-minute call.
          </p>

          <a
            href="https://calendly.com/wearewebsitedesigners/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg
                       bg-[#e35914]
                       px-8 py-3 text-sm font-semibold text-white
                       transition hover:bg-[#8b4c2c]
                       md:mt-10 md:px-10 md:py-4"
          >
            Book Your Discovery Call →
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 mt-24 px-6 pb-10 text-white md:mt-40 md:px-20">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          
          {/* LEFT */}
          <div>
            <img
              src="/logo while.png"
              alt="Logo"
              className="mb-4 h-8 md:h-10"
            />

            <p className="max-w-xs text-sm text-white/90">
              Your brand&apos;s journey is at the heart of everything we create
            </p>

            <p className="mt-6 text-sm">
              Customer support:
              <br />
              <span className="font-semibold">
                support@wearewebsitedesginer.com
              </span>
            </p>
          </div>

          {/* RIGHT */}
          <ul className="space-y-3 text-sm text-white/90">
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
            <li>Careers</li>
            <li>Become an Affiliate</li>
          </ul>
        </div>

        {/* BOTTOM */}
        <p className="mt-12 text-center text-xs text-white/60 md:mt-20">
          © 2026 Wearewebsitedesigner. All rights reserved
        </p>
      </footer>
    </section>
  );
}
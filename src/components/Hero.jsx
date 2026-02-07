"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const imageWrapRef = useRef(null);

  useEffect(() => {
    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .fromTo(badgeRef.current, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 })
      .fromTo(headingRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.2")
      .fromTo(paraRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3")
      .fromTo(buttonRef.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.3")
      .fromTo(imageWrapRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.2");
  }, []);

  return (
    <>
      {/* ================= HERO TEXT ================= */}
      <section className="relative bg-black overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.25),transparent_60%),linear-gradient(180deg,#050b1a,#000000)]" />

        <div
          className="
            relative z-10 mx-auto max-w-5xl
            pt-32 pb-20
            px-6 text-center text-white
          "
        >
          <div
            ref={badgeRef}
            className="mb-6 inline-flex rounded-full border border-white/15 bg-black/40 px-5 py-1.5 text-sm backdrop-blur"
          >
            <span className="text-green-400">✔</span>
            <span className="ml-2 text-white/85">Proven By Our Own Brands</span>
          </div>

          <h1
            ref={headingRef}
            className="text-[34px] sm:text-[40px] md:text-[54px] font-semibold leading-[1.15]"
          >
            Boutique Full Stack Growth Partner for eCom DTC Brands Looking to{" "}
            <span className="text-[#ef4444]">Scale to 8–9 Figures.</span>
          </h1>

          <p
            ref={paraRef}
            className="mt-5 max-w-2xl mx-auto text-[15px] sm:text-[16px] text-white/75"
          >
            Paid ads, killer creatives, email, landings and strategy.
            E-commerce growth, wrapped in beautiful processes.
          </p>

          <a
            ref={buttonRef}
            href="#"
            className="inline-block mt-9 rounded-xl bg-[#ef4444] px-12 py-4 text-sm font-semibold shadow-[0_0_32px_rgba(239,68,68,0.45)] transition active:scale-95"
          >
            Book Your Discovery Call →
          </a>
        </div>
      </section>

      {/* ================= HERO IMAGE ================= */}
      <section className="relative bg-black">
        <div
          ref={imageWrapRef}
          className="relative z-10 flex justify-center px-4 pb-24 overflow-hidden"
        >
          <img
            src="/hero.png"
            alt="Brand results"
            className="w-full max-w-6xl object-contain"
          />
        </div>
      </section>
    </>
  );
}
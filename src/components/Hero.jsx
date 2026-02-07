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
      .fromTo(badgeRef.current, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 })
      .fromTo(headingRef.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.2")
      .fromTo(paraRef.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3")
      .fromTo(buttonRef.current, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.3")
      .fromTo(imageWrapRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.2");
  }, []);

  return (
    <section className="relative overflow-hidden bg-black">

      {/* 🌌 SINGLE CONTINUOUS BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(37,99,235,0.35),transparent_60%),linear-gradient(180deg,#050505,#000000)]" />

      {/* ===== TEXT AREA ===== */}
      <div className="relative z-10 mx-auto max-w-5xl min-h-[80vh] flex flex-col items-center justify-center px-5 text-center text-white">

        <div
          ref={badgeRef}
          className="mb-6 rounded-full border border-white/15 bg-black/40 px-4 py-1 text-sm backdrop-blur"
        >
          <span className="text-green-400">✔</span>{" "}
          <span className="text-white/80">Proven By Our Own Brands</span>
        </div>

        <h1
          ref={headingRef}
          className="text-[30px] sm:text-[36px] md:text-[54px] font-semibold leading-[1.25]"
        >
          Boutique Full Stack Growth Partner for eCom DTC Brands Looking to{" "}
          <span className="text-[#ef4444]">Scale to 8–9 Figures.</span>
        </h1>

        <p
          ref={paraRef}
          className="mt-4 max-w-2xl text-[14px] sm:text-[15px] md:text-base text-white/70"
        >
          Paid ads, killer creatives, email, landings and strategy.
          E-commerce growth, wrapped in beautiful processes.
        </p>

        <a
          ref={buttonRef}
          href="#"
          className="mt-8 rounded-xl bg-[#ef4444] px-10 py-4 text-sm font-semibold shadow-[0_0_28px_rgba(239,68,68,0.45)] transition hover:scale-105"
        >
          Book Your Discovery Call →
        </a>
      </div>

      {/* 🔻 SMOOTH FADE (TEXT → IMAGE) */}
      <div className="pointer-events-none absolute bottom-[32%] left-0 h-[220px] w-full bg-gradient-to-b from-black to-transparent z-20" />

      {/* ===== IMAGE AREA ===== */}
      <div
        ref={imageWrapRef}
        className="relative z-10 flex justify-center pb-28 overflow-hidden"
      >
        
       

        <img
          src="/hero.png"
          alt="Brand Proof"
          className="relative z-10 w-[115%] 
          sm:w-[120%] md:w-full max-w-none
           md:max-w-[1900px] rounded-2xl 
           drop-shadow-[0_70px_120px_rgba(0,0,0,0.82)]
            md:-rotate-2"
            
        />
      </div>
    </section>
  );
}
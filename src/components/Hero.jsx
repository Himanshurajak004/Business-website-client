"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
      .fromTo(
        headingRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
        },
        "-=0.2"
      )
      .fromTo(
        paraRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5 },
        "-=0.2"
      );
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3b0f0f] via-black to-[#0b1a3a]" />
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_70%_30%,#1e40af,transparent_40%)]" />
      <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        
        {/* Badge */}
        <div
          ref={badgeRef}
          className="mb-8 rounded-full border border-white/20 bg-black/40 px-5 py-1.5 text-sm backdrop-blur"
        >
          <span className="text-green-400">✔</span>{" "}
          <span className="text-white/80">Proven By Our Own Brands</span>
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="max-w-4xl text-[40px] font-semibold leading-[1.15] tracking-tight md:text-[56px]"
        >
          <span className="block">Boutique Full Stack Growth Partner</span>
          <span className="block">
            for eCom DTC Brands Looking to{" "}
            <span className="text-[#ef4444]">Scale to 8–9 Figures.</span>
          </span>
        </h1>

        {/* Sub text */}
        <p
          ref={paraRef}
          className="mt-6 max-w-2xl text-base text-white/70 md:text-lg"
        >
          Paid ads, killer creatives, email, landings and strategy.
          E-commerce growth, wrapped in beautiful processes.
        </p>

        {/* CTA */}
        <a
  ref={buttonRef}
  href="Https://calendly.com/wearewebsitedesigners/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 inline-block rounded-xl border border-[#ef4444]/40 bg-[#ef4444] px-10 py-4 text-base font-semibold shadow-[0_0_25px_rgba(239,68,68,0.4)] transition hover:scale-105 hover:bg-[#dc2626]"
>
  Book Your Discovery Call →
</a>
      </div>
    </section>
  );
}
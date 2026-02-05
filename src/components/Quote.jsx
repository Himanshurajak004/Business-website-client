"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const textRef = useRef(null);
  const footerRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // MASTER – smooth & short
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 35%",   // 👈 SHORT RANGE = readable
          scrub: 0.8,       // 👈 smooth both ways
        },
      });

      // glow breathe
      tl.fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, ease: "none" }
      );

      // quote mark
      tl.fromTo(
        quoteRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, ease: "none" },
        "-=0.2"
      );

      // main text
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: "none" },
        "-=0.15"
      );

      // footer
      tl.fromTo(
        footerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, ease: "none" },
        "-=0.1"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* green glow */}
      <div
        ref={glowRef}
        className="absolute w-[600px] h-[300px] rounded-full
        bg-[radial-gradient(circle,rgba(0,255,120,0.25),transparent_70%)]
        blur-[120px]"
      />

      {/* content */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        {/* quote */}
        <div
          ref={quoteRef}
          className="text-7xl mb-6 font-serif text-white/80"
        >
          “
        </div>

        {/* main text */}
        <p
          ref={textRef}
          className="text-2xl md:text-3xl font-semibold leading-snug mb-12"
        >
          Went from zero to almost 8 figures with these guys in
          <br className="hidden md:block" />
          almost 1.5 years. They know how to actually scale.
        </p>

        {/* footer */}
        <div ref={footerRef}>
          <p className="text-sm text-white/60 mb-2">
            Owner of PrimalHerbs
          </p>
          <p className="text-lg font-bold tracking-wide">
            PRIMALHERBS®
          </p>
        </div>
      </div>
    </section>
  );
}
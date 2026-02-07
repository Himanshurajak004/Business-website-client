"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const authorRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 25%",
          scrub: 1.2,
        },
      });

      tl.fromTo(
        sectionRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, ease: "none" }
      );

      tl.fromTo(
        quoteRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: "none",
        },
        "-=0.3"
      );

      tl.fromTo(
        authorRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, ease: "none" },
        "-=0.2"
      );

      tl.fromTo(
        logoRef.current,
        { scale: 0.85, rotate: -6, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, ease: "none" },
        "-=0.25"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        flex
        items-center
        justify-center
        bg-black
        px-4
        py-24
        md:py-32
        text-center
        text-white
      "
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15),transparent_55%)]" />

      <div className="relative z-10 max-w-4xl">
        {/* quote icon */}
        <div className="mb-8 text-5xl text-white/60">“</div>

        {/* Quote */}
        <h2
          ref={quoteRef}
          className="mb-8 text-3xl md:text-4xl font-semibold leading-tight"
        >
          <span className="block">
            The most efficient marketing machine.
          </span>
          <span className="block">
            They learn quickly & execute like a rocket.
          </span>
        </h2>

        {/* Author */}
        <p
          ref={authorRef}
          className="mb-8 text-sm tracking-wide text-white/60"
        >
          Ran Halbershtain — VP of Marketing at Livia
        </p>

        {/* Logo */}
        <div ref={logoRef} className="flex justify-center">
          <img
            src="https://kandyforscale.com/cdn/shop/files/image_5.png?v=1746465414&width=256"
            alt="Livia"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
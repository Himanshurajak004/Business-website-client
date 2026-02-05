"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudies() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  const cases = [
    {
      brand: "DTC Beauty Brand",
      stat: "3.2x ROAS",
      desc: "Scaled profitably with paid ads + creative testing.",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&auto=format&fit=crop",
    },
    {
      brand: "eCom Apparel",
      stat: "$1.4M Revenue",
      desc: "Full-funnel growth with CRO & performance marketing.",
      image:
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&auto=format&fit=crop",
    },
    {
      brand: "DTC Wellness",
      stat: "2.7x Growth",
      desc: "Email + paid ads engine built from scratch.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Heading */
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 55%",
            scrub: 0.8,
          },
        }
      );

      /* Cards */
      cardsRef.current.forEach((card, i) => {
        const img = card.querySelector("img");

        // Card reveal
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 55%",
              scrub: 0.9,
            },
          }
        );

        // Image parallax (THIS is the premium feel)
        gsap.fromTo(
          img,
          { y: 40, scale: 1.1 },
          {
            y: -30,
            scale: 1,
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
          <section id="case-studies" className="py-32 bg-black text-white">
      <h2 className="text-4xl font-bold">Case Studies</h2>
      {/* rest of your content */}
    </section>

        {/* Cards */}
        <div className="grid gap-16 md:grid-cols-3">
          {cases.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative overflow-hidden rounded-3xl border border-white/10"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.brand}
                className="h-[420px] w-full object-cover will-change-transform"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 z-10 p-8">
                <span className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 text-sm text-white">
                  {item.brand}
                </span>

                <h3 className="mt-2 text-3xl font-bold text-white">
                  {item.stat}
                </h3>

                <p className="mt-2 max-w-xs text-sm text-gray-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
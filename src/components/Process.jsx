"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const lineRef = useRef(null);
  const brandsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
      });

      // HEADING
      tl.fromTo(
        headingRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          ease: "none",
        }
      );

      // LINE
      tl.fromTo(
        lineRef.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          transformOrigin: "center",
          ease: "none",
        },
        "-=0.2"
      );

      // CARDS
      tl.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.18,
          ease: "none",
        },
        "-=0.3"
      );

      // BRAND STRIP (horizontal drift)
      brandsRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { x: i === 1 ? 60 : -60, opacity: 0.6 },
          {
            x: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 45%",
              scrub: 1.2,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div
          ref={headingRef}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            No Magic, Only Data and Processes <br />
            That{" "}
            <span className="text-red-500">
              Scaled Brands Like Yours
            </span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg">
            Managing tens of millions of dollars of adspend lets us
            minimize your risks and develop unbeatable processes.
          </p>
        </div>

        {/* Cards */}
        <div className="relative mt-24 grid gap-10 md:grid-cols-3">
          {/* Line */}
          <div
            ref={lineRef}
            className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/20"
          />

          {[
            {
              num: "1",
              title: "We Research, Deep",
              text:
                "Minimize risk by leaning into your customer, market, unique product mechanism and huge amounts of historical data points.",
            },
            {
              num: "2",
              title: "We Build, Fast.",
              text:
                "100s of proven-to-work ads, custom funnels, unbeatable offers, consistent emails and strategy under one efficient roof.",
            },
            {
              num: "3",
              title: "We Test, A Lot.",
              text:
                "It takes us 3 days to test and rebuild creatives. We move.",
            },
          ].map((card, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative z-10 rounded-2xl border border-white/20 bg-white/5 p-10 backdrop-blur"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white mb-6">
                {card.num}
              </span>
              <h3 className="text-xl font-semibold text-white mb-4">
                {card.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Brand Strip */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {[
            "Brand One",
            "Brand Two",
            "Brand Three",
          ].map((brand, i) => (
            <div
              key={i}
              ref={(el) => (brandsRef.current[i] = el)}
              className="relative"
            >
              <img
                src={`https://dummyimage.com/600x200/111/fff&text=${brand.replace(
                  " ",
                  "+"
                )}`}
                className="rounded-xl opacity-80"
              />
              {brand === "Brand Three" && (
                <span className="absolute top-4 right-4 rounded-full bg-blue-500 px-4 py-1 text-sm text-white">
                  Our Own Brand
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
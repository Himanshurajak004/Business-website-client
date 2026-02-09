"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    /* ================= HEADING ================= */
    gsap.fromTo(
      headingRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    /* ================= CARDS ================= */
    cardsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    /* ================= IMAGES ================= */
    imagesRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-black py-36">
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADING ================= */}
        <div
          ref={headingRef}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            No Magic, Only Data and Processes <br />
            That <span className="text-red-500">Scaled Brands Like Yours</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg">
            Managing tens of millions of dollars of adspend lets us minimize your risks.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-28 grid gap-10 md:grid-cols-3">
          {[
            {
              num: "1",
              title: "We Research, Deep",
              text: "Minimize risk by understanding your customer, market and data.",
            },
            {
              num: "2",
              title: "We Build, Fast.",
              text: "Funnels, ads, offers and systems under one efficient roof.",
            },
            {
              num: "3",
              title: "We Test, A Lot.",
              text: "Rapid testing, rebuilding and scaling of winning creatives.",
            },
          ].map((card, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="rounded-2xl border border-white/20 bg-white/5 p-10 backdrop-blur"
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

        {/* ================= IMAGES SECTION ================= */}
        <div className="mt-32 grid gap-10 md:grid-cols-3">
          {[
            "/p1.png",
            "/p2.png",
            "/p4.png",
          ].map((src, i) => (
            <div
              key={i}
              ref={(el) => (imagesRef.current[i] = el)}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src={src}
                alt="Brand case"
                className="w-full h-[380px] object-cover"
              />

              {i === 2 && (
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
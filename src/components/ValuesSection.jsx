"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ValuesSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // HEADING
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      // CARDS
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      title: "We won't kiss your ass",
      desc: "For that, we can arrange something with our partners.",
      small: "Growth instead of comfort, always.",
      gradient: "from-purple-600 to-orange-500",
      logo: "/logo1.png",
    },
    {
      title: "We hate wasting time.",
      desc: "Approvals should take minutes, not days. That’s how money gets burned.",
      small: "Corporate bureaucracy is a no-no.",
      gradient: "from-cyan-600 to-emerald-500",
      logo: "/logo2.png",
    },
    {
      title: "We love dreaming up weird stuff.",
      desc: "Our hiring test is named after a banana. That pretty much sums it up.",
      small: "This helps us break through the noise.",
      gradient: "from-pink-600 to-indigo-500",
      logo: "/logo3.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-black py-32 px-6 overflow-hidden"
    >
      {/* HEADING */}
      <div
        ref={headingRef}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Phew, finally.
        </h2>
        <p className="text-white/60 mt-4">
          We chew through all the data so you don’t have to. We manage,
          train, hire, incentivise your marketing team.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`
              group rounded-2xl p-8 text-left
              bg-gradient-to-br ${card.gradient}
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
            `}
          >
            {/* LOGO */}
            <img
              src={card.logo}
              alt=""
              className="h-14 mb-6 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <h3 className="text-xl font-semibold text-white mb-3">
              {card.title}
            </h3>

            <p className="text-white/90 mb-4 text-sm leading-relaxed">
              {card.desc}
            </p>

            <p className="text-white/70 text-sm">
              {card.small}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
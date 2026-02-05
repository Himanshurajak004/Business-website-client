"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      title: "MEDIA BUYING",
      desc:
        "A numbers game based on creatives. Seamless processes for communication between creatives and ad buyers.",
      icon: "📊",
    },
    {
      title: "CREATIVES, PRODUCED.",
      desc:
        "Forget scripting, briefing, management, reviews. We take care of everything.",
      icon: "🎥",
    },
    {
      title: "LANDING PAGES, BUILT.",
      desc:
        "Mobile optimized, A/B tested landing pages and product pages. Done for you.",
      icon: "💻",
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4 }
    ).fromTo(
      cardsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      },
      "-=0.1"
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#ef4444]/40 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)]"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_top,#ef444430,transparent_60%)]" />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-5 text-2xl">{s.icon}</div>

                <h3 className="mb-4 text-lg font-semibold tracking-wide text-white">
                  {s.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/60">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
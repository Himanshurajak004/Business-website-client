"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Strategy, Handled",
    desc: "Your dedicated CMO who's driven by problem solving. While connecting the dots between departments.",
    glow: "from-emerald-500/30 to-cyan-500/10",
    icon: "♟️",
    image: "fulc1.png",
    dot: "bg-emerald-400",
  },
  {
    title: "Media Buying, Optimized",
    desc: "A numbers game based on creatives. Seamless processes for communication between creatives and ad buyers.",
    glow: "from-blue-500/30 to-indigo-500/10",
    icon: "📊",
    image: "fircle2.png",
    dot: "bg-cyan-400",
  },
  {
    title: "Creatives, Produced",
    desc: "Forget scripting, briefing, management, reviews. We take care of everything.",
    glow: "from-purple-500/30 to-pink-500/10",
    icon: "🎥",
    image: "full3.png",
    dot: "bg-purple-400",
  },
  {
    title: "Email Marketing, Sorted",
    desc: "Email strategy, automations, campaigns, email copy & designs — all focused on generating more revenue.",
    glow: "from-pink-500/30 to-red-500/10",
    icon: "✉️",
    image: "fir4.png",
    dot: "bg-pink-400",
  },
  {
    title: "Landing Pages, Built",
    desc: "Mobile optimized, A/B tested landing pages and product pages. Done for you.",
    glow: "from-yellow-500/30 to-orange-500/10",
    icon: "🔍",
    image: "full5.png",
    dot: "bg-yellow-400",
  },
  {
    title: "Websites, Developed",
    desc: "Top developers who can transform any idea into reality, specializing exclusively in Shopify development.",
    glow: "from-indigo-500/30 to-purple-500/10",
    icon: "🧩",
    image: "full6.png",
    dot: "bg-indigo-400",
  },
];

export default function FullCirclePerformance() {
  const blocksRef = useRef([]);

  useEffect(() => {
    blocksRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
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
    <section className="bg-black py-24 md:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* HEADER */}
      <div className="text-center mb-20 md:mb-32">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Full Circle Performance
        </h2>
        <p className="text-white/60 mt-3">From creatives to emails.</p>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* CENTER TIMELINE (DESKTOP COLORFUL) */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full pointer-events-none">
          <div className="w-[2px] h-full bg-gradient-to-b from-emerald-400 via-cyan-400 via-purple-400 to-pink-400 opacity-80" />
        </div>

        {/* ITEMS */}
        <div className="space-y-28 md:space-y-44 relative">
          {items.map((item, i) => {
            const isRight = i % 2 === 1;

            return (
              <div
                key={i}
                ref={(el) => (blocksRef.current[i] = el)}
                className="relative pl-10 md:pl-0"
              >
                {/* DOT */}
                <div
                  className={`
                    absolute left-[14px] md:left-1/2 top-[150px]
                    w-3 h-3 rounded-full ${item.dot}
                    shadow-[0_0_14px_rgba(255,255,255,0.6)]
                    -translate-x-1/2
                  `}
                />

                {/* GLOW */}
                <div
                  className={`absolute -inset-32 bg-gradient-to-r ${item.glow} blur-[140px] opacity-60`}
                />

                <div className="relative grid gap-6 md:grid-cols-2 md:gap-20 items-start md:items-center">
                  {/* IMAGE */}
                  <div
                    className={`relative rounded-2xl overflow-hidden border border-white/10 bg-black ${
                      isRight ? "md:order-2" : ""
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto md:h-[360px] object-contain md:object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>

                  {/* TEXT */}
                  <div
                    className={`relative z-10 flex flex-col gap-4 text-left items-start ${
                      isRight
                        ? "md:items-start md:text-left"
                        : "md:items-end md:text-right"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg">
                      {item.icon}
                    </div>

                    <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-white/70 leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-28 md:mt-40">
        <a
          href="https://calendly.com/wearewebsitedesigners/30min"
          className="bg-red-500 hover:bg-red-600 shadow-[0_0_36px_rgba(239,68,68,0.55)]
                     text-white px-8 py-4 rounded-xl font-medium transition active:scale-95"
        >
          Book Your Discovery Call →
        </a>
      </div>
    </section>
  );
}
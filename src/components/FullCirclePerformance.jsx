"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Strategy, Handled",
    desc: "Your dedicated CMO, focused on problem-solving while connecting the dots between teams.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Media Buying, Optimized",
    desc: "A numbers-driven approach powered by high-performing creatives and clean execution.",
    img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
  },
  {
    title: "Creatives, Produced",
    desc: "From scripting to approvals — we handle everything end-to-end so you can focus on growth.",
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa",
  },
  {
    title: "Email Marketing, Sorted",
    desc: "Revenue-focused email strategy, automations, campaigns, copy and design.",
    img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
  },
  {
    title: "Landing Pages, Built",
    desc: "High-converting, mobile-first, A/B tested landing and product pages.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
];

export default function FullCirclePerformance() {
  const sectionsRef = useRef([]);
  const textWrapRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    sectionsRef.current.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onUpdate: (self) => {
          if (self.progress > 0.5) {
            setActive(i);
          }
        },
      });
    });

    // smooth text motion (always tied to scroll)
    gsap.fromTo(
      textWrapRef.current,
      { y: 60, opacity: 0 },
      {
        y: -60,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: textWrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }, []);

  useEffect(() => {
    // soft transition between texts
    gsap.fromTo(
      [titleRef.current, descRef.current],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  }, [active]);

  return (
    <section className="bg-black py-40 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">

        {/* LEFT – STICKY + SMOOTH */}
        <div className="relative">
          <div className="sticky top-1/3">
            <div ref={textWrapRef}>
              <h2
                ref={titleRef}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                {items[active].title}
              </h2>
              <p
                ref={descRef}
                className="text-lg text-white/70 max-w-md"
              >
                {items[active].desc}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT – SCROLL CONTENT */}
        <div className="space-y-56">
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => (sectionsRef.current[i] = el)}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
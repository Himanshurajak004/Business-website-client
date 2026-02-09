"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CreativeTeam() {
  const sectionRef = useRef(null);
  const gridRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      gridRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Imagine Having A Full-Stack Creative Team.
            <br />
            <span className="text-red-500">
              But without all the drawbacks.
            </span>
          </h2>
        </div>

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          {/* LEFT CONTENT */}
          <div className="rounded-2xl bg-[#1c1c1c] p-10 border border-white/10">
            <h3 className="text-2xl font-semibold text-white leading-snug">
              Videos, Designs, Copy.
              <br />
              Zero time from you, all the results from us.
            </h3>

            <p className="mt-6 text-white/60 text-1xl leading-relaxed">
              Kandy tests creatives, then analyzes results, brainstorms ideas,
              scripts videos, shoots models, finds locations, edits footage —
              all in one package.
            </p>

            <ul className="mt-6 space-y-3 text-2xl text-white/70">
              <li className="flex gap-2">
                <span className="text-cyan-400">✔</span> Our own 600 sq. ft. production studio
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400">✔</span> Proven to work UGC creators
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400">✔</span> Seamless communication between media buyers
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400">✔</span> Scripting, briefing, iterating. Nothing is left for guessing.
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/crtea1.png" // 🔁 tumhari image
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ===== BOTTOM GRID (EXACT FORMAT) ===== */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              type: "stat",
              logo: "/crlogo3.png",
              value: "$3.14M",
              label: "Record revenue from a creative",
              sub: "Based on best performing accounts",
            },
            {
              type: "image",
              img: "/creat2.png",
            },
            {
              type: "stat",
              logo: "/crlogo2.png",
              value: "87983",
              label: "Creatives produced since 2020",
              sub: "Including videos, copies, designs",
            },
            {
              type: "image",
              img: "/cr4.png",
            },
            {
              type: "stat",
              logo: "/crlogo1.png",
              value: "3 days",
              label: "Average delivery time",
              sub: "Start to finish for a single creative",
            },
            {
              type: "image",
              img: "/creat3.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (gridRef.current[i] = el)}
              className="rounded-2xl bg-[#1c1c1c] border border-white/10 overflow-hidden flex items-center justify-center min-h-[220px]"
            >
              {item.type === "stat" ? (
                <div className="text-center px-6">
                  <img
                    src={item.logo}
                    className="h-19 mx-auto mb-4"
                  />
                  <div className="text-4xl font-bold text-white">
                    {item.value}
                  </div>
                  <div className="text-2xl text-white/70 mt-2">
                    {item.label}
                  </div>
                  <div className="text-1xl text-white/40 mt-1">
                    {item.sub}
                  </div>
                </div>
              ) : (
                <img
                  src={item.img}
                  className="w-full h-23 object-cover"
                />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <a
            href="https://calendly.com/wearewebsitedesigners/30min"
            className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-xl text-white font-medium shadow-[0_0_36px_rgba(239,68,68,0.55)] transition"
          >
            Book Your Discovery Call →
          </a>
        </div>
      </div>
    </section>
  );
}
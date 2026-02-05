"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CreativeTeam() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 20%",
          scrub: 1.4, // 👈 smooth both directions
        },
      });

      // TEXT reveal
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, ease: "none" }
      );

      // CARD reveal
      tl.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, ease: "none" },
        "-=0.3"
      );

      // IMAGE cinematic movement
      tl.fromTo(
        imageRef.current,
        {
          y: 80,
          scale: 1.08,
          rotate: 1,
        },
        {
          y: -40,
          scale: 1,
          rotate: 0,
          ease: "none",
        },
        "-=0.6"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div ref={textRef} className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Imagine Having A Full-Stack Creative Team.
            <br />
            <span className="text-red-500">
              But without all the drawbacks.
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 items-center">
          {/* Left Card */}
          <div
            ref={cardRef}
            className="rounded-2xl bg-white/5 p-10 backdrop-blur border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white">
              Videos, Designs, Copy.
              <br />
              Zero time from you, all the results from us.
            </h3>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Kandy tests creatives, analyzes results, brainstorms ideas,
              scripts videos, shoots models, finds locations, edits footage —
              all in one package.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop"
              alt="Creative team"
              className="rounded-2xl object-cover shadow-2xl will-change-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
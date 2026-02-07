"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TrustedBrands() {
  const trackRef = useRef(null);

  const logos = [
    "/Audien.png",
    "/hike.png",
    "/Snow.png",
    "/dore.png",
    "/rosabella.png",
    "/serene.png",
    "/rejuvaknee.png",
    "/heyshape.png",
    "/polar.png",
    "/hears.png",
    "/preimers.png",
    "/spacegoods.png",
    "/audien_6.png",
    "/audien_8.png",
    "/last1.png",
    "/last2.png",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const totalWidth = track.scrollWidth / 2;

      gsap.to(track, {
        x: -totalWidth,
        duration: 28,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-black pt-16 sm:pt-28 pb-24 overflow-hidden">
      
      {/* ===== HEADING ===== */}
      <div className="mb-10 text-center text-white/80 px-5">

        {/* DESKTOP */}
        <div className="hidden sm:flex items-center justify-center gap-6">
          <span className="h-px w-24 bg-white/40" />
          <h3 className="text-3xl uppercase tracking-wider">
            Join Brands That Grow
          </h3>
          <span className="h-px w-24 bg-white/40" />
        </div>

        {/* MOBILE */}
        <h3 className="sm:hidden text-xl uppercase tracking-widest">
          Join Brands That Grow
        </h3>
      </div>

      {/* ===== SLIDER ===== */}
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max gap-4 sm:gap-6 px-4"
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="
                flex items-center justify-center
                min-w-[220px] sm:min-w-[260px]
                h-[70px] sm:h-[90px]
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur
              "
            >
              <img
                src={logo}
                alt="Brand logo"
                className="
                  h-6 sm:h-8
                  opacity-80 grayscale
                  transition
                  hover:opacity-100 hover:grayscale-0
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
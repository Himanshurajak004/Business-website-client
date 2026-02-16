"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      style={{
        background: `
          linear-gradient(
            180deg,
            #7a4726 0%,
            #5a341f 30%,
            #3a1f12 55%,
            #120a06 75%,
            #020617 100%
          )
        `,
      }}
    >
      <div
        ref={heroRef}
        className="max-w-6xl w-full rounded-3xl px-6 sm:px-16 py-16 text-center text-white shadow-2xl"
        style={{
          background: `
            linear-gradient(
              180deg,
              #6b3f22 0%,
              #4a2716 65%,
              #020617 100%
            )
          `,
        }}
      >
        <h1 className="text-3xl sm:text-6xl font-bold mb-6">
          Meet wearewebsitedesginer
        </h1>

        <p className="max-w-2xl mx-auto text-white/70 text-sm sm:text-lg">
          Every great agency has a kick-ass portfolio, right?
          <br className="hidden sm:block" />
          Regardless, we made one anyway. Buckle up.
        </p>

        <div className="mt-12 flex justify-center">
          <img
  src="/Donefor.png"
  alt="Hero visual"
  className="
    w-[280px]
    sm:w-[580px]
    md:w-[690px]
    mx-auto
    mt-6 sm:mt-10
    object-contain
  "
/>
        </div>
      </div>

      {/* fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
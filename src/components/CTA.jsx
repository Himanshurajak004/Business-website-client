"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const avatarRef = useRef(null);
  const btnRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 40%",
          scrub: 0.8, // 👈 smooth, short scroll
        },
      });

      // background breathe
      tl.fromTo(
        bgRef.current,
        { opacity: 0.8 },
        { opacity: 1, ease: "none" }
      );

      // avatar float in
      tl.fromTo(
        avatarRef.current,
        { y: -30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, ease: "none" },
        "-=0.2"
      );

      // card reveal
      tl.fromTo(
        cardRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, ease: "none" },
        "-=0.15"
      );

      // button subtle attract
      gsap.to(btnRef.current, {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 1.6,
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32"
    >
      {/* Gradient background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-b from-[#3a0a0a] via-[#8b1c1c] to-[#ef4444]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Avatar */}
        <div
          ref={avatarRef}
          className="absolute -top-24 left-1/2 -translate-x-1/2"
        >
          <img
            src="https://i.imgur.com/2yaf2wb.png"
            alt="avatar"
            className="h-32 w-32 rounded-full shadow-2xl"
          />
        </div>

        {/* Card */}
        <div
          ref={cardRef}
          className="rounded-2xl border border-white/30 bg-white/10 px-10 py-20 backdrop-blur-md"
        >
          <h2 className="text-4xl font-bold text-white">
            Book-in your call.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90">
            We're boutique, we have a cap of how many clients we can take on and
            we don't know whether you'd be the right fit yet. But we'd love to
            figure out over a 30-minute call.
          </p>

         <a
  ref={btnRef}
  href="https://calendly.com/wearewebsitedesigners/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 inline-block rounded-xl bg-[#ff4d4d] px-10 py-4 text-lg font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-[#ff3b3b]"
>
  Book Your Discovery Call →
</a>
        </div>
      </div>
    </section>
  );
}
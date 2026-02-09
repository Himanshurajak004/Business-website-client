"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function QuoteCTA() {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const metaRef = useRef(null);
  const cardWrapRef = useRef(null);
  const avatarRef = useRef(null);
  const cardRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // quote
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        metaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );

      // CTA block animation
      gsap.fromTo(
        [avatarRef.current, cardRef.current],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardWrapRef.current,
            start: "top 80%",
          },
        }
      );

      // button pulse (FULL CTA feel)
      gsap.to(btnRef.current, {
        scale: 1.06,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[120vh] overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#2a0d12] to-[#ef4444]" />

      {/* QUOTE */}
      <div className="relative z-10 pt-40 pb-40 text-center px-6">
        <div className="text-5xl text-white/80 mb-8">“</div>

        <p
          ref={quoteRef}
          className="max-w-2xl mx-auto text-white text-xl md:text-2xl font-medium"
        >
          Equipped and ready to track down all angles and facets of the campaign.
        </p>

        <div ref={metaRef} className="mt-6">
          <p className="text-sm text-white/60">
            Jimi Denison — Co-Founder of Shashibo
          </p>

          <img
            src="/shashibo.png"
            className="h-6 mx-auto mt-4 opacity-80"
            alt=""
          />
        </div>
      </div>

      {/* CTA */}
      <div
        ref={cardWrapRef}
        className="relative z-10 flex justify-center pb-32"
      >
        
        <div
          ref={avatarRef}
          className="absolute -top-12 left-1/2 -translate-x-1/2 z-20"
        >
          <img
            src="/CTAlogo.png"
            className="h-28 w-28 r"
            alt="avatar"
          />
        </div>

        
        <div
          ref={cardRef}
          className="mt-16 w-full max-w-xl rounded-2xl
                     border border-white/30
                     bg-white/10 backdrop-blur-md
                     px-10 py-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            Book-in your call.
          </h3>

          <p className="mx-auto mt-6 max-w-md text-sm text-white/80">
            We're boutique, we have a cap of how many clients we can take on and
            we don't know whether you'd be the right fit yet. But we'd love to
            figure out over a 30-minute call.
          </p>

          <a
            ref={btnRef}
            href="https://calendly.com/wearewebsitedesigners/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl
                       bg-[#ff4d4d]
                       px-10 py-4 text-lg font-semibold text-white
                       shadow-xl"
          >
            Book Your Discovery Call →
          </a>
        </div>
      </div>
    </section>
  );
}
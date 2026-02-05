"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      {
        backgroundColor: "rgba(0,0,0,0)",
        backdropFilter: "blur(0px)",
      },
      {
        backgroundColor: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(14px)",
        scrollTrigger: {
          trigger: document.body,
          start: "top -80",
          toggleActions: "play reverse play reverse",
        },
        duration: 0.25,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 z-50 w-full transition-all"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/wearewebsitedesigner.png"
              alt="We Are Website Designers"
              className="h-8 object-contain brightness-125 contrast-125"
              style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.25))" }}
            />
            {/* Optional text – remove if you want image-only logo */}
            <span className="hidden sm:block text-white font-semibold tracking-wide">
              WeAreWebsiteDesigners
            </span>
          </Link>

          {/* MENU (SCROLL BASED) */}
          <ul className="hidden md:flex gap-8 text-sm text-white/90 font-medium">
            <li>
              <a href="#best-sellers" className="hover:text-white transition">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Done For You
              </a>
            </li>
            <li>
              <a href="#case-studies" className="hover:text-white transition">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-white transition">
                Creative Portfolio
              </a>
            </li>
          </ul>

          {/* ICONS */}
          <div className="flex items-center gap-5 text-white/90">
            <Search size={18} className="cursor-pointer hover:text-white transition" />
            <User size={18} className="cursor-pointer hover:text-white transition" />
            <ShoppingBag size={18} className="cursor-pointer hover:text-white transition" />
          </div>

        </div>
      </div>
    </nav>
  );
}
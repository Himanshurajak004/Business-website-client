"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, Search, User, ShoppingBag } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      {
        background: "rgba(0,0,0,0)",
        backdropFilter: "blur(0px)",
      },
      {
        background:
          "linear-gradient(90deg, rgba(26,14,8,0.9), rgba(140,75,35,0.95), rgba(26,14,8,0.9))",
        backdropFilter: "blur(14px)",
        boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.04)",
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
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative flex h-16 items-center justify-between">

          {/* MOBILE MENU ICON */}
          <button className="md:hidden text-white">
            <Menu size={22} />
          </button>

          {/* MOBILE LOGO (CENTER) */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 md:hidden"
          >
            <img
              src="/logo while.png"
              alt="We Are Website Designers"
              className="h-8 object-contain"
            />
          </Link>

          {/* DESKTOP LOGO (LEFT) */}
          <Link href="/" className="hidden md:flex items-center gap-3">
            <img
              src="/logo while.png"
              alt="We Are Website Designers"
              className="h-9 object-contain"
            />
          </Link>

          {/* DESKTOP MENU — ORIGINAL LINKS */}
          <ul className="hidden md:flex gap-8 text-sm text-white/90 font-medium">
            <li>
              <a
                href="https://kandyforscale.com/collections/best-sellers"
                className="hover:text-white transition"
              >
                Best Sellers
              </a>
            </li>
            <li>
              <a
                href="https://kandyforscale.com/pages/services-list"
                className="hover:text-white transition"
              >
                Done For You
              </a>
            </li>
            <li>
              <a
                href="https://kandyforscale.com/pages/case-studies"
                className="hover:text-white transition"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                href="https://kandyforscale.com/pages/portfolio"
                className="hover:text-white transition"
              >
                Creative Portfolio
              </a>
            </li>
          </ul>

          {/* ICONS */}
          <div className="flex items-center gap-4 text-white">
            <Search size={18} />
            <User size={18} />
            <ShoppingBag size={18} />
          </div>

        </div>
      </div>
    </nav>
  );
}
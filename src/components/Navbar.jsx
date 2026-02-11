"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const itemsRef = useRef([]);
  const [open, setOpen] = useState(false);

  // =========================
  // FIXED SCROLL LOGIC (NO DIRECTION BUG)
  // =========================
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let isSolid = false; // 🔒 state lock

    // INITIAL: visible + transparent
    gsap.set(nav, {
      opacity: 1,
      background: "rgba(0,0,0,0)",
      backdropFilter: "blur(0px)",
      boxShadow: "none",
    });

    const onScroll = () => {
      const shouldBeSolid = window.scrollY > 30;

      if (shouldBeSolid && !isSolid) {
        isSolid = true;
        gsap.to(nav, {
          background:
            "linear-gradient(90deg, rgba(26,14,8,0.9), rgba(140,75,35,0.95), rgba(26,14,8,0.9))",
          backdropFilter: "blur(14px)",
          boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.04)",
          duration: 0.25,
          ease: "power2.out",
        });
      }

      if (!shouldBeSolid && isSolid) {
        isSolid = false;
        gsap.to(nav, {
          background: "rgba(0,0,0,0)",
          backdropFilter: "blur(0px)",
          boxShadow: "none",
          duration: 0.25,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // =========================
  // MOBILE MENU ANIMATION (UNCHANGED)
  // =========================
  useEffect(() => {
    if (!open) return;

    gsap.fromTo(
      menuRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.25, ease: "power2.out" }
    );

    gsap.fromTo(
      itemsRef.current,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.45,
        ease: "power3.out",
        delay: 0.1,
      }
    );
  }, [open]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 w-full"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative flex h-16 items-center justify-between">

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-white z-50 select-none"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* MOBILE LOGO */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 md:hidden"
            >
              <img
                src="/logo while.png"
                alt="We Are Website Designers"
                className="h-9.1 sm:h-10 max-w-[159px] sm:max-w-[120px] object-contain"
              />
            </Link>

            {/* DESKTOP LOGO */}
            <Link href="/" className="hidden md:flex items-center gap-3">
              <img
                src="/logo while.png"
                alt="We Are Website Designers"
                className="h-9 object-contain"
              />
            </Link>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex gap-8 text-sm text-white/90 font-medium">
              <li><a href="/best-sellers">Best Sellers</a></li>
              <li><a href="https://kandyforscale.com/pages/services-list">Done For You</a></li>
              <li><a href="https://kandyforscale.com/pages/case-studies">Case Studies</a></li>
              <li><a href="https://kandyforscale.com/pages/portfolio">Creative Portfolio</a></li>
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

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div
          ref={menuRef}
          className="
            fixed top-16 left-0 right-0 bottom-0
            z-40 md:hidden
            bg-[linear-gradient(180deg,#050505,#000000)]
            backdrop-blur-xl
          "
        >
          <ul className="flex flex-col items-center justify-center h-full gap-8 text-white text-xl font-medium">
            {[
              ["Best Sellers", "https://kandyforscale.com/collections/best-sellers"],
              ["Done For You", "https://kandyforscale.com/pages/services-list"],
              ["Case Studies", "https://kandyforscale.com/pages/case-studies"],
              ["Creative Portfolio", "https://kandyforscale.com/pages/portfolio"],
            ].map(([label, link], i) => (
              <li key={label} ref={(el) => (itemsRef.current[i] = el)}>
                <a
                  href={link}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#ef4444] active:scale-95 transition tracking-wide select-none"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
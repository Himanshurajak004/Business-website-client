"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CardsPage() {
  const galleries = [
    {
      title: "Video gallery",
      subtitle: "Hooks, VSLs, UGCs. You name ’em, we’ve made them.",
      items: ["/v1.jpg", "/v2.jpg", "/v3.jpg"],
      type: "video",
    },
    {
      title: "Static ad gallery",
      subtitle: "Statics that look as good as they perform.",
      items: ["/s1.jpg", "/s2.jpg", "/s3.jpg"],
      type: "static",
    },
    {
      title: "Landing gallery",
      subtitle: "Beautiful, converting, revenue generating.",
      items: ["/l1.jpg", "/l2.jpg", "/l3.jpg"],
      type: "image",
    },
    {
      title: "Email gallery",
      subtitle: "Raking in that extra revenue with eye-catching emails.",
      items: ["/e1.jpg", "/e2.jpg", "/e3.jpg"],
      type: "image",
    },
  ];

  return (
    <section className="bg-black min-h-screen py-24 sm:py-32">
      {galleries.map((gallery, index) => (
        <Gallery
          key={index}
          title={gallery.title}
          subtitle={gallery.subtitle}
          items={gallery.items}
          type={gallery.type}
        />
      ))}
    </section>
  );
}

/* ================= GALLERY ================= */

function Gallery({ title, subtitle, items, type }) {
  const sliderRef = useRef(null);
  const cardsRef = useRef([]);

  const isStatic = type === "static";

  useEffect(() => {
    const slider = sliderRef.current;

    const updateScale = () => {
      const center = slider.scrollLeft + slider.offsetWidth / 2;

      cardsRef.current.forEach((card) => {
        if (!card) return;

        const cardCenter =
          card.offsetLeft + card.offsetWidth / 2;

        const distance = Math.abs(center - cardCenter);
        const maxDistance = slider.offsetWidth / 2;

        const scale =
          1 - Math.min(distance / maxDistance, 1) * 0.15;

        gsap.to(card, {
          scale,
          opacity: scale < 0.9 ? 0.6 : 1,
          duration: 0.3,
          overwrite: true,
        });
      });
    };

    updateScale();
    slider.addEventListener("scroll", updateScale);
    window.addEventListener("resize", updateScale);

    return () => {
      slider.removeEventListener("scroll", updateScale);
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  const scroll = (dir) => {
    gsap.to(sliderRef.current, {
      scrollLeft: `+=${dir === "left" ? -240 : 240}`,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const loopItems = [...items, ...items, ...items];

  return (
    <div className="mt-24 sm:mt-32">
      {/* Heading */}
      <div className="text-center text-white mb-8 sm:mb-12 px-4">
        <h3 className="text-xl sm:text-2xl font-semibold">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-white/60 mt-2">
          {subtitle}
        </p>
      </div>

      <div className="relative max-w-[1600px] mx-auto">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="
            flex gap-6 sm:gap-10
            px-4 sm:px-16
            pb-8 sm:pb-10
            overflow-x-scroll
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {loopItems.map((src, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`
                relative overflow-hidden
                min-w-[85vw] sm:min-w-[360px] md:min-w-[420px]
                h-[360px] sm:h-[500px] md:h-[560px]
                ${
                  isStatic
                    ? "rounded-2xl sm:rounded-3xl bg-[#f1f4f6] shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
                    : "rounded-2xl sm:rounded-3xl"
                }
              `}
            >
              <img
                src={src}
                alt=""
                className={`w-full h-full ${
                  isStatic
                    ? "object-contain bg-white p-4"
                    : "object-cover"
                }`}
              />

              {/* Play overlay only for video */}
              {type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black text-xl">
                    ▶
                  </div>
                </div>
              )}
            </div>
          ))}

          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        {/* Arrows */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-4 sm:gap-6">
          <button
            onClick={() => scroll("left")}
            className="
              w-10 h-10
              rounded-full border border-white/30
              text-white hover:bg-white/10
            "
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="
              w-10 h-10
              rounded-full border border-white/30
              text-white hover:bg-white/10
            "
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
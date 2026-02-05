"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NumbersGoVroom() {
  const sectionRef = useRef(null);
  const numbersRef = useRef([]);

  useEffect(() => {
    numbersRef.current.forEach((el) => {
      const finalValue = parseInt(el.dataset.value, 10);

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: finalValue,
          duration: 2,
          ease: "power3.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            el.innerText = Number(el.innerText).toLocaleString();
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-black py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center text-4xl font-semibold text-white">
          We’re Here To Make Numbers Go Vroom
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white">
            <p className="mb-3 text-sm opacity-80">
              revenue generated for clients since 2023
            </p>
            <h3 className="text-3xl font-bold">
              $
              <span ref={(el) => (numbersRef.current[0] = el)} data-value="923009494">
                0
              </span>
            </h3>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-gradient-to-r from-sky-400 to-emerald-400 p-8 text-white">
            <p className="mb-3 text-sm opacity-80">
              record revenue from a single creative
            </p>
            <h3 className="text-3xl font-bold">
              $
              <span ref={(el) => (numbersRef.current[1] = el)} data-value="3145382">
                0
              </span>
            </h3>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-gradient-to-r from-pink-500 to-indigo-500 p-8 text-white">
            <p className="mb-3 text-sm opacity-80">
              creatives produced since 2023
            </p>
            <h3 className="text-3xl font-bold">
              <span ref={(el) => (numbersRef.current[2] = el)} data-value="281401">
                0
              </span>
              +
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
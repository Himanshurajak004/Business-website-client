"use client";

export default function TrustedBrands() {
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

  return (
    <section className="relative bg-black pt-20 pb-28">

      {/* ===== HEADING ===== */}
      <div className="mb-12 text-center text-white/80 px-5">
        <div className="flex items-center justify-center gap-6">
          <span className="h-px w-16 sm:w-24 bg-white/30" />
          <h3 className="text-xl sm:text-3xl uppercase tracking-widest">
            Join Brands That Grow
          </h3>
          <span className="h-px w-16 sm:w-24 bg-white/30" />
        </div>
      </div>

      {/* ===== GRID ===== */}
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            gap-4 sm:gap-6
          "
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              className="
                flex items-center justify-center
                h-[72px] sm:h-[90px]
                rounded-xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur
                transition
                hover:bg-white/[0.06]
              "
            >
              <img
                src={logo}
                alt="Brand logo"
                className="
                  h-9.2 sm:h-8
                  opacity-90 grayscale
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
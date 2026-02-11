"use client";

export default function OwnBrands() {
  const brands = [
    {
      image: "https://kandyforscale.com/cdn/shop/files/image_11.png?v=1746552133&width=1308",      // 👈 LEFT IMAGE
      logo: "/logo while.png",        // 👈 LEFT LOGO
      title:
        "Building the #1 silk home brand across 20+ European countries.",
      linkText: "Case study coming soon.",
    },
    {
      image: "https://kandyforscale.com/cdn/shop/files/image_88f8a38f-0bf6-4bac-b48a-964f15ab57e1.png?v=1746552133&width=1308",      // 👈 RIGHT IMAGE
      logo: "/logo while.png",        // 👈 RIGHT LOGO
      title:
        "Providing an easily accessible solution to eCom scaling.",
      linkText: "Shop our products.",
    },
  ];

  return (
    <section className="bg-black py-32 px-6">
      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Cherry on top, we built our{" "}
          <span className="text-red-500">own brands</span>
        </h2>

        <p className="text-white/60 mt-4 text-2xl leading-relaxed">
          Ones that we can grow and use to test out every single crazy idea.
          <br />
          We became our own ideal clients.
        </p>
      </div>

      {/* CARDS */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {brands.map((item, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt=""
              className="h-[360px] w-full object-cover
                         transition-transform duration-700
                         group-hover:scale-105"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t
                            from-black via-black/60 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-0 p-8">
              {/* LOGO */}
              

              <p className="text-white text-lg font-semibold leading-snug">
                {item.title}
              </p>

              <p className="mt-3 text-sm text-white/60 underline underline-offset-4">
                {item.linkText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
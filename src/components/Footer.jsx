export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ef4444] via-[#8b1c1c] to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white">
        
        {/* Top Row */}
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold">Wearewebsitedesginer</h3>
            <p className="mt-4 text-sm text-white/80">
              Boutique full-stack growth partner for eCom brands
              looking to scale to 8–9 figures.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Best Sellers</li>
              <li>Done For You</li>
              <li>Case Studies</li>
              <li>Creative Portfolio</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Performance Marketing</li>
              <li>Creative Strategy</li>
              <li>Email & Funnels</li>
              <li>Analytics & CRO</li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Let’s Talk</h4>
            <p className="mb-4 text-sm text-white/80">
              Book a 30-minute discovery call with our team.
            </p>
            <a
  href="https://calendly.com/wearewebsitedesigners/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-white/90"
>
  Book Discovery Call →
</a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-white/20" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/70 md:flex-row">
          <p>© {new Date().getFullYear()} Wearewebsitedesigner. All rights reserved.</p>
          <p></p>
        </div>
      </div>
    </footer>
  );
}

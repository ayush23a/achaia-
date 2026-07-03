import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-body-md text-body-md">
      {/* Hero is rendered by MainLayout */}

      {/* ── Featured Products Bento Grid ── */}
      <section className="py-section-gap px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="mb-12 flex items-end justify-between">
          <div className="space-y-2">
            <span className="text-secondary-fixed font-label-caps text-label-caps">IN-HOUSE</span>
            <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface">Featured Products</h2>
          </div>
          <Link to="/products" className="hidden md:flex items-center gap-2 text-on-surface-variant hover:text-secondary-fixed transition-colors">
            <span className="font-label-caps text-label-caps">ALL PRODUCTS</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 gap-4 md:gap-gutter snap-x snap-mandatory scrollbar-none -mx-6 px-6 md:mx-0 md:px-0">
          {/* Product 1 */}
          <Link to="/products/helios" className="glass-card p-6 md:p-10 flex flex-col justify-between group h-[300px] md:h-[420px] w-[80vw] max-w-[320px] md:w-auto shrink-0 md:shrink snap-start">
            <div>
              <span className="font-label-caps text-[10px] text-secondary-fixed mb-4 block">AI PLATFORM</span>
              <h3 className="font-headline-lg text-2xl md:text-3xl mb-2 md:mb-4 text-on-surface">Helios</h3>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">AI Prompts From Across the Galaxy.</p>
            </div>
            <div className="flex items-center justify-between mt-4 md:mt-8">
              <span className="material-symbols-outlined text-4xl text-white/20 group-hover:text-secondary-fixed transition-colors">lightbulb</span>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary-fixed group-hover:text-black transition-all">
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-45">
                  north_east
                  </span>
              </div>
            </div>
          </Link>

          {/* Product 2 */}
          <Link to="/products/sendmyform" className="glass-card p-6 md:p-10 flex flex-col justify-between group h-[300px] md:h-[420px] w-[80vw] max-w-[320px] md:w-auto shrink-0 md:shrink snap-start">
            <div>
              <span className="font-label-caps text-[10px] text-secondary-fixed mb-4 block">SERVICE</span>
              <h3 className="font-headline-lg text-2xl md:text-3xl mb-2 md:mb-4 text-on-surface">SendMyForm</h3>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">A serverless platform to handle form submissions.</p>
            </div>
            <div className="flex items-center justify-between mt-4 md:mt-8">
              <span className="material-symbols-outlined text-4xl text-white/20 group-hover:text-secondary-fixed transition-colors">mail</span>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary-fixed group-hover:text-black transition-all">
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-45">
                  north_east
                  </span>
              </div>
            </div>
          </Link>

          {/* Product 3 */}
          <Link to="/products/holdon" className="glass-card p-6 md:p-10 flex flex-col justify-between group h-[300px] md:h-[420px] w-[80vw] max-w-[320px] md:w-auto shrink-0 md:shrink snap-start">
            <div>
              <span className="font-label-caps text-[10px] text-secondary-fixed mb-4 block">PRODUCT</span>
              <h3 className="font-headline-lg text-2xl md:text-3xl mb-2 md:mb-4 text-on-surface">Hold On</h3>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">An app for anti-theft alarm for you phone.</p>
            </div>
            <div className="flex items-center justify-between mt-4 md:mt-8">
              <span className="material-symbols-outlined text-4xl text-white/20 group-hover:text-secondary-fixed transition-colors">security</span>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary-fixed group-hover:text-black transition-all">
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-45">
                  north_east
                  </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Selected Work Editorial ── */}
      <section className="py-section-gap bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-margin-desktop">
          <div className="mb-24 text-center max-w-2xl mx-auto space-y-4">
            <span className="text-secondary-fixed font-label-caps text-label-caps">PORTFOLIO</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Selected Work</h2>
            <p className="text-on-surface-variant">
              We craft high-performance digital experiences that help ambitious businesses
              strengthen their online presence, attract customers, and accelerate growth.
            </p>
          </div>

          <div className="space-y-40">
            {/* Project 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center reveal-on-scroll">
              <div className="md:col-span-7 aspect-[4/3] md:aspect-video relative overflow-hidden rounded-xl border border-white/10">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  alt="Gaurav Synthetics website and Ramraj Cotton showroom project"
                  src="/work-assets/gauravsyn.webp"
                />
              </div>

              <div className="md:col-span-5 md:pl-12">
                <span className="text-on-surface-variant font-label-caps text-xs">
                  TEXTILE / 2026
                </span>

                <h3 className="font-headline-lg text-4xl mt-4 mb-6 text-on-surface">
                  Gaurav Synthetics
                </h3>

                <p className="text-on-surface-variant mb-8">
                  Designed and developed a conversion-focused digital platform for a legacy textile business,
                  helping Gaurav Synthetics expand its online presence, strengthen discoverability, and
                  generate more qualified wholesale leads across web and marketplace channels.
                </p>

                <Link
                  to="/work/gaurav-synthetics"
                  className="group flex items-center gap-4 text-secondary-fixed font-bold"
                >
                  <span className="font-label-caps">READ CASE STUDY</span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center reveal-on-scroll">
              <div className="md:col-span-5 md:pr-12 order-2 md:order-1">
                <span className="text-on-surface-variant font-label-caps text-xs">
                  PR / BRANDING / 2025
                </span>

                <h3 className="font-headline-lg text-4xl mt-4 mb-6 text-on-surface">
                  Fox Wing Media
                </h3>

                <p className="text-on-surface-variant mb-8">
                  Designed and developed a conversion-focused website for Fox Wing Media to
                  strengthen brand authority, improve service clarity, and support inbound lead
                  generation through a polished PR and marketing presence.
                </p>

                <Link to="/work/fox-wing-media" className="group flex items-center gap-4 text-secondary-fixed font-bold">
                  <span className="font-label-caps">READ CASE STUDY</span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                    arrow_right_alt
                  </span>
                </Link>
              </div>

              <div className="md:col-span-7 aspect-[4/3] md:aspect-video relative overflow-hidden rounded-xl border border-white/10 order-1 md:order-2">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  alt="Fox Wing Media website and branding project"
                  src="/work-assets/foxwing.webp"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Capabilities Grid ── */}
      <section className="py-section-gap px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface">Capabilities</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12">
          {[
            { icon: "auto_awesome", label: "AGENTIC AI" },
            { icon: "cloud", label: "CLOUD & DEVOPS" },
            { icon: "code", label: "WEB DEVELOPMENT" },
            { icon: "apps", label: "APP DEVELOPMENT" },
            { icon: "search", label: "SEO" },
            { icon: "design_services", label: "UI/UX DESIGN" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-secondary-fixed transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary-fixed">{icon}</span>
              </div>
              <span className="font-label-caps text-xs tracking-widest text-on-surface-variant">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Achaia Value Cards ── */}
      <section className="py-section-gap px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-3">
            <span className="text-secondary-fixed font-label-caps text-label-caps">
              OUR VALUES
            </span>
            <h4 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl leading-none text-on-surface max-w-xs">
              Why Achaia Works?
            </h4>
            <p className="text-on-surface-variant text-base lg:text-lg leading-relaxed max-w-sm">
              Beyond code, we build partnerships rooted in technical excellence and absolute reliability.
            </p>
          </div>

          {[
            {
              num: "01",
              title: "Built to Convert",
              desc: "Clear layouts, stronger calls to action, and user journeys designed to turn visitors into leads.",
            },
            {
              num: "02",
              title: "Engineered to Scale",
              desc: "Modular architecture that grows with the business without turning into a rebuild later.",
            },
            {
              num: "03",
              title: "Performance First",
              desc: "Fast-loading, clean, and responsive experiences that feel premium on every device.",
            },
          ].map(({ num, title, desc }) => (
            <div
              key={num}
              className="lg:col-span-3 glass-card p-8 rounded-2xl"
            >
              <div className="space-y-4">
                <span className="text-secondary-fixed font-bold text-lg lg:text-xl">
                  {num}
                </span>
                <h5 className="font-semibold text-lg lg:text-xl text-on-surface">
                  {title}
                </h5>
              </div>
              <p className="text-sm lg:text-base text-on-surface-variant leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="py-section-gap">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="glass-card p-10 sm:p-16 md:p-24 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-secondary-fixed/10 blur-[120px] pointer-events-none" />
            <div className="relative z-10 space-y-8">
              <h2 className="font-display-xl text-headline-lg md:text-display-xl text-on-surface">Ready to start a conversation?</h2>
              <p className="text-on-surface-variant max-w-lg mx-auto">Let's discuss how we can engineer your next digital breakthrough.</p>
              <Link to="/contact" className="inline-block bg-secondary-fixed text-on-secondary-fixed px-12 py-5 rounded-full font-label-caps text-label-caps font-extrabold glow-hover hover:scale-105 transition-all">
                Work with Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

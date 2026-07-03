import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import aboutHeroImg from "/team-assets/about-hero.png";
import teamShowcaseImg from "/team-assets/team.webp";
import manishPhoto from "/team-assets/manish.webp";
import gurujeetPhoto from "/team-assets/gurujeet.webp";
import ayushPhoto from "/team-assets/ayush.webp";
import sushantPhoto from "/team-assets/sushant.webp";
import "./AboutUs.css";

const AboutUs = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [expanded, setExpanded] = useState({ gurujeet: false, manish: false, ayush: false, sushant: false });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const timelineSteps = [
    {
      title: "Research",
      desc: "Understanding user needs and behaviors through deep qualitative and quantitative analysis.",
      icon: "search",
    },
    {
      title: "Strategy",
      desc: "Defining the product direction, features backlog, market positioning, and tech stack.",
      icon: "insights",
    },
    {
      title: "Build",
      desc: "Engineering high-performance, scalable software using modern cloud and AI architectures.",
      icon: "code",
    },
    {
      title: "Optimize",
      desc: "Continuous refinement and feature expansion based on real-world user metrics and feedback.",
      icon: "trending_up",
    },
  ];

  const teamMembers = [
    {
      id: "manish",
      name: "Manish Kumar",
      role: "CEO • Client Outreach Head",
      bio: "Leads business, client work, finances, and development. Likes turning rough ideas into something real and useful.",
      linkedin: "https://www.linkedin.com/in/manish-k-06a2003b1/",
      x: "https://x.com/hitwicket_hogya",
      photo: manishPhoto,
      position: "center",
    },
    {
      id: "gurujeet",
      name: "Gurujeet Kumar",
      role: "CFO • COO",
      bio: "Works close to market trends, SEO, operations, and finances. Tries to keep product decisions grounded in what users actually need.",
      linkedin: "https://www.linkedin.com/in/imgurujeet/",
      x: "https://x.com/imgurujeet",
      photo: gurujeetPhoto,
      position: "left",
    },
    {
      id: "ayush",
      name: "Ayush Aman",
      role: "CTO • Technical Operations Head",
      bio: "Works on engineering, AI, DevOps, and architecture. Likes building things that feel solid, fast, and dependable.",
      linkedin: "https://www.linkedin.com/in/ayushaman24/",
      x: "https://x.com/aman_ayush4",
      photo: ayushPhoto,
      position: "right",
    },
    {
      id: "sushant",
      name: "Sushant Kumar",
      role: "Marketing Head",
      bio: "Works on marketing, outreach, and business growth.",
      linkedin: "https://www.linkedin.com/in/sushant-kumar-9a85ab251/",
      x: "https://x.com/Sushant18857491",
      photo: sushantPhoto,
      position: "right",
    },
  ];

  return (
    <div className="about-page bg-background text-on-surface min-h-screen">
      {/* SECTION 1 — HERO */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center py-24 px-6 md:px-margin-desktop text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.95)), url(${aboutHeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto space-y-8 flex flex-col items-center">
          <span className="font-label-caps text-label-caps text-secondary-fixed tracking-[0.2em] uppercase">
            ABOUT ACHAIA LABS
          </span>
          <h1 className="font-display-xl text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-on-surface font-bold tracking-tight leading-tight">
            We build products around <span className="text-secondary-fixed">people</span>, not trends.
          </h1>
          <p className="font-subheading text-base sm:text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed mx-auto">
            Most digital products fail because they solve imagined problems.
            <br />
            <br />
            At Achaia Labs, we start with real users, real business challenges, and real market demand. By combining engineering, AI, product strategy, and customer insight, we create solutions that deliver measurable impact—not just impressive features.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
            <button
              onClick={() => document.getElementById("team-members").scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-full font-label-caps text-label-caps font-bold hover:scale-105 glow-hover transition-all text-center"
            >
              Meet The Team
            </button>
            <Link
              to="/products"
              className="w-full sm:w-auto border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-full font-label-caps text-label-caps font-bold transition-all text-center"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — OUR STORY */}
      <section className="relative py-section-gap px-6 md:px-margin-desktop max-w-7xl mx-auto border-t border-white/5">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(circle at 100% 50%, rgba(131, 66, 251, 0.03) 0%, transparent 70%)" }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column (Content) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="font-label-caps text-label-caps text-tertiary-fixed tracking-[0.2em] uppercase">
              OUR JOURNEY
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-on-surface font-semibold tracking-tight">
              Started with a <span className="text-secondary-fixed">simple belief</span>.
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>We noticed a recurring problem.</p>
              <p>
                Businesses often invest in technology without fully understanding the people they're building for.
              </p>
              <p className="font-semibold text-white pl-4 border-l-2 border-secondary-fixed">
                Features become bloated.
                <br />
                Products lose focus.
                <br />
                Growth becomes unpredictable.
              </p>
              <p>Achaia Labs was created to bridge that gap.</p>
              <p className="pt-4 font-semibold text-white">Our mission is simple:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Understand people deeply.</li>
                <li>Build intentionally.</li>
                <li>Scale intelligently.</li>
              </ul>
              <p className="pt-4 text-white italic">"Will this genuinely help the user?"</p>
            </div>
          </div>

          {/* Right Column (Interactive Timeline) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 mt-12 lg:mt-0">
            <div className="relative pl-8 md:pl-12 border-l border-white/10 space-y-8">
              {/* Animated Progress Connector */}
              <div
                className="absolute left-0 top-0 w-[2px] bg-secondary-fixed transition-all duration-500 origin-top"
                style={{ height: `${((activeStep + 1) / timelineSteps.length) * 100}%` }}
              />

              {timelineSteps.map((step, idx) => {
                const isActive = idx <= activeStep;
                const isCurrent = idx === activeStep;
                return (
                  <div
                    key={step.title}
                    onMouseEnter={() => setActiveStep(idx)}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      isCurrent ? "scale-[1.02] translate-x-2" : "opacity-60 hover:opacity-90"
                    }`}
                  >
                    {/* Circle Node */}
                    <div
                      className={`absolute -left-[37px] md:-left-[53px] top-1 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        isActive
                          ? "bg-black border-secondary-fixed scale-125 shadow-[0_0_10px_rgba(160,214,0,0.5)]"
                          : "bg-surface border-white/20"
                      }`}
                    >
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />}
                    </div>

                    <div
                      className={`glass-card p-6 rounded-2xl border transition-all duration-300 ${
                        isCurrent
                          ? "border-secondary-fixed/30 bg-surface-container-highest shadow-[0_0_20px_rgba(160,214,0,0.05)]"
                          : "border-white/5 bg-surface/30"
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <span
                          className={`material-symbols-outlined text-2xl ${
                            isCurrent ? "text-secondary-fixed" : "text-white/45"
                          }`}
                        >
                          {step.icon}
                        </span>
                        <h3 className="font-semibold text-lg text-white">{step.title}</h3>
                      </div>
                      <p className="text-sm text-on-surface-variant leading-relaxed pl-10">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — TEAM PHOTO SHOWCASE */}
      <section className="relative py-section-gap px-6 md:px-margin-desktop border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <span className="font-label-caps text-label-caps text-secondary-fixed tracking-[0.2em] uppercase">
              THE PEOPLE BEHIND ACHAIA LABS
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-on-surface font-semibold tracking-tight">
              Different minds. <span className="text-secondary-fixed">One vision.</span>
            </h2>
          </div>

          {/* Liquid Glass Showcase Frame */}
          <div className="relative group rounded-3xl overflow-hidden border border-white/10 bg-surface/30 backdrop-blur-xl p-4 md:p-6 shadow-[0_30px_100px_rgba(0,0,0,0.8)] max-w-3xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary-fixed to-tertiary-fixed rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />

            {/* Ambient interior glows */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-secondary-fixed/5 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-tertiary-fixed/5 rounded-full filter blur-3xl" />

            <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/5 bg-black/40">
              <img
                src={teamShowcaseImg}
                alt="Achaia Labs Team Collaboration Showcase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 md:p-8 text-left">
                <div>
                  <p className="font-label-caps text-[10px] text-secondary-fixed tracking-[0.2em]">
                    CHAOS TO ORDER
                  </p>
                  <h4 className="text-white text-xl font-bold mt-1">Focused execution. Elite builds.</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-6 text-on-surface-variant leading-relaxed text-lg pt-6">
            <p>We're not a large agency hidden behind layers of management.</p>
            <p className="font-semibold text-white text-xl">
              We're a focused team of builders, strategists, and operators who work directly on every product.
            </p>
            <p>
              When you work with Achaia Labs, you're working with the people making decisions, writing code, solving
              problems, and driving results.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4 font-label-caps text-xs text-secondary-fixed">
              <span>NO MIDDLEMEN</span>
              <span className="text-white/20">•</span>
              <span>NO UNNECESSARY COMPLEXITY</span>
              <span className="text-white/20">•</span>
              <span>DIRECT OWNERSHIP</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — TEAM MEMBERS */}
      <section
        id="team-members"
        className="relative py-section-gap px-6 md:px-margin-desktop border-t border-white/5 bg-black/40 overflow-hidden"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(160,214,0,0.02) 0%, rgba(131,66,251,0.02) 50%, transparent 75%)",
            filter: "blur(100px)",
          }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="font-label-caps text-label-caps text-secondary-fixed tracking-[0.2em] uppercase">
              THE BUILDERS
            </span>
            <h2 className="font-display-xl text-4xl sm:text-5xl text-on-surface font-bold tracking-tight">
              Meet the <span className="text-secondary-fixed">Founding Team</span>
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg">
              We are hands-on builders who believe in clean engineering, elegant strategy, and direct
              partnerships.
            </p>
          </div>

          {/* Responsive Equal-Width Card Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 max-w-7xl mx-auto items-stretch">
            {teamMembers.map((member) => {
              const isExpanded = expanded[member.id];
              return (
                <div
                  key={member.id}
                  className={`w-full transition-all duration-500 ease-out ${isExpanded ? "z-30" : ""}`}
                >
                  <div
                    className={`glass-card team-member-card flex flex-col justify-between p-8 rounded-3xl border transition-all duration-350 min-h-[460px] h-full ${
                      isExpanded
                        ? "border-secondary-fixed bg-surface-container-highest shadow-[0_0_35px_rgba(160,214,0,0.15)] scale-[1.03]"
                        : "border-white/10 hover:border-secondary-fixed/50 hover:shadow-[0_0_30px_rgba(160,214,0,0.1)] hover:-translate-y-2 bg-surface/40 backdrop-blur-xl"
                    }`}
                  >
                    {/* Circular Member Photo / Placeholder */}
                    <div className="relative mb-6">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-secondary-fixed/30 bg-surface-container-high flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(160,214,0,0.1)] transition-transform duration-300 group-hover:scale-105">
                        {member.photo ? (
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="material-symbols-outlined text-4xl text-white/30">
                            person
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="space-y-4 text-center">
                      <div>
                        <h3 className="text-white text-2xl font-bold tracking-tight">{member.name}</h3>
                        <p className="text-secondary-fixed text-sm font-semibold tracking-wide mt-1 uppercase">
                          {member.role}
                        </p>
                      </div>

                      {/* Bio with 2-line clamp and read more */}
                      <div className="relative">
                        <div
                          className={`text-on-surface-variant text-sm leading-relaxed transition-all duration-300 ${
                            isExpanded ? "opacity-100" : "bio-clamp opacity-80"
                          }`}
                        >
                          {member.bio}
                        </div>
                        <button
                          onClick={() => toggleExpand(member.id)}
                          className="text-secondary-fixed text-xs font-bold hover:text-white mt-3 inline-flex items-center gap-1 transition-colors mx-auto"
                        >
                          {isExpanded ? "Show Less" : "Read More"}
                          <span className="material-symbols-outlined text-xs">
                            {isExpanded ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                          </span>
                        </button>
                      </div>

                      {/* Expertise Tags */}
                      {member.tags && member.tags.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-2 pt-2">
                          {member.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] bg-white/5 text-white/70 border border-white/5 px-2.5 py-1 rounded-full font-label-caps"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Social links */}
                    <div className="flex justify-center gap-6 pt-8 border-t border-white/5 mt-8">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-secondary-fixed transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href={member.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-secondary-fixed transition-colors"
                        aria-label={`${member.name} X`}
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHAT MAKES US DIFFERENT */}
      <section className="relative py-section-gap px-6 md:px-margin-desktop max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-label-caps text-label-caps text-secondary-fixed tracking-[0.2em] uppercase">
            WHY CLIENTS CHOOSE US
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-on-surface font-semibold tracking-tight">
            We don't just build products. <span className="text-secondary-fixed">We build momentum.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {[
            {
              title: "Customer Focus",
              desc: "Every decision begins with understanding user behavior and market realities.",
              icon: "group",
            },
            {
              title: "Technical Excellence",
              desc: "Scalable architecture, performance, and maintainability are built into every solution.",
              icon: "developer_board",
            },
            {
              title: "Business Thinking",
              desc: "Technology only matters when it solves meaningful business problems.",
              icon: "monetization_on",
            },
            {
              title: "Long-Term Partnerships",
              desc: "We're invested in outcomes, not just deliverables.",
              icon: "handshake",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="glass-card p-8 rounded-3xl border border-white/5 bg-surface/30 backdrop-blur-xl flex flex-col justify-between group hover:border-secondary-fixed/30 hover:shadow-[0_0_25px_rgba(160,214,0,0.05)] transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-secondary-fixed group-hover:text-black transition-colors">
                  <span className="material-symbols-outlined text-white/50 group-hover:text-black transition-colors">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-white text-lg font-bold tracking-tight">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — FUTURE VISION */}
      <section className="relative py-section-gap px-6 md:px-margin-desktop max-w-5xl mx-auto border-t border-white/5 overflow-hidden rounded-3xl mb-16 bg-surface/20 border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
        {/* Animated dot grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-fixed/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="relative text-center max-w-3xl mx-auto space-y-8 py-8 px-4 z-10">
          <span className="font-label-caps text-label-caps text-secondary-fixed tracking-[0.2em] uppercase">
            LOOKING AHEAD
          </span>
          <h2 className="font-display-xl text-3xl sm:text-4xl md:text-5xl text-on-surface font-semibold tracking-tight leading-tight">
            The next generation of products will be <span className="text-secondary-fixed">intelligent by default</span>.
          </h2>
          <p className="font-subheading text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            As technology evolves, our mission remains unchanged: Build solutions that create measurable value.
            <br />
            <br />
            By combining AI, engineering excellence, and customer understanding, we help businesses move faster,
            adapt quicker, and stay ahead of change.
          </p>
          <div className="pt-6">
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-4 rounded-full font-label-caps text-label-caps font-bold hover:bg-secondary-fixed hover:text-black transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

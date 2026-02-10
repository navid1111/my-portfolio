/**
 * HeroSection Component
 */

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center">
 

      {/* Planet Decoration */}
      <div className="absolute -top-10 -right-20 w-[300px] h-[300px] pointer-events-none hidden md:block">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[60px] rounded-[50%] -rotate-[25deg] z-10 planet-ring"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full planet-sphere"
        ></div>
      </div>

      {/* Main Heading */}
      <div className="relative z-10 mt-12 md:mt-0">
        <h1 className="flex flex-col text-[12vw] md:text-[7rem] leading-[0.85] font-black tracking-tight font-stretch uppercase">
          <span className="hero-text">Navid Kamal</span>
          <span className="hero-text-outline ml-0 md:ml-12"></span>
          <span className="hero-text ml-0 md:ml-24">Software Engineer</span>
        </h1>
      </div>

      {/* Description Box */}
      <div className="mt-12 border border-line bg-bg p-6 max-w-xl relative after:content-[''] after:absolute after:-bottom-2 after:-right-2 after:w-full after:h-full after:border after:border-line after:z-[-1]">
        <div className="text-xs font-mono mb-2 uppercase opacity-70">Narrative Protocol //</div>
        <p className="text-lg md:text-xl font-bold leading-relaxed">
          Software engineer specializing in full-stack development, AI integration, and
          database tooling. Building custom AI agent integrations and dynamic reporting
          systems with React, Python, and modern web technologies.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

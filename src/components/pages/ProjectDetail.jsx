/**
 * ProjectDetail Component
 * Case study page for individual projects — exact match of the HTML reference
 */

import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../../constants/portfolio';

const ProjectDetailSidebar = ({ detail }) => (
  <aside className="hidden lg:block sticky top-8 h-fit">
    <div className="bordered-box p-6 flex flex-col gap-8">
      <Link
        to="/"
        className="flex items-center gap-2 font-bold hover:text-line transition-colors"
      >
        <i className="ph-bold ph-arrow-left"></i> BACK_TO_HOME
      </Link>

      <div>
        <div className="text-xs tracking-widest font-mono mb-4 opacity-70">[ PROJECT_NAV ]</div>
        <nav className="flex flex-col gap-2">
          <a href="#overview" className="font-bold text-sm uppercase hover:text-line">01 Overview</a>
          <a href="#visuals" className="font-bold text-sm uppercase hover:text-line">02 Visuals</a>
          <a href="#features" className="font-bold text-sm uppercase hover:text-line">03 Features</a>
          <a href="#development" className="font-bold text-sm uppercase hover:text-line">04 Development</a>
        </nav>
      </div>

      <div className="border-t border-line/20 pt-6">
        <div className="text-xs tracking-widest font-mono mb-2 opacity-70">DATE_RANGE</div>
        <div className="font-bold whitespace-pre-line">{detail.dateRange}</div>
      </div>

      <div className="border-t border-line/20 pt-6">
        <div className="text-xs tracking-widest font-mono mb-2 opacity-70">STATUS</div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="font-bold text-xs">{detail.status}</span>
        </div>
      </div>
    </div>
  </aside>
);

const OverviewSection = ({ project, detail }) => (
  <section id="overview" className="relative pt-12">
    <div className="flex flex-col gap-4 mb-8">
      <span className="font-mono text-sm bg-line text-bg px-3 py-1 w-fit font-bold">
        {detail.caseStudyLabel}
      </span>
      <h1 className="text-[10vw] md:text-[6rem] leading-[0.85] font-black tracking-tight font-stretch uppercase hero-text">
        {project.title.split(' ').map((word, i) => (
          <span key={i}>
            {word}
            {i < project.title.split(' ').length - 1 && <br />}
          </span>
        ))}
      </h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div className="md:col-span-2 bordered-box p-8">
        <div className="text-xs font-mono mb-4 uppercase opacity-70">Project Overview //</div>
        <p className="text-xl font-bold leading-relaxed mb-6">{detail.overview}</p>
        <div className="flex gap-4">
          {detail.detailLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="font-bold border-b-2 border-line text-lg hover:text-line transition-colors"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
      <div className="bordered-box p-8 bg-accent/30">
        <div className="text-xs font-mono mb-4 uppercase opacity-70">Tech Stack //</div>
        <div className="flex flex-wrap gap-2">
          {detail.fullTechStack.map((tech, i) => (
            <span key={i} className="tech-pill">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const VisualsSection = ({ images }) => (
  <section id="visuals" className="scroll-mt-12">
    <header className="flex justify-between items-end border-b-2 border-line pb-2 mb-10">
      <h2 className="text-4xl font-black font-stretch uppercase">Visual_Assets</h2>
      <span className="font-mono text-sm">CAPTURE_LOG</span>
    </header>

    <div className="grid grid-cols-1 gap-12">
      {/* First image full width */}
      {images[0] && (
        <div className={`screenshot-frame ${images[0].aspect} relative group ${images[0].cursor || ''}`}>
          <div
            className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
            style={{ backgroundImage: `url('${images[0].url}')` }}
          ></div>
          <div
            className={`absolute ${
              images[0].labelPosition === 'top-left' ? 'top-4 left-4' : 'bottom-4 right-4'
            } ${images[0].labelPosition === 'top-left' ? 'bg-line text-bg' : 'bg-text text-bg'} px-4 py-2 font-black text-xs`}
          >
            {images[0].label}
          </div>
        </div>
      )}

      {/* Remaining images in grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.slice(1).map((img, i) => (
            <div key={i} className={`screenshot-frame ${img.aspect} relative group`}>
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: `url('${img.url}')` }}
              ></div>
              <div
                className={`absolute ${
                  img.labelPosition === 'top-left' ? 'top-4 left-4 bg-line text-bg' : 'bottom-4 right-4 bg-text text-bg'
                } px-4 py-2 font-black text-xs`}
              >
                {img.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
);

const FeaturesSection = ({ features }) => (
  <section id="features" className="scroll-mt-12">
    <header className="flex justify-between items-end border-b-2 border-line pb-2 mb-10">
      <h2 className="text-4xl font-black font-stretch uppercase">Key_Functions</h2>
      <span className="font-mono text-sm">MODULE_EXTRACT</span>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, i) => (
        <div key={i} className="bordered-box p-6 hover:bg-accent transition-colors">
          <div className="text-4xl mb-4 font-black text-line">{feature.number}</div>
          <h3 className="text-xl font-black uppercase mb-3">{feature.title}</h3>
          <p className="text-sm leading-relaxed opacity-80">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const DevelopmentSection = ({ detail }) => (
  <section id="development" className="scroll-mt-12">
    <header className="flex justify-between items-end border-b-2 border-line pb-2 mb-10">
      <h2 className="text-4xl font-black font-stretch uppercase">Dev_History</h2>
      <span className="font-mono text-sm">ITERATION_LOG</span>
    </header>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Timeline */}
      <div className="relative pl-6 border-l-2 border-line/30 space-y-10">
        {detail.timeline.map((phase, i) => (
          <div key={i} className="relative">
            <div className="timeline-dot"></div>
            <span className="font-mono text-[10px] opacity-60">{phase.phase}</span>
            <h4 className="font-black uppercase text-lg mt-1">{phase.title}</h4>
            <p className="text-sm mt-2 opacity-80">{phase.description}</p>
          </div>
        ))}
      </div>

      {/* Problem / Solution */}
      <div className="flex flex-col gap-6">
        <div className="bg-text text-bg p-8 relative">
          <i className="ph-bold ph-warning-circle text-2xl absolute top-4 right-4 opacity-30"></i>
          <h4 className="text-xs font-mono mb-4 uppercase text-accent">Problem_Statement</h4>
          <p className="text-lg font-bold leading-snug">{detail.problemStatement}</p>
          <div className="mt-6 pt-6 border-t border-bg/20">
            <h4 className="text-xs font-mono mb-4 uppercase text-accent">Implemented_Solution</h4>
            <p className="text-sm opacity-90">{detail.solution}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProjectFooter = ({ nextProject }) => (
  <footer className="border-t-2 border-line pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="flex flex-col">
      <span className="font-mono text-xs opacity-60">NEXT_PROJECT</span>
      <Link
        to={`/project/${nextProject.slug}`}
        className="text-3xl font-black uppercase hover:text-line"
      >
        {nextProject.title} →
      </Link>
    </div>
    <div className="flex gap-4">
      <a
        href="#"
        className="w-12 h-12 border-2 border-line flex items-center justify-center hover:bg-text hover:text-bg transition-all"
      >
        <i className="ph-bold ph-share-network text-xl"></i>
      </a>
      <a
        href="#overview"
        className="w-12 h-12 border-2 border-line flex items-center justify-center hover:bg-text hover:text-bg transition-all"
      >
        <i className="ph-bold ph-arrow-up text-xl"></i>
      </a>
    </div>
  </footer>
);

const MobileNavDetail = () => (
  <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-bg border-t-2 border-line p-4 flex justify-around z-50">
    <Link to="/" className="flex flex-col items-center gap-1 text-xs font-bold uppercase">
      <i className="ph-bold ph-house text-xl"></i> Home
    </Link>
    <a href="#overview" className="flex flex-col items-center gap-1 text-xs font-bold uppercase">
      <i className="ph-bold ph-info text-xl"></i> Info
    </a>
    <a href="#visuals" className="flex flex-col items-center gap-1 text-xs font-bold uppercase">
      <i className="ph-bold ph-image text-xl"></i> Media
    </a>
    <a href="#development" className="flex flex-col items-center gap-1 text-xs font-bold uppercase text-line">
      <i className="ph-bold ph-wrench text-xl"></i> Dev
    </a>
  </nav>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project || !project.detail) {
    return (
      <div className="relative z-10 max-w-[1700px] mx-auto p-6 md:p-8 min-h-screen flex items-center justify-center">
        <div className="bordered-box p-12 text-center">
          <h1 className="text-4xl font-black uppercase mb-4">404</h1>
          <p className="font-mono mb-6">PROJECT_NOT_FOUND</p>
          <Link to="/" className="font-bold border-b-2 border-line hover:text-line transition-colors">
            BACK_TO_HOME ↗
          </Link>
        </div>
      </div>
    );
  }

  const { detail } = project;

  return (
    <>
      <main className="relative z-10 max-w-[1700px] mx-auto p-6 md:p-8 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start min-h-screen">
        <ProjectDetailSidebar detail={detail} />

        <div className="flex flex-col gap-20 pb-20">
          <OverviewSection project={project} detail={detail} />
          {detail.images && detail.images.length > 0 && (
            <VisualsSection images={detail.images} />
          )}
          <FeaturesSection features={detail.features} />
          <DevelopmentSection detail={detail} />
          <ProjectFooter nextProject={detail.nextProject} />
        </div>
      </main>

      <MobileNavDetail />
    </>
  );
};

export default ProjectDetail;

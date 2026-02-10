/**
 * ProjectsSection Component
 */

import { Link } from 'react-router-dom';
import { PROJECTS } from '../../constants/portfolio';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.slug}`} className="block">
    <article className="interactive-card border-2 border-line bg-bg grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr]">
            <div className="bg-line text-bg flex items-center justify-center py-4">
        <span className="vertical-text font-disp font-black text-2xl md:text-3xl">
          {project.label}
        </span>
      </div>
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
          <h3 className="text-3xl md:text-4xl font-black uppercase">{project.title}</h3>
          <div className="font-mono text-xs border border-text px-2 py-1">{project.year}</div>
        </div>
        <p className="text-lg mb-6 max-w-2xl leading-relaxed opacity-90">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.links.map((link, index) => (
            <span
              key={index}
              className="font-bold border-b-2 border-line hover:text-line transition-colors"
            >
              {link.text}
            </span>
          ))}
        </div>
      </div>
    </article>
    </Link>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-12">
      <header className="flex justify-between items-end border-b-2 border-line pb-2 mb-10">
        <h2 className="text-4xl md:text-5xl font-disp font-black font-stretch uppercase">
          Selected_Work
        </h2>
        <span className="font-mono text-sm hidden md:block">INDEX_01</span>
      </header>

      <div className="flex flex-col gap-10">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

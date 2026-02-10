/**
 * ExperienceSection Component
 */

import { EXPERIENCES } from '../../constants/portfolio';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="relative">
      <div
        className={`absolute -left-[25px] top-0 w-4 h-4 border-2 ${
          experience.active
            ? 'bg-line border-bg'
            : 'bg-bg border-line'
        }`}
      ></div>
      <div className="bordered-box p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
          <h3 className="text-2xl font-black uppercase">{experience.title}</h3>
          <span
            className={`font-mono text-sm px-3 py-1 font-bold ${
              experience.active
                ? 'bg-accent'
                : 'bg-gray-200 border border-text'
            }`}
          >
            {experience.period}
          </span>
        </div>
        <h4 className="text-lg font-bold text-line mb-4 font-mono">{experience.company}</h4>
        <ul className="list-square ml-4 space-y-2 marker:text-line">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="pl-2">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-12">
      <header className="flex justify-between items-end border-b-2 border-line pb-2 mb-10">
        <h2 className="text-4xl md:text-5xl font-disp font-black font-stretch uppercase">
          Work_Log
        </h2>
        <span className="font-mono text-sm hidden md:block">INDEX_02</span>
      </header>

      <div className="relative pl-4 border-l-2 border-line space-y-12">
        {EXPERIENCES.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

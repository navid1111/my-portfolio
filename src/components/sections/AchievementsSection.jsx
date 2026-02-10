/**
 * AchievementsSection Component
 */

import { ACHIEVEMENTS } from '../../constants/portfolio';

const AchievementCard = ({ achievement }) => {
  return (
    <div className={`${achievement.filled ? 'bordered-box-filled text-text' : 'bordered-box'} p-6`}>
      <i
        className={`ph-bold ${achievement.icon} text-4xl mb-4 block ${
          achievement.filled ? '' : 'text-line'
        }`}
      ></i>
      <h3 className="text-xl font-black uppercase mb-2">{achievement.title}</h3>
      <p className="font-mono text-sm opacity-80 mb-4">{achievement.date}</p>
      <p className={`text-sm ${achievement.filled ? 'font-bold' : ''}`}>
        {achievement.description}
      </p>
    </div>
  );
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="scroll-mt-12">
      <header className="flex justify-between items-end border-b-2 border-line pb-2 mb-10">
        <h2 className="text-4xl md:text-5xl font-disp font-black font-stretch uppercase">
          Achievements
        </h2>
        <span className="font-mono text-sm hidden md:block">INDEX_03</span>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;

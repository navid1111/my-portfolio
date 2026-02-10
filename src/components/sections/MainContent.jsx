/**
 * MainContent Component
 * Orchestrates all main content sections
 */

import HeroSection from './HeroSection';
import ProfileSection from './ProfileSection';
import ProjectsSection from './ProjectsSection';
import ExperienceSection from './ExperienceSection';
import AchievementsSection from './AchievementsSection';

const MainContent = () => {
  return (
    <div className="flex flex-col gap-24 pt-4 pb-20">
      <HeroSection />
      <ProfileSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
    </div>
  );
};

export default MainContent;

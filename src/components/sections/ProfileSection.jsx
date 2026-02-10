/**
 * ProfileSection Component
 */

import { PROFILE } from '../../constants/portfolio';

const SocialLink = ({ icon, href }) => (
  <a
    href={href}
    className="w-10 h-10 border-2 border-line flex items-center justify-center hover:bg-text hover:text-bg hover:border-text transition-all"
  >
    <i className={`ph-bold ${icon} text-xl`}></i>
  </a>
);

const ProfileSection = () => {
  return (
    <section id="profile" className="scroll-mt-12">
      <header className="flex justify-between items-end border-b-2 border-line pb-2 mb-10">
        <h2 className="text-4xl md:text-5xl font-disp font-black font-stretch uppercase">
          Profile_Data
        </h2>
        <span className="font-mono text-sm hidden md:block">INDEX_00</span>
      </header>

      <div className="bordered-box p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
          {/* Avatar Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-[180px] h-[180px] border-4 border-line relative overflow-hidden bg-accent">
              <img
                src="/avatar.jpg"
                alt="Navid Kamal"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-line text-bg text-center py-1 text-xs font-bold font-mono">
                ID: 449-X2
              </div>
            </div>
            <div className="flex gap-3">
              <SocialLink icon="ph-github-logo" href="https://github.com/navid1111" />
              <SocialLink icon="ph-linkedin-logo" href="https://linkedin.com/in/navid-kamal" />
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            <div>
              <div className="text-xs tracking-widest font-mono mb-2 opacity-70">FULL_NAME</div>
              <div className="text-2xl font-black uppercase">{PROFILE.name}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-xs tracking-widest font-mono mb-2 opacity-70">EMAIL_ADDRESS</div>
                <div className="font-mono font-bold">{PROFILE.email}</div>
              </div>
              <div>
                <div className="text-xs tracking-widest font-mono mb-2 opacity-70">LOCATION</div>
                <div className="font-mono font-bold">{PROFILE.location}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-xs tracking-widest font-mono mb-2 opacity-70">ROLE</div>
                <div className="font-bold">{PROFILE.role}</div>
              </div>
              <div>
                <div className="text-xs tracking-widest font-mono mb-2 opacity-70">EXPERIENCE</div>
                <div className="font-bold">{PROFILE.experience}</div>
              </div>
            </div>

            <div>
              <div className="text-xs tracking-widest font-mono mb-2 opacity-70">BIO</div>
              <p className="text-base leading-relaxed opacity-90">{PROFILE.bio}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {PROFILE.tags.map((tag, index) => (
                <span key={index} className="tech-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

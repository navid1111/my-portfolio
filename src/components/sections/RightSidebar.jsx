/**
 * RightSidebar Component
 * Right sidebar with location, tech stack, and contact information
 */

import { TECH_STACK } from '../../constants/portfolio';

const LocationCard = () => (
  <div className="bordered-box-filled p-6">
    <div className="text-xs tracking-widest font-mono mb-4 opacity-70">LOCATION_DATA</div>
    <div className="font-disp font-black text-3xl leading-none mb-4">
      DHK<br />23.8103° N<br />90.4125° E
    </div>
    <div className="w-full h-32 bg-bg opacity-50 relative overflow-hidden border border-text">
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
        <div className="border-r border-b border-text/20"></div>
        <div className="border-r border-b border-text/20"></div>
        <div className="border-r border-b border-text/20"></div>
        <div className="border-b border-text/20"></div>
        <div className="border-r border-b border-text/20"></div>
        <div className="border-r border-b border-text/20 bg-line/20"></div>
        <div className="border-r border-b border-text/20"></div>
        <div className="border-b border-text/20"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-line rounded-full animate-ping"></div>
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-line rounded-full"></div>
    </div>
  </div>
);

const TechStackCard = () => (
  <div className="bordered-box p-6">
    <div className="text-xs tracking-widest font-mono mb-4 opacity-70">TECH_STACK_INIT</div>
    <ul className="font-mono text-sm space-y-2 font-bold">
      {TECH_STACK.map((tech, index) => (
        <li key={index} className={`flex items-center gap-2 ${!tech.enabled ? 'opacity-50' : ''}`}>
          <i className={`ph-fill ${tech.enabled ? 'ph-check-square' : 'ph-square'} text-line`}></i>
          {tech.label}
        </li>
      ))}
    </ul>
  </div>
);

const ContactCard = () => (
  <div id="contact" className="bordered-box p-6 flex flex-col justify-between min-h-[300px]">
    <div>
      <div className="text-xs tracking-widest font-mono mb-4 opacity-70">LAST_COMMIT</div>
      <div className="font-disp font-bold text-xl mb-8">4 HOURS AGO</div>

      <div className="text-xs tracking-widest font-mono mb-4 opacity-70">INQUIRIES</div>
      <a
        href="mailto:navidkamal@iut-dhaka.edu"
        className="block font-disp font-black text-2xl border-b-2 border-line hover:text-line transition-colors leading-none pb-1"
      >
        NAVIDKAMAL@<br />IUT-DHAKA.EDU
      </a>
    </div>

    <div className="flex justify-center mt-8">
      <div className="w-20 h-20 bg-text rounded-full relative overflow-hidden group cursor-pointer hover:scale-110 transition-transform">
        <div className="absolute w-full h-[20%] bg-bg top-[40%] rotate-45 group-hover:rotate-180 transition-transform duration-500"></div>
        <div className="absolute w-[20%] h-full bg-bg left-[40%] -rotate-45 group-hover:rotate-12 transition-transform duration-500"></div>
      </div>
    </div>
  </div>
);

const RightSidebar = () => {
  return (
    <aside className="hidden lg:flex sticky top-8 h-fit flex-col gap-8">
      <LocationCard />
      <TechStackCard />
      <ContactCard />
    </aside>
  );
};

export default RightSidebar;

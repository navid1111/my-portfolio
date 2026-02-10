/**
 * Sidebar Component
 * Left sidebar with navigation menu and status
 */

import { NAV_MENU } from '../../constants/portfolio';

const NavLink = ({ href, label, highlight, icon }) => (
  <a
    href={href}
    className={`nav-link border-2 p-4 font-bold text-lg uppercase flex justify-between group border-line ${
      highlight ? 'bg-line text-bg border-line hover:bg-text hover:border-text' : ''
    }`}
  >
    <span>{label}</span>
    <i className={`ph-bold ${icon} opacity-0 group-hover:opacity-100 transition-opacity`}></i>
  </a>
);

const Sidebar = () => {
  return (
    <aside className="hidden lg:block sticky top-8 h-fit">
      <div className="bordered-box p-6 flex flex-col gap-12">
        {/* Menu Section */}
        <div>
          <div className="text-xs tracking-widest font-mono mb-6 opacity-70">[ MENU_SYS ]</div>
          <nav className="flex flex-col gap-4">
            {NAV_MENU.map((item) => (
              <NavLink
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                highlight={item.highlight}
              />
            ))}
          </nav>
        </div>

        {/* Status Check Section */}
        <div>
          <div className="text-xs tracking-widest font-mono mb-2 opacity-70">STATUS_CHECK</div>
          <div className="font-disp font-black text-3xl leading-none">
            AVAILABLE<br />FOR HIRE
          </div>
          <div className="mt-4 flex gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono">SYSTEM ONLINE</span>
          </div>
        </div>
      </div>

      {/* Session Info (visible on XL+) */}
      <div className="mt-8 border-l-2 border-line pl-4 py-2 hidden xl:block opacity-60">
        <p className="font-mono text-xs mb-1">
          SESSION_ID: <span className="font-bold">449-X2</span>
        </p>
        <p className="font-mono text-xs">
          LOC: <span className="font-bold">NYC_SERVER</span>
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

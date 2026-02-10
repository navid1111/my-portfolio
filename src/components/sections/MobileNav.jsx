/**
 * MobileNav Component
 * Mobile-only navigation bar at the bottom
 */

const MobileNav = () => {
  const navItems = [
    { href: '#projects', icon: 'ph-folder', label: 'Work' },
    { href: '#experience', icon: 'ph-briefcase', label: 'Exp' },
    { href: '#achievements', icon: 'ph-trophy', label: 'Awards' },
    { href: '#contact', icon: 'ph-paper-plane-right', label: 'Mail', highlight: true },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-bg border-t-2 border-line p-4 flex justify-around z-50">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`flex flex-col items-center gap-1 text-xs font-bold uppercase ${
            item.highlight ? 'text-line' : ''
          }`}
        >
          <i className={`ph-bold ${item.icon} text-xl`}></i>
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default MobileNav;

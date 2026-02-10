import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BackgroundElements from './components/layout/BackgroundElements';
import Sidebar from './components/sections/Sidebar';
import RightSidebar from './components/sections/RightSidebar';
import MainContent from './components/sections/MainContent';
import MobileNav from './components/sections/MobileNav';
import ProjectDetail from './components/pages/ProjectDetail';

function HomePage() {
  return (
    <>
      <main className="relative z-10 max-w-[1700px] mx-auto p-6 md:p-8 grid grid-cols-1 lg:grid-cols-[260px_1fr_300px] gap-8 items-start min-h-screen">
        <Sidebar />
        <MainContent />
        <RightSidebar />
        <MobileNav />
      </main>
    </>
  );
}

export default function App() {
  useEffect(() => {
    // Load Google Fonts
    const fontLink = document.createElement('link');
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Load Phosphor Icons
    const phosphorScript = document.createElement('script');
    phosphorScript.src = 'https://unpkg.com/@phosphor-icons/web';
    phosphorScript.async = true;
    document.head.appendChild(phosphorScript);
  }, []);

  return (
    <BrowserRouter>
      <div className="selection:bg-[#C44D58] selection:text-white">
        <BackgroundElements />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
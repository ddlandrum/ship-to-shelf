import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
 
// --- Small Helper Icons ---
const LineShip = ({ isActive }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M 5,60 L 20,85 L 85,85 L 95,60 Z" />
    <path d="M 72,60 L 72,30 L 88,30 L 88,60" />
    <path d="M 0,90 Q 50,85 100,90" className={isActive ? "animate-pulse stroke-blue-500" : ""} />
    <rect x="33" y="15" width="15" height="30" className={isActive ? "fill-blue-500" : ""} />
  </svg>
);
 
const LineTOS = ({ isActive }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M 25,90 L 25,15 L 95,15" />
    <rect x="55" y={isActive ? 50 : 30} width="30" height="15" className={isActive ? "fill-green-500" : ""} style={{ transition: 'all 2s' }} />
  </svg>
);
 
const LineRailRoad = ({ isActive }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <rect x={isActive ? 40 : 10} y="20" width="40" height="20" className={isActive ? "fill-indigo-500" : ""} style={{ transition: 'all 2s' }} />
    <line x1="0" y1="50" x2="100" y2="50" stroke="#ddd" />
  </svg>
);
 
const LineYMS = ({ isActive }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <rect x="40" y="30" width="50" height="50" fill="#f9fafb" />
    <rect x="50" y="40" width="10" height="15" className={isActive ? "fill-purple-500" : ""} />
  </svg>
);
 
const LineStore = ({ isActive }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <rect x="20" y="20" width="70" height="70" fill="#fff" />
    <rect x="30" y="40" width="10" height="10" className={isActive ? "fill-red-500" : ""} />
  </svg>
);
 
const App = () => {
  const [currentStage, setCurrentStage] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
 
  useEffect(() => {
    // 1. Bulletproof Styling Injection
    if (!document.getElementById('tailwind-stylesheet')) {
      const link = document.createElement('link');
      link.id = 'tailwind-stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
 
    // 2. Dashboard Animation Timer
    let timer;
    if (isPlaying && currentStage < 4) {
      timer = setTimeout(() => setCurrentStage(s => s + 1), 3000);
    } else if (currentStage === 4) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStage]);
 
  const steps = [
    { title: 'CVS', sub: 'Vessel', icon: LineShip, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'TOS', sub: 'Terminal', icon: LineTOS, color: 'text-green-600', bg: 'bg-green-50' },
    { title: 'TMS', sub: 'Rail', icon: LineRailRoad, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { title: 'YMS', sub: 'Yard/DC', icon: LineYMS, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'TMS', sub: 'Store', icon: LineStore, color: 'text-red-600', bg: 'bg-red-50' }
  ];
 
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center font-sans">
      <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Kaleris Ship-to-Shelf</h1>
      <p className="text-gray-500 mb-8 text-center max-w-lg">Full-spectrum visibility orchestration.</p>
      
      <button
        onClick={() => { setCurrentStage(0); setIsPlaying(true); }}
        className="mb-12 px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2"
      >
        <PlayCircle size={20} /> Initialize Journey
      </button>
 
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        {steps.map((step, idx) => {
          const IconComp = step.icon;
          const active = currentStage === idx;
          return (
            <React.Fragment key={idx}>
              <div className={`flex flex-col items-center p-6 bg-white rounded-3xl border-2 transition-all duration-500 w-full md:w-44 ${active ? `scale-110 shadow-xl border-blue-400 ${step.bg}` : 'border-gray-200 opacity-50'}`}>
                <div className="w-20 h-20 mb-4"><IconComp isActive={active} /></div>
                <h4 className={`font-black ${step.color}`}>{step.title}</h4>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{step.sub}</p>
              </div>
              {idx < 4 && <div className="hidden md:block"><ArrowRight className={currentStage > idx ? 'text-blue-500' : 'text-gray-200'} /></div>}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
 
export default App;

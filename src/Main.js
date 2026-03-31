import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle, Ship, Building2, Train, Warehouse, Store } from 'lucide-react';
 
const App = () => {
  const [currentStage, setCurrentStage] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
 
  useEffect(() => {
    // Styling Injection
    if (!document.getElementById('tailwind-stylesheet')) {
      const link = document.createElement('link');
      link.id = 'tailwind-stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
 
    // Dashboard Animation Timer
    let timer;
    if (isPlaying && currentStage < 4) {
      timer = setTimeout(() => setCurrentStage(s => s + 1), 3000);
    } else if (currentStage === 4) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStage]);
 
  const steps = [
    { title: 'CVS', sub: 'Vessel', icon: Ship, color: 'text-blue-600', bg: 'bg-blue-50', activeIcon: 'text-blue-500' },
    { title: 'TOS', sub: 'Terminal', icon: Building2, color: 'text-green-600', bg: 'bg-green-50', activeIcon: 'text-green-500' },
    { title: 'TMS', sub: 'Rail', icon: Train, color: 'text-indigo-600', bg: 'bg-indigo-50', activeIcon: 'text-indigo-500' },
    { title: 'YMS', sub: 'Yard/DC', icon: Warehouse, color: 'text-purple-600', bg: 'bg-purple-50', activeIcon: 'text-purple-500' },
    { title: 'TMS', sub: 'Store', icon: Store, color: 'text-red-600', bg: 'bg-red-50', activeIcon: 'text-red-500' }
  ];
 
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center font-sans">
      <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">Kaleris Ship-to-Shelf</h1>
      <p className="text-gray-500 mb-10 text-center max-w-lg text-lg">Full-spectrum visibility orchestration.</p>
      
      <button
        onClick={() => { setCurrentStage(0); setIsPlaying(true); }}
        className="mb-16 px-10 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl hover:bg-blue-700 hover:scale-105 transform transition-all flex items-center gap-3 text-lg"
      >
        <PlayCircle size={24} /> Initialize Journey
      </button>
 
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        {steps.map((step, idx) => {
          const IconComp = step.icon;
          const active = currentStage === idx;
          const passed = currentStage > idx;
 
          return (
            <React.Fragment key={idx}>
              <div className={`flex flex-col items-center p-8 bg-white rounded-3xl border-2 transition-all duration-500 w-full md:w-48 ${active ? `transform scale-110 shadow-2xl border-blue-400 ${step.bg}` : passed ? 'border-gray-300 opacity-90' : 'border-gray-100 opacity-50'}`}>
                <div className="mb-6 h-16 w-16 flex items-center justify-center">
                   <IconComp size={active ? 56 : 40} className={`transition-all duration-500 ${active ? `${step.activeIcon} animate-pulse` : passed ? 'text-gray-600' : 'text-gray-300'}`} strokeWidth={active ? 2 : 1.5} />
                </div>
                <h4 className={`text-xl font-black ${active ? step.color : 'text-gray-700'}`}>{step.title}</h4>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{step.sub}</p>
              </div>
              {idx < 4 && <div className="hidden md:block">
                 <ArrowRight size={32} className={`transition-colors duration-500 ${passed ? 'text-blue-500' : 'text-gray-200'}`} />
              </div>}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
 
export default App;

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, PlayCircle, Ship, Building2, Train, Warehouse, Store, Activity, Terminal } from 'lucide-react';
 
const App = () => {
  const [currentStage, setCurrentStage] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [logs, setLogs] = useState([]);
  const logsEndRef = useRef(null);
 
  // Unified Platform Telemetry Script
  const telemetryData = [
    { stage: 0, time: "+00:00:12", msg: "CVS: Vessel docked. Ocean visibility link established." },
    { stage: 1, time: "+00:00:45", msg: "TOS: Container discharged. Yard block location confirmed." },
    { stage: 2, time: "+00:01:30", msg: "TMS: Multimodal routing activated. Railhead departure confirmed." },
    { stage: 3, time: "+00:02:15", msg: "YMS: ColdLink Orchestrator synced. Reading Priority Flags for inbound allocation." },
    { stage: 4, time: "+00:03:00", msg: "TMS: Last-mile delivery execution. Shelf-level visibility achieved." }
  ];
 
  useEffect(() => {
    // Styling Injection
    if (!document.getElementById('tailwind-stylesheet')) {
      const link = document.createElement('link');
      link.id = 'tailwind-stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
 
    // Dashboard Animation & Telemetry Timer
    let timer;
    if (isPlaying && currentStage < 4) {
      timer = setTimeout(() => {
        setCurrentStage(s => s + 1);
      }, 3500);
    } else if (currentStage === 4) {
      setTimeout(() => setIsPlaying(false), 2000);
    }
 
    if (currentStage >= 0 && currentStage <= 4) {
      setLogs(prev => [...prev, telemetryData[currentStage]]);
    }
 
    return () => clearTimeout(timer);
  }, [isPlaying, currentStage]);
 
  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);
 
  const steps = [
    { title: 'CVS', sub: 'Vessel', icon: Ship, color: 'text-blue-600', activeIcon: 'text-blue-500', border: 'border-blue-400' },
    { title: 'TOS', sub: 'Terminal', icon: Building2, color: 'text-green-600', activeIcon: 'text-green-500', border: 'border-green-400' },
    { title: 'TMS', sub: 'Rail', icon: Train, color: 'text-indigo-600', activeIcon: 'text-indigo-500', border: 'border-indigo-400' },
    { title: 'YMS', sub: 'Yard/DC', icon: Warehouse, color: 'text-purple-600', activeIcon: 'text-purple-500', border: 'border-purple-400' },
    { title: 'TMS', sub: 'Store', icon: Store, color: 'text-red-600', activeIcon: 'text-red-500', border: 'border-red-400' }
  ];
 
  const resetJourney = () => {
    setCurrentStage(-1);
    setLogs([]);
    setIsPlaying(true);
    setTimeout(() => setCurrentStage(0), 500);
  };
 
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center font-sans">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <Activity className="text-blue-600 animate-pulse" size={32} />
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Kaleris Ship-to-Shelf</h1>
      </div>
      <p className="text-gray-500 mb-10 text-center max-w-lg text-lg">Unified platform execution & visibility.</p>
      
      {/* Control Button */}
      {!isPlaying && currentStage === -1 ? (
        <button
          onClick={resetJourney}
          className="mb-12 px-10 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl hover:bg-blue-700 hover:scale-105 transform transition-all flex items-center gap-3 text-lg"
        >
          <PlayCircle size={24} /> Initialize Journey
        </button>
      ) : (
        <div className="mb-12 h-14 flex items-center justify-center">
           {currentStage === 4 && !isPlaying && (
              <button onClick={resetJourney} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-300 transition-all text-sm">
                Restart Simulation
              </button>
           )}
        </div>
      )}
 
      {/* Main Orchestration Diagram */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-2 relative z-10">
        {steps.map((step, idx) => {
          const IconComp = step.icon;
          const active = currentStage === idx;
          const passed = currentStage > idx;
 
          // Safe String Calculations (Bypasses ESLint syntax errors)
          let cardClass = "relative flex flex-col items-center p-6 bg-white rounded-2xl border-2 transition-all duration-700 w-full md:w-44 ";
          if (active) cardClass += "transform scale-110 shadow-2xl " + step.border;
          else if (passed) cardClass += "border-gray-300 opacity-90";
          else cardClass += "border-gray-100 opacity-50";
 
          let iconClass = "transition-all duration-500 ";
          if (active) iconClass += step.activeIcon;
          else if (passed) iconClass += "text-gray-600";
          else iconClass += "text-gray-300";
 
          let titleClass = "text-xl font-black ";
          if (active) titleClass += step.color;
          else titleClass += "text-gray-700";
 
          let arrowClass = "transition-colors duration-500 ";
          if (passed) arrowClass += "text-blue-500";
          else arrowClass += "text-gray-200";
 
          return (
            <React.Fragment key={idx}>
              {/* Stage Card */}
              <div className={cardClass}>
                
                {active && (
                  <span className="absolute top-6 flex h-16 w-16">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-200 opacity-50"></span>
                  </span>
                )}
 
                <div className="mb-4 h-16 w-16 flex items-center justify-center relative z-10">
                   <IconComp size={active ? 50 : 36} className={iconClass} strokeWidth={active ? 2 : 1.5} />
                </div>
                <h4 className={titleClass}>{step.title}</h4>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 text-center">{step.sub}</p>
              </div>
 
              {idx < 4 && (
                <div className="hidden md:flex relative w-12 justify-center items-center">
                   <ArrowRight size={28} className={arrowClass} />
                   {active && (
                     <div className="absolute top-1/2 left-0 transform -translate-y-1/2 h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDuration: '1s' }}></div>
                   )}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
 
      {/* Live Telemetry Terminal */}
      <div className="w-full max-w-3xl mt-16 bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
        <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
          <Terminal size={14} className="text-gray-400" />
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Network Telemetry Feed</span>
        </div>
        <div className="p-4 h-48 overflow-y-auto font-mono text-sm">
          {logs.length === 0 && <div className="text-gray-600 italic">Waiting for journey initialization...</div>}
          {logs.map((log, i) => (
            <div key={i} className="mb-2 flex gap-4 animate-pulse" style={{ animationIterationCount: 1 }}>
              <span className="text-blue-400 whitespace-nowrap">[{log.time}]</span>
              <span className="text-green-400">{log.msg}</span>
            </div>
          ))}
          <div ref={logsEndRef} />
        </div>
      </div>
 
    </div>
  );
};
 
export default App;

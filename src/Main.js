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
    // Bulletproof Styling Injection
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
      }, 3500); // 3.5 seconds per stage for presentation pacing
    } else if (currentStage === 4) {
      setTimeout(() => setIsPlaying(false), 2000);
    }
 
    // Populate logs when stage changes
    if (currentStage >= 0 && currentStage <= 4) {
      setLogs(prev => [...prev, telemetryData[currentStage]]);
    }
 
    return () => clearTimeout(timer);
  }, [isPlaying, currentStage]);
 
  // Auto-scroll the telemetry terminal
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);
 
  const steps = [
    { title: 'CVS', sub: 'Vessel', icon: Ship, color: 'text-blue-600', activeIcon: 'text-blue-500', border: 'border-blue-400' },
    { title: 'TOS', sub: 'Terminal', icon: Building2, color: 'text-green-600', activeIcon: 'text-green-500', border: 'border-green-400' },
    { title: 'TMS', sub: 'Rail', icon: Train, color: 'text-indigo-600', activeIcon: 'text-indigo-500', border: 'border-indigo-400' },
    { title: 'YMS', sub: 'Yard/DC', icon: Warehouse, color: 'text-purple-600', activeIcon: 'text-purple-500', border: 'border-purple-400' },
    { title: 'TMS', sub: 'Store', icon: Store, color: 'text-red-6

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Activity,
  Globe2,
  Box,
  Radio,
  PlayCircle,
  RotateCcw,
  ShieldCheck,
  Cpu,
  Wifi,
} from "lucide-react";

// --- Highly Detailed Animated SVGs ---

const LineShip = ({ className, isActive }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Background Clouds */}
    <path
      d="M 10,20 Q 15,15 20,20 Q 25,15 30,20"
      className="path-draw text-slate-300"
      strokeDasharray="2 2"
    />
    <path
      d="M 60,15 Q 65,10 70,15 Q 75,10 80,15"
      className="path-draw text-slate-300"
      strokeDasharray="2 2"
    />

    {/* Ship Hull & Bridge */}
    <path
      d="M 5,60 L 20,85 L 85,85 L 95,60 Z"
      className="path-draw stroke-[1.5px]"
    />
    <path d="M 72,60 L 72,30 L 88,30 L 88,60" className="path-draw" />
    <path d="M 75,40 L 85,40 M 75,50 L 85,50" className="path-draw" />

    {/* Spinning Radar */}
    <g className={isActive ? "animate-spin-fast origin-[80px_23px]" : ""}>
      <line
        x1="75"
        y1="23"
        x2="85"
        y2="23"
        className="path-draw stroke-[1.5px]"
      />
    </g>
    <line x1="80" y1="23" x2="80" y2="30" className="path-draw" />

    {/* Base Container Stacks */}
    <path
      d="M 15,60 L 15,35 L 30,35 L 30,60"
      className="path-draw text-slate-400"
    />
    <path
      d="M 33,60 L 33,45 L 48,45 L 48,60"
      className="path-draw text-slate-400"
    />
    <path
      d="M 51,60 L 51,35 L 66,35 L 66,60"
      className="path-draw text-slate-400"
    />
    <line
      x1="15"
      y1="47.5"
      x2="30"
      y2="47.5"
      className="path-draw text-slate-400"
    />
    <line
      x1="51"
      y1="47.5"
      x2="66"
      y2="47.5"
      className="path-draw text-slate-400"
    />

    {/* Animated Cargo Box (Loads onto ship) */}
    <g
      className={`transition-all duration-1000 ${
        isActive ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
      }`}
    >
      <rect
        x="33"
        y="15"
        width="15"
        height="30"
        className={`${
          isActive ? "fill-blue-500 stroke-blue-600" : "stroke-currentColor"
        }`}
      />
      <line
        x1="33"
        y1="25"
        x2="48"
        y2="25"
        stroke={isActive ? "white" : "currentColor"}
      />
      <line
        x1="33"
        y1="35"
        x2="48"
        y2="35"
        stroke={isActive ? "white" : "currentColor"}
      />
    </g>

    {/* Dynamic Water & Bow Wave */}
    <path
      d="M 0,90 Q 12,95 25,90 T 50,90 T 75,90 T 100,95"
      className={
        isActive
          ? "animate-waves stroke-blue-400 stroke-[1.5px]"
          : "stroke-[1.5px]"
      }
    />
    <path
      d="M 0,95 Q 12,100 25,95 T 50,95 T 75,95 T 100,100"
      className={
        isActive
          ? "animate-waves-delayed text-blue-300 stroke-[1px]"
          : "stroke-[1px]"
      }
    />
    {isActive && (
      <path d="M 5,60 Q 0,75 -5,85" className="stroke-white animate-pulse" />
    )}
  </svg>
);

const LineTOS = ({ className, isActive }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line
      x1="0"
      y1="90"
      x2="100"
      y2="90"
      className="path-draw stroke-[1.5px]"
    />

    {/* Crane Structure Detailed */}
    <path d="M 25,90 L 25,15 L 95,15" className="path-draw stroke-[1.5px]" />
    <path d="M 45,90 L 45,15" className="path-draw stroke-[1.5px]" />
    <path
      d="M 25,45 L 45,35 M 25,65 L 45,55 M 25,25 L 45,15 M 25,85 L 45,75"
      className="path-draw text-slate-400"
    />
    <path
      d="M 10,15 L 25,15 L 25,25 L 10,25 Z"
      className="path-draw fill-white"
    />
    <circle cx="15" cy="20" r="2" className="path-draw" />

    {/* Ground Containers */}
    <rect
      x="5"
      y="75"
      width="15"
      height="15"
      className="path-draw text-slate-400"
    />
    <rect
      x="5"
      y="60"
      width="15"
      height="15"
      className="path-draw text-slate-400"
    />

    {/* Waiting AGV / Truck */}
    <g className="text-slate-500">
      <rect x="60" y="80" width="25" height="5" className="path-draw" />
      <circle cx="65" cy="87" r="2" className="path-draw" />
      <circle cx="80" cy="87" r="2" className="path-draw" />
      <path
        d="M 85,85 L 85,75 L 90,75 L 95,80 L 95,85 Z"
        className="path-draw"
      />
    </g>

    {/* Animated Hoist & Cargo Box */}
    <g className={isActive ? "animate-crane-complex" : ""}>
      <line
        x1="60"
        y1="15"
        x2="55"
        y2="40"
        className="path-draw stroke-[1.5px]"
      />
      <line
        x1="80"
        y1="15"
        x2="85"
        y2="40"
        className="path-draw stroke-[1.5px]"
      />
      <rect
        x="55"
        y="40"
        width="30"
        height="15"
        className={isActive ? "fill-teal-500 stroke-teal-600" : "path-draw"}
      />
      <line
        x1="55"
        y1="47.5"
        x2="85"
        y2="47.5"
        stroke={isActive ? "white" : "currentColor"}
        strokeDasharray={isActive ? "" : "2 2"}
      />
    </g>
  </svg>
);

const LineRailRoad = ({ className, isActive }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Scrolling Background Scenery */}
    <g
      className={`transition-transform duration-[3000ms] ease-linear ${
        isActive ? "-translate-x-20" : "translate-x-0"
      }`}
    >
      <path
        d="M 0,35 L 10,25 L 25,35 L 40,20 L 55,35 L 70,15 L 90,35 L 110,25 L 130,35"
        className="path-draw text-slate-200"
      />
      <circle cx="90" cy="10" r="4" className="path-draw text-slate-300" />
    </g>

    <line
      x1="0"
      y1="50"
      x2="100"
      y2="50"
      className="path-draw stroke-slate-300"
    />

    {/* TRAIN */}
    <line
      x1="0"
      y1="42"
      x2="100"
      y2="42"
      className="path-draw stroke-[1.5px]"
    />
    <g
      className={`transition-transform duration-[2500ms] ${
        isActive ? "translate-x-16" : "translate-x-0"
      }`}
    >
      <path
        d="M -5,35 L 25,35 L 25,15 L 5,20 L -5,20 Z"
        className="path-draw fill-white"
      />
      <rect x="15" y="22" width="5" height="5" className="path-draw" />
      <circle
        cx="5"
        cy="38"
        r="3"
        className={`path-draw ${
          isActive ? "animate-spin-fast origin-[5px_38px]" : ""
        }`}
      />
      <circle
        cx="15"
        cy="38"
        r="3"
        className={`path-draw ${
          isActive ? "animate-spin-fast origin-[15px_38px]" : ""
        }`}
      />
      <line
        x1="25"
        y1="38"
        x2="85"
        y2="38"
        className="path-draw stroke-[1.5px]"
      />

      {/* Animated Cargo */}
      <rect
        x="30"
        y="15"
        width="45"
        height="20"
        className={
          isActive
            ? "fill-indigo-500 stroke-indigo-600 transition-colors duration-500"
            : "path-draw"
        }
      />
      <line
        x1="30"
        y1="25"
        x2="75"
        y2="25"
        stroke={isActive ? "white" : "currentColor"}
      />
      <rect
        x="50"
        y="17"
        width="20"
        height="6"
        fill={isActive ? "white" : "transparent"}
        stroke="none"
        opacity="0.3"
      />

      <circle
        cx="35"
        cy="38"
        r="3"
        className={`path-draw ${
          isActive ? "animate-spin-fast origin-[35px_38px]" : ""
        }`}
      />
      <circle
        cx="75"
        cy="38"
        r="3"
        className={`path-draw ${
          isActive ? "animate-spin-fast origin-[75px_38px]" : ""
        }`}
      />
    </g>

    {/* TRUCK */}
    <line
      x1="0"
      y1="92"
      x2="100"
      y2="92"
      className="path-draw stroke-[1.5px]"
    />
    {/* Moving Road Lines */}
    <line
      x1="0"
      y1="95"
      x2="100"
      y2="95"
      strokeDasharray="10 10"
      className={`stroke-slate-300 ${isActive ? "animate-dash-scroll" : ""}`}
    />

    <g
      className={`transition-transform duration-[3000ms] delay-300 ${
        isActive ? "translate-x-12" : "translate-x-0"
      }`}
    >
      <path
        d="M 75,85 L 75,60 L 85,60 L 95,70 L 95,85 Z"
        className="path-draw fill-white"
      />
      <rect x="78" y="65" width="8" height="8" className="path-draw" />
      <circle
        cx="80"
        cy="88"
        r="4"
        className={`path-draw stroke-[1.5px] ${
          isActive ? "animate-spin-fast origin-[80px_88px]" : ""
        }`}
      />
      <circle
        cx="90"
        cy="88"
        r="4"
        className={`path-draw stroke-[1.5px] ${
          isActive ? "animate-spin-fast origin-[90px_88px]" : ""
        }`}
      />
      <line
        x1="20"
        y1="85"
        x2="72"
        y2="85"
        className="path-draw stroke-[1.5px]"
      />

      <rect
        x="25"
        y="55"
        width="45"
        height="25"
        className="path-draw text-slate-400"
      />
      <line
        x1="25"
        y1="67"
        x2="70"
        y2="67"
        className="path-draw text-slate-400"
      />
      <circle
        cx="35"
        cy="88"
        r="4"
        className={`path-draw stroke-[1.5px] ${
          isActive ? "animate-spin-fast origin-[35px_88px]" : ""
        }`}
      />
      <circle
        cx="45"
        cy="88"
        r="4"
        className={`path-draw stroke-[1.5px] ${
          isActive ? "animate-spin-fast origin-[45px_88px]" : ""
        }`}
      />
    </g>
  </svg>
);

const LineYMS = ({ className, isActive }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line
      x1="0"
      y1="90"
      x2="100"
      y2="90"
      className="path-draw stroke-[1.5px]"
    />

    {/* Detailed DC Warehouse */}
    <path
      d="M 35,20 L 95,20 L 95,90 L 35,90 Z"
      className="path-draw fill-white"
    />
    <path d="M 35,35 L 15,45 L 15,90" className="path-draw fill-slate-50" />
    <line
      x1="35"
      y1="35"
      x2="95"
      y2="35"
      className="path-draw stroke-[1.5px]"
    />

    {/* Roof Vents */}
    <rect
      x="45"
      y="15"
      width="5"
      height="5"
      className="path-draw text-slate-400"
    />
    <rect
      x="65"
      y="15"
      width="5"
      height="5"
      className="path-draw text-slate-400"
    />
    <rect
      x="85"
      y="15"
      width="5"
      height="5"
      className="path-draw text-slate-400"
    />

    {/* Dock Doors */}
    <rect
      x="48"
      y="45"
      width="14"
      height="10"
      className="path-draw fill-slate-100"
    />
    <rect
      x="73"
      y="45"
      width="14"
      height="10"
      className="path-draw fill-slate-100"
    />

    {/* Docks & Bumpers */}
    <rect
      x="45"
      y="55"
      width="20"
      height="35"
      className="path-draw fill-white"
    />
    <line x1="45" y1="55" x2="65" y2="55" className="stroke-[2px]" />
    <rect
      x="70"
      y="55"
      width="20"
      height="35"
      className="path-draw fill-white"
    />
    <line x1="70" y1="55" x2="90" y2="55" className="stroke-[2px]" />

    {/* Animated Packages Loading into Trucks */}
    <g className={isActive ? "animate-yms-package-1" : "opacity-0"}>
      <rect
        x="52"
        y="47"
        width="6"
        height="6"
        className="fill-purple-400 stroke-purple-600"
      />
    </g>
    <g className={isActive ? "animate-yms-package-2" : "opacity-0"}>
      <rect
        x="77"
        y="47"
        width="6"
        height="6"
        className="fill-purple-400 stroke-purple-600"
      />
    </g>

    {/* Animated Fleet Disbursement */}
    <g
      className={`origin-center ${
        isActive ? "animate-yms-truck-1" : "opacity-0"
      }`}
    >
      <rect
        x="48"
        y="60"
        width="14"
        height="20"
        className="fill-purple-500 stroke-purple-600 stroke-[2px]"
      />
      <rect
        x="52"
        y="80"
        width="6"
        height="6"
        className="fill-white stroke-purple-600 stroke-[2px]"
      />
    </g>
    <g
      className={`origin-center ${
        isActive ? "animate-yms-truck-2" : "opacity-0"
      }`}
    >
      <rect
        x="73"
        y="60"
        width="14"
        height="20"
        className="fill-purple-500 stroke-purple-600 stroke-[2px]"
      />
      <rect
        x="77"
        y="80"
        width="6"
        height="6"
        className="fill-white stroke-purple-600 stroke-[2px]"
      />
    </g>

    {/* Gate House & Security Camera */}
    <path
      d="M 2,90 L 2,60 L 12,60 L 12,90 Z"
      className="path-draw fill-slate-100"
    />
    <rect x="5" y="65" width="5" height="10" className="path-draw" />
    <circle cx="12" cy="58" r="1.5" className="path-draw" />
    <line x1="12" y1="58" x2="16" y2="62" className="path-draw" />

    {/* Animated Gate Lift */}
    <path
      d="M 12,75 L 30,75"
      className={`path-draw stroke-[2px] origin-[12px_75px] ${
        isActive ? "animate-yms-gate" : ""
      }`}
    />
  </svg>
);

const LineStore = ({ className, isActive }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line
      x1="0"
      y1="90"
      x2="100"
      y2="90"
      className="path-draw stroke-[1.5px]"
    />

    {/* Street Lamp */}
    <path d="M 5,90 L 5,30 L 15,30" className="path-draw text-slate-400" />
    <circle
      cx="15"
      cy="32"
      r="2"
      className={
        isActive
          ? "fill-yellow-200 stroke-yellow-400"
          : "path-draw text-slate-400"
      }
    />

    {/* Storefront Building */}
    <path
      d="M 15,20 L 95,20 L 95,90 L 15,90 Z"
      className="path-draw fill-white"
    />
    <path
      d="M 10,35 L 100,35 L 95,20 L 15,20 Z"
      className="path-draw fill-slate-50"
    />
    <path
      d="M 25,35 L 25,20 M 45,35 L 45,20 M 65,35 L 65,20 M 85,35 L 85,20"
      className="path-draw text-slate-300"
    />

    {/* Store Windows */}
    <rect
      x="25"
      y="45"
      width="60"
      height="35"
      className="path-draw text-slate-300"
    />
    <line
      x1="55"
      y1="45"
      x2="55"
      y2="80"
      className="path-draw text-slate-300"
    />

    {/* Empty Window Shelf Outlines */}
    <line
      x1="30"
      y1="55"
      x2="50"
      y2="55"
      className="path-draw text-slate-300"
    />
    <line
      x1="30"
      y1="70"
      x2="50"
      y2="70"
      className="path-draw text-slate-300"
    />

    {/* Animated Delivery Truck Arrival */}
    <g
      className={`transition-transform duration-[1000ms] ease-out ${
        isActive ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
      }`}
    >
      <rect
        x="55"
        y="70"
        width="35"
        height="16"
        className={
          isActive
            ? "fill-rose-100 stroke-rose-500 stroke-[1.5px]"
            : "path-draw"
        }
      />
      <line x1="55" y1="78" x2="90" y2="78" className="stroke-rose-300" />
      <circle cx="65" cy="86" r="3.5" className="path-draw stroke-[1.5px]" />
      <circle cx="80" cy="86" r="3.5" className="path-draw stroke-[1.5px]" />
    </g>

    {/* --- NEW FINAL MILE SEQUENCE --- */}

    {/* Flying Packages (from Truck to Shelves) */}
    <g className={isActive ? "animate-store-pkg-1" : "opacity-0"}>
      <rect
        x="65"
        y="75"
        width="6"
        height="10"
        className="fill-rose-500 stroke-rose-600 stroke-[1px]"
      />
    </g>
    <g className={isActive ? "animate-store-pkg-2" : "opacity-0"}>
      <rect
        x="65"
        y="75"
        width="5"
        height="7"
        className="fill-rose-400 stroke-rose-500 stroke-[1px]"
      />
    </g>
    <g className={isActive ? "animate-store-pkg-3" : "opacity-0"}>
      <rect
        x="65"
        y="75"
        width="15"
        height="15"
        className="fill-rose-500 stroke-rose-600 stroke-[1px]"
      />
    </g>
    <g className={isActive ? "animate-store-pkg-4" : "opacity-0"}>
      <rect
        x="65"
        y="75"
        width="8"
        height="10"
        className="fill-rose-600 stroke-rose-700 stroke-[1px]"
      />
    </g>

    {/* Static Shelf Inventory (Fades in exactly when flying packages land) */}
    <rect
      x="32"
      y="45"
      width="6"
      height="10"
      className={
        isActive ? "animate-shelf-1 fill-rose-500 stroke-rose-600" : "opacity-0"
      }
    />
    <rect
      x="42"
      y="48"
      width="5"
      height="7"
      className={
        isActive ? "animate-shelf-2 fill-rose-400 stroke-rose-500" : "opacity-0"
      }
    />
    <rect
      x="65"
      y="65"
      width="15"
      height="15"
      className={
        isActive ? "animate-shelf-3 fill-rose-500 stroke-rose-600" : "opacity-0"
      }
    />
    <rect
      x="35"
      y="60"
      width="8"
      height="10"
      className={
        isActive ? "animate-shelf-4 fill-rose-600 stroke-rose-700" : "opacity-0"
      }
    />
  </svg>
);

// --- Main Component ---

const Diagram = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStage, setCurrentStage] = useState(-1);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Journey Controller
  useEffect(() => {
    let timer;
    if (isPlaying) {
      if (currentStage < 4) {
        timer = setTimeout(() => setCurrentStage((prev) => prev + 1), 3500);
      } else {
        timer = setTimeout(() => setIsPlaying(false), 4500);
      }
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStage]);

  const startJourney = () => {
    setCurrentStage(0);
    setIsPlaying(true);
  };
  const resetJourney = () => {
    setCurrentStage(-1);
    setIsPlaying(false);
  };

  const steps = [
    {
      id: "cvs",
      title: "CVS",
      subtitle: "Vessel Operations",
      icon: LineShip,
      color: "border-blue-200 shadow-blue-500/10",
      activeColor: "ring-4 ring-blue-400 shadow-blue-500/40 bg-blue-50",
      textColor: "text-blue-600",
      description:
        "Cargo is loaded onto the vessel. Transit schedules and stowage are optimized.",
      telemetry: {
        status: "DEPARTING",
        metric1: "Vessel: KLR Explorer",
        metric2: "Speed: 18.4 kts",
        metric3: "Est. Arrival: 14:00 GMT",
      },
    },
    {
      id: "tos",
      title: "TOS",
      subtitle: "Marine Terminal",
      icon: LineTOS,
      color: "border-teal-200 shadow-teal-500/10",
      activeColor: "ring-4 ring-teal-400 shadow-teal-500/40 bg-teal-50",
      textColor: "text-teal-600",
      description:
        "Gantry cranes lift the cargo from the vessel, orchestrating terminal yard movement.",
      telemetry: {
        status: "EXECUTING",
        metric1: "Crane ID: GC-04",
        metric2: "Lift Time: 45s",
        metric3: "Yard Slot: Block B2",
      },
    },
    {
      id: "tms-1",
      title: "TMS",
      subtitle: "Intermodal Logistics",
      icon: LineRailRoad,
      color: "border-indigo-200 shadow-indigo-500/10",
      activeColor: "ring-4 ring-indigo-400 shadow-indigo-500/40 bg-indigo-50",
      textColor: "text-indigo-600",
      description:
        "TMS orchestrates the inland transit of cargo via intermodal rail and OTR networks.",
      telemetry: {
        status: "IN TRANSIT",
        metric1: "Mode: Intermodal",
        metric2: "Carrier: BNSF/JB Hunt",
        metric3: "On-Time Risk: LOW",
      },
    },
    {
      id: "yms",
      title: "YMS",
      subtitle: "Yard & DC",
      icon: LineYMS,
      color: "border-purple-200 shadow-purple-500/10",
      activeColor: "ring-4 ring-purple-400 shadow-purple-500/40 bg-purple-50",
      textColor: "text-purple-600",
      description:
        "Cargo arrives at the DC. The load is broken down and disbursed into a fleet of trucks out the yard gate.",
      telemetry: {
        status: "DISBURSING",
        metric1: "Gate: Outbound 2",
        metric2: "Dock: Door 14",
        metric3: "Turn Time: 22 min",
      },
    },
    {
      id: "tms-2",
      title: "TMS",
      subtitle: "Final Mile Delivery",
      icon: LineStore,
      color: "border-rose-200 shadow-rose-500/10",
      activeColor: "ring-4 ring-rose-400 shadow-rose-500/40 bg-rose-50",
      textColor: "text-rose-600",
      description:
        "TMS optimizes outbound dispatch and final-mile road delivery, populating retail shelves.",
      telemetry: {
        status: "DELIVERED",
        metric1: "Store: Location #402",
        metric2: "POD: Confirmed",
        metric3: "Inventory: Updated",
      },
    },
  ];

  return (
    <div
      className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans flex flex-col items-center justify-center overflow-x-hidden relative"
      style={{
        backgroundImage: "radial-gradient(#e2e8f0 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes drawLine { 0% { stroke-dasharray: 400; stroke-dashoffset: 400; opacity: 0; } 10% { opacity: 1; } 100% { stroke-dasharray: 400; stroke-dashoffset: 0; opacity: 1; } }
        @keyframes waves { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }
        @keyframes wavesDelayed { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        @keyframes craneLiftComplex { 0% { transform: translateY(0); } 20% { transform: translateY(35px); } 40% { transform: translateY(35px); } 70% { transform: translateY(0) translateX(-20px); } 100% { transform: translateY(10px) translateX(-20px); } }
        @keyframes dashScroll { to { stroke-dashoffset: -20; } }
        @keyframes packetTravel { 0% { left: 0%; opacity: 0; transform: scale(0.5); } 10% { opacity: 1; transform: scale(1); } 90% { opacity: 1; transform: scale(1); } 100% { left: 100%; opacity: 0; transform: scale(0.5); } }
 
        /* YMS Animations */
        @keyframes ymsTruck1 { 0% { opacity: 0; transform: translateY(-5px); } 10% { opacity: 1; transform: translateY(0); } 45% { opacity: 1; transform: translateY(0); } 75% { opacity: 1; transform: translateY(20px) translateX(-10px) scale(0.8); } 100% { opacity: 0; transform: translateY(25px) translateX(-15px) scale(0.7); } }
        @keyframes ymsTruck2 { 0% { opacity: 0; transform: translateY(-5px); } 15% { opacity: 1; transform: translateY(0); } 50% { opacity: 1; transform: translateY(0); } 80% { opacity: 1; transform: translateY(30px) translateX(-25px) scale(0.8); } 100% { opacity: 0; transform: translateY(35px) translateX(-30px) scale(0.7); } }
        @keyframes ymsPackage1 { 0%, 15% { opacity: 0; transform: translateY(0); } 20% { opacity: 1; transform: translateY(0); } 35% { opacity: 1; transform: translateY(12px); } 40%, 100% { opacity: 0; transform: translateY(12px); } }
        @keyframes ymsPackage2 { 0%, 20% { opacity: 0; transform: translateY(0); } 25% { opacity: 1; transform: translateY(0); } 40% { opacity: 1; transform: translateY(12px); } 45%, 100% { opacity: 0; transform: translateY(12px); } }
        @keyframes ymsGate { 0%, 50% { transform: rotate(0deg); stroke: currentColor; } 60%, 85% { transform: rotate(-60deg); stroke: #a855f7; } 100% { transform: rotate(0deg); stroke: currentColor; } }
 
        /* Store Final Mile Animations */
        @keyframes storePkg1 { 0%, 25% { opacity: 0; transform: translate(0, 0) scale(0.5); } 30% { opacity: 1; transform: translate(0, 0) scale(1); } 45% { opacity: 1; transform: translate(-33px, -30px) scale(1); } 46%, 100% { opacity: 0; transform: translate(-33px, -30px) scale(1); } }
        @keyframes storePkg2 { 0%, 35% { opacity: 0; transform: translate(0, 0) scale(0.5); } 40% { opacity: 1; transform: translate(0, 0) scale(1); } 55% { opacity: 1; transform: translate(-23px, -27px) scale(1); } 56%, 100% { opacity: 0; transform: translate(-23px, -27px) scale(1); } }
        @keyframes storePkg3 { 0%, 50% { opacity: 0; transform: translate(0, 0) scale(0.5); } 55% { opacity: 1; transform: translate(0, 0) scale(1); } 70% { opacity: 1; transform: translate(0px, -10px) scale(1); } 71%, 100% { opacity: 0; transform: translate(0px, -10px) scale(1); } }
        @keyframes storePkg4 { 0%, 65% { opacity: 0; transform: translate(0, 0) scale(0.5); } 70% { opacity: 1; transform: translate(0, 0) scale(1); } 85% { opacity: 1; transform: translate(-30px, -15px) scale(1); } 86%, 100% { opacity: 0; transform: translate(-30px, -15px) scale(1); } }
 
        @keyframes shelfBox1 { 0%, 44% { opacity: 0; } 45%, 100% { opacity: 1; } }
        @keyframes shelfBox2 { 0%, 54% { opacity: 0; } 55%, 100% { opacity: 1; } }
        @keyframes shelfBox3 { 0%, 69% { opacity: 0; } 70%, 100% { opacity: 1; } }
        @keyframes shelfBox4 { 0%, 84% { opacity: 0; } 85%, 100% { opacity: 1; } }
 
        .animate-fade-in-up { opacity: 0; animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .path-draw { stroke-dasharray: 400; stroke-dashoffset: 400; }
        .draw-active .path-draw { animation: drawLine 2.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        
        .animate-waves { animation: waves 2s ease-in-out infinite; }
        .animate-waves-delayed { animation: wavesDelayed 2.5s ease-in-out infinite 0.5s; }
        .animate-crane-complex { animation: craneLiftComplex 3.5s ease-in-out forwards; }
        .animate-spin-fast { animation: spin 2s linear infinite; }
        .animate-dash-scroll { animation: dashScroll 1s linear infinite; }
        .animate-packet { animation: packetTravel 2s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
 
        .animate-yms-truck-1 { animation: ymsTruck1 3.5s ease-in-out forwards; }
        .animate-yms-truck-2 { animation: ymsTruck2 3.5s ease-in-out forwards; }
        .animate-yms-package-1 { animation: ymsPackage1 3.5s ease-in-out forwards; }
        .animate-yms-package-2 { animation: ymsPackage2 3.5s ease-in-out forwards; }
        .animate-yms-gate { animation: ymsGate 3.5s ease-in-out forwards; }
 
        .animate-store-pkg-1 { animation: storePkg1 3.5s ease-in-out forwards; }
        .animate-store-pkg-2 { animation: storePkg2 3.5s ease-in-out forwards; }
        .animate-store-pkg-3 { animation: storePkg3 3.5s ease-in-out forwards; }
        .animate-store-pkg-4 { animation: storePkg4 3.5s ease-in-out forwards; }
 
        .animate-shelf-1 { animation: shelfBox1 3.5s linear forwards; }
        .animate-shelf-2 { animation: shelfBox2 3.5s linear forwards; }
        .animate-shelf-3 { animation: shelfBox3 3.5s linear forwards; }
        .animate-shelf-4 { animation: shelfBox4 3.5s linear forwards; }
      `,
        }}
      />

      {/* Header & Controls */}
      <div
        className="text-center mb-10 max-w-3xl animate-fade-in-up flex flex-col items-center relative z-10"
        style={{ animationDelay: "0.1s" }}
      >
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 drop-shadow-sm">
          Ship-to-Shelf Orchestration
        </h1>
        <p className="text-lg text-slate-600 mb-8 font-medium">
          Control Tower visibility from origin port to final-mile execution.
        </p>

        <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-slate-200">
          {!isPlaying && currentStage === -1 ? (
            <button
              onClick={startJourney}
              className="flex items-center space-x-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
            >
              <PlayCircle size={24} /> <span>Initialize Simulation</span>
            </button>
          ) : (
            <div className="flex items-center space-x-6">
              <span className="text-sm font-bold text-slate-600 uppercase tracking-widest flex items-center">
                {currentStage < 4 ? (
                  <Wifi
                    size={16}
                    className="mr-2 animate-pulse text-blue-500"
                  />
                ) : (
                  <ShieldCheck size={16} className="mr-2 text-green-500" />
                )}
                {currentStage === -1
                  ? "Standby"
                  : currentStage === 4 && !isPlaying
                  ? "Execution Complete"
                  : `Tracking Phase ${currentStage + 1}/5`}
              </span>
              <button
                onClick={resetJourney}
                className="text-slate-400 hover:text-slate-800 transition-colors"
                title="Reset Simulation"
              >
                <RotateCcw size={20} />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w-full max-w-[1400px] relative mt-2 z-10">
        {/* Overarching Visibility Platform Layer */}
        <div
          className={`animate-fade-in-up mb-16 bg-white/90 backdrop-blur-md border shadow-xl rounded-2xl p-6 flex items-center justify-between relative overflow-hidden transition-all duration-500
            ${
              isPlaying
                ? "border-blue-300 shadow-blue-500/20"
                : "border-slate-200"
            }
          `}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-indigo-50/50 to-purple-50/50"></div>

          <div className="relative z-10 flex items-center space-x-5">
            <div
              className={`p-4 rounded-xl shadow-md transition-all duration-500 ${
                isPlaying
                  ? "bg-blue-600 text-white shadow-blue-500/40"
                  : "bg-slate-800 text-white"
              }`}
            >
              <Cpu size={32} className={isPlaying ? "animate-pulse" : ""} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                Kaleris Execution Visibility Platform (EVP)
              </h3>
              <div className="flex items-center mt-1 space-x-3 text-sm font-semibold text-slate-600">
                <span className="flex items-center">
                  <Activity size={14} className="mr-1 text-green-500" />{" "}
                  Real-time Sync
                </span>
                <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                <span>Data Harmonization</span>
                <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                <span>Predictive Analytics</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 hidden lg:flex items-center space-x-8 text-slate-300">
            <div className="flex flex-col items-center">
              <Globe2
                size={28}
                className={`transition-all duration-500 ${
                  currentStage >= 0 ? "text-blue-500" : ""
                }`}
              />
              <span className="text-[10px] mt-1 font-bold uppercase tracking-widest">
                Global
              </span>
            </div>
            <div className="h-8 w-[1px] bg-slate-200"></div>
            <div className="flex flex-col items-center">
              <Box
                size={28}
                className={`transition-all duration-500 delay-100 ${
                  currentStage >= 2 ? "text-indigo-500" : ""
                }`}
              />
              <span className="text-[10px] mt-1 font-bold uppercase tracking-widest">
                Freight
              </span>
            </div>
            <div className="h-8 w-[1px] bg-slate-200"></div>
            <div className="flex flex-col items-center">
              <Radio
                size={28}
                className={`transition-all duration-500 delay-200 ${
                  currentStage >= 4 ? "text-rose-500" : ""
                }`}
              />
              <span className="text-[10px] mt-1 font-bold uppercase tracking-widest">
                Local
              </span>
            </div>
          </div>
        </div>

        {/* Node Flow Container */}
        <div
          className={`flex flex-col lg:flex-row items-center justify-between relative px-4 lg:px-0 ${
            isLoaded ? "draw-active" : ""
          }`}
        >
          {/* Main Connector Background Line */}
          <div className="hidden lg:block absolute top-[35%] left-[8%] right-[8%] h-[2px] bg-slate-300 -z-10 rounded-full"></div>

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = currentStage === index;
            const isPast = currentStage > index;

            return (
              <React.Fragment key={step.id}>
                <div
                  className="animate-fade-in-up relative w-full lg:w-60 flex flex-col items-center mb-16 lg:mb-0 cursor-pointer group"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* SVG Canvas Container */}
                  <div
                    className={`
                    w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-2xl p-4 flex items-center justify-center shadow-lg border transition-all duration-700 z-20 relative
                    ${
                      isActive
                        ? step.activeColor + " scale-110 -translate-y-3"
                        : step.color +
                          (isPast ? " opacity-80 grayscale-[30%]" : "")
                    }
                    ${
                      hoveredStep === step.id && !isPlaying
                        ? "scale-105 shadow-xl"
                        : ""
                    }
                  `}
                  >
                    <div
                      style={{ animationDelay: `${1 + index * 0.2}s` }}
                      className="w-full h-full text-slate-800"
                    >
                      <IconComponent
                        isActive={isActive}
                        className="w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Desktop Node Data Box */}
                  <div
                    className={`
                    text-center mt-6 bg-white p-4 rounded-xl shadow-md border w-full min-h-[110px] flex flex-col justify-center transition-all duration-500 z-10
                    ${
                      isActive
                        ? "border-slate-400 shadow-xl scale-[1.02] bg-slate-900"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }
                  `}
                  >
                    <h4
                      className={`font-black text-xl tracking-tight transition-colors duration-300 ${
                        isActive ? "text-white" : step.textColor
                      }`}
                    >
                      {step.title}
                    </h4>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-widest mt-1 transition-colors duration-300 ${
                        isActive ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {step.subtitle}
                    </span>

                    {/* Tiny inline status indicator */}
                    <div
                      className={`mt-3 pt-3 border-t transition-colors duration-300 flex justify-center items-center text-[10px] font-bold uppercase tracking-wider ${
                        isActive
                          ? "border-slate-700 text-blue-400"
                          : "border-slate-100 text-slate-400"
                      }`}
                    >
                      {isActive ? (
                        <span className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2"></div>{" "}
                          ACTIVE
                        </span>
                      ) : isPast ? (
                        "COMPLETED"
                      ) : (
                        "PENDING"
                      )}
                    </div>
                  </div>

                  {/* Informational Tooltip */}
                  <div
                    className={`
                    absolute top-[108%] mt-4 w-72 bg-slate-900 text-white p-5 rounded-2xl shadow-2xl z-50 transition-all duration-500 pointer-events-none border border-slate-700
                    ${
                      hoveredStep === step.id && !isPlaying
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 translate-y-4 invisible"
                    }
                    lg:left-1/2 lg:-translate-x-1/2
                  `}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 rotate-45 border-l border-t border-slate-700 rounded-sm"></div>
                    <p className="text-sm font-medium text-slate-200 leading-relaxed text-center">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Animated Connectors */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center w-12 z-10 relative h-40">
                    {/* Animated Fill Line bridging the gap */}
                    <div className="absolute top-[35%] left-[-100%] right-[-100%] h-[2px] -translate-y-1/2 z-0">
                      <div
                        className="h-full bg-blue-500 transition-all duration-1000 ease-in-out"
                        style={{ width: currentStage > index ? "100%" : "0%" }}
                      ></div>
                      {/* Data Packets running along line while active */}
                      {currentStage === index && (
                        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full blur-[4px] animate-packet opacity-70"></div>
                      )}
                    </div>

                    <div
                      className={`
                      transition-all duration-700 ease-out relative z-10 bg-slate-50 p-1 rounded-full border border-transparent
                      ${
                        isActive || currentStage > index
                          ? "text-blue-500 scale-[1.75] bg-white border-blue-100 shadow-sm"
                          : "text-slate-300"
                      }
                    `}
                      style={{ top: "-15%" }}
                    >
                      <ArrowRight size={20} strokeWidth={3} />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Live Telemetry Console (Bottom HUD) */}
      <div
        className={`animate-fade-in-up mt-16 w-full max-w-5xl bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-800 transition-all duration-700 ${
          isPlaying || currentStage === 4
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
        style={{ animationDelay: "0.5s" }}
      >
        <div className="bg-slate-950 px-6 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center text-slate-400 text-xs font-mono tracking-widest">
            <Radio size={14} className="mr-2" /> LIVE TELEMETRY FEED
          </div>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/20"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between min-h-[120px]">
          {currentStage >= 0 && currentStage <= 4 ? (
            <>
              <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 w-full md:w-1/3 border-r border-slate-800">
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${steps[
                    currentStage
                  ].textColor
                    .replace("text-", "bg-")
                    .replace("600", "500/20")} ${
                    steps[currentStage].textColor
                  }`}
                >
                  {steps[currentStage].title} SYSTEM
                </span>
                <h2 className="text-2xl font-black text-white tracking-tight">
                  {steps[currentStage].telemetry.status}
                </h2>
              </div>

              <div className="flex flex-col md:flex-row w-full md:w-2/3 justify-around font-mono text-sm">
                <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                  <span className="text-slate-500 text-xs mb-1 uppercase">
                    DATA POINT 1
                  </span>
                  <span className="text-green-400 font-bold">
                    {steps[currentStage].telemetry.metric1}
                  </span>
                </div>
                <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                  <span className="text-slate-500 text-xs mb-1 uppercase">
                    DATA POINT 2
                  </span>
                  <span className="text-blue-400 font-bold">
                    {steps[currentStage].telemetry.metric2}
                  </span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-slate-500 text-xs mb-1 uppercase">
                    DATA POINT 3
                  </span>
                  <span className="text-purple-400 font-bold">
                    {steps[currentStage].telemetry.metric3}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full text-center text-slate-500 font-mono text-sm animate-pulse">
              AWAITING SYSTEM INITIALIZATION...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Diagram;

import React, { useState } from 'react';
import { Sparkles, Gauge, BatteryCharging, Wrench, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

interface PowerJourneyProps {
  onStartJourney: () => void;
}

export const PowerJourney: React.FC<PowerJourneyProps> = ({ onStartJourney }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Digital Health Diagnosis',
      subtitle: 'Accurate Conductance & State-of-Health Analysis',
      icon: Gauge,
      color: 'text-red-500',
      borderColor: 'border-red-500',
      description:
        'Before replacing, our certified technicians perform a multi-point digital conductance test measuring Cold Cranking Amps (CCA), internal cell resistance, and vehicle alternator charging output.',
      keyPoints: [
        'Electronic conductance test eliminates guesswork',
        'Alternator ripple & starter motor load verification',
        'Printed or WhatsApp digital diagnostic report',
      ],
      tag: 'Step 1: Diagnostics',
    },
    {
      number: '02',
      title: 'Precision OEM Matching',
      subtitle: 'Zero-Misfit Battery Selection',
      icon: BatteryCharging,
      color: 'text-amber-500',
      borderColor: 'border-amber-500',
      description:
        'We match your vehicle or home inverter with the exact manufacturer specification—accounting for AGM start-stop requirements, reserve capacity (RC), terminal layout (L/R polarity), and DIN sizing.',
      keyPoints: [
        'OEM capacity rating & DIN container code match',
        'Silver-alloy / C21 vibration-resistant tech options',
        'Custom warranty tiers from 24 to 72 months',
      ],
      tag: 'Step 2: Selection',
    },
    {
      number: '03',
      title: 'Doorstep Fitment & Memory Saver',
      subtitle: 'Zero Reset Electrical Installation',
      icon: Wrench,
      color: 'text-blue-500',
      borderColor: 'border-blue-500',
      description:
        'Our technician connects an OBD-II memory saver before removing the old battery, preventing infotainment resets, ECU clock wipes, and sensor calibration errors. Clamps are cleaned and anti-sulphate petroleum jelly applied.',
      keyPoints: [
        'OBD-II memory saver preserves radio and ECU settings',
        'Terminal de-oxidation and high-grade petroleum jelly',
        'Safe torque tightening on brass/lead clamps',
      ],
      tag: 'Step 3: Installation',
    },
    {
      number: '04',
      title: 'Digital Warranty & Green Recycling',
      subtitle: 'Paperless Registration & Pollution Control',
      icon: RefreshCw,
      color: 'text-emerald-500',
      borderColor: 'border-emerald-500',
      description:
        'We register your serial number on the manufacturer portal immediately. Your old spent lead-acid battery is collected with maximum fair scrap credit and routed to authorized pollution-controlled smelters.',
      keyPoints: [
        'Instant digital warranty SMS & invoice',
        'Maximum scrap rebate on old battery exchange',
        'Government CPCB compliant eco-friendly recycling',
      ],
      tag: 'Step 4: Peace of Mind',
    },
  ];

  return (
    <section id="power-journey" className="py-20 bg-neutral-900 border-b border-neutral-800 relative overflow-hidden">
      {/* Dynamic Glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SIGNATURE EXPERIENCE: THE POWER JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            THE 4-STEP POWER JOURNEY
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            How we ensure continuous, reliable power for your vehicle, inverter, and equipment from initial diagnosis to lifecycle recycling.
          </p>
        </div>

        {/* STEP PROGRESS TABS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            const Icon = s.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center gap-3 ${
                  isActive
                    ? 'bg-neutral-950 border-red-500 text-white shadow-lg'
                    : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-black text-sm shrink-0 ${
                    isActive ? 'bg-red-600 text-white' : 'bg-neutral-900 text-neutral-400'
                  }`}
                >
                  {s.number}
                </div>
                <div className="truncate">
                  <div className="text-xs font-bold truncate">{s.title}</div>
                  <div className="text-[10px] font-mono text-neutral-400 truncate">{s.tag}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ACTIVE STEP SPOTLIGHT CARD */}
        {(() => {
          const current = steps[activeStep];
          const Icon = current.icon;
          return (
            <div className="bg-neutral-950 p-8 sm:p-10 rounded-2xl border border-neutral-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono font-bold text-red-400">
                    {current.tag}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    Step {activeStep + 1} of 4
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {current.title}
                  </h3>
                  <h4 className="text-sm font-mono text-red-400 mt-1 font-semibold">
                    {current.subtitle}
                  </h4>
                  <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed">
                    {current.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {current.keyPoints.map((pt, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    onClick={onStartJourney}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs tracking-wide shadow-md transition-all cursor-pointer"
                  >
                    <span>Experience This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {activeStep < steps.length - 1 ? (
                    <button
                      onClick={() => setActiveStep((prev) => prev + 1)}
                      className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-bold text-xs transition-colors cursor-pointer"
                    >
                      Next Step →
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveStep(0)}
                      className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-bold text-xs transition-colors cursor-pointer"
                    >
                      Restart Journey ↺
                    </button>
                  )}
                </div>
              </div>

              {/* Graphical Icon Accent Box */}
              <div className="lg:col-span-4 flex items-center justify-center">
                <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-3xl bg-neutral-900/90 border border-neutral-800 p-6 flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden group">
                  <div className="absolute inset-0 bg-red-600/5 rounded-3xl group-hover:bg-red-600/10 transition-colors" />
                  <Icon className={`w-16 h-16 ${current.color} mb-3 relative z-10`} />
                  <span className="text-3xl font-black text-white font-mono relative z-10">
                    {current.number}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono uppercase mt-1 relative z-10">
                    Power Phase
                  </span>
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};

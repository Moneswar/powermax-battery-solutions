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
      subtitle: 'Conductance & State-of-Health Analysis',
      icon: Gauge,
      color: 'text-[#DC2626]',
      description:
        'Before replacing, our technicians perform a multi-point digital conductance test measuring Cold Cranking Amps (CCA), internal resistance, and alternator charging output.',
      keyPoints: [
        'Electronic conductance test eliminates guesswork',
        'Alternator ripple & starter motor load verification',
        'Digital diagnostic report via SMS/WhatsApp',
      ],
      tag: 'Step 1: Diagnostics',
    },
    {
      number: '02',
      title: 'Precision OEM Matching',
      subtitle: 'Zero-Misfit Battery Selection',
      icon: BatteryCharging,
      color: 'text-[#DC2626]',
      description:
        'We match your vehicle or inverter with the exact manufacturer specification—accounting for AGM start-stop requirements, reserve capacity (RC), and terminal polarity.',
      keyPoints: [
        'OEM capacity rating & DIN container code match',
        'Silver-alloy / vibration-resistant tech options',
        'Custom warranty tiers from 24 to 72 months',
      ],
      tag: 'Step 2: Selection',
    },
    {
      number: '03',
      title: 'Doorstep Fitment & Memory Saver',
      subtitle: 'Zero-Reset Electrical Installation',
      icon: Wrench,
      color: 'text-[#DC2626]',
      description:
        'Our technician connects an OBD-II memory saver before removing the old battery, preventing infotainment resets, ECU clock wipes, and sensor calibration loss.',
      keyPoints: [
        'OBD-II memory saver preserves radio & ECU settings',
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
      color: 'text-[#DC2626]',
      description:
        'We register your serial number on the manufacturer portal immediately. Your old spent lead-acid battery is collected with maximum fair scrap credit for eco-friendly recycling.',
      keyPoints: [
        'Instant digital warranty SMS & invoice',
        'Maximum scrap rebate on old battery exchange',
        'Government CPCB compliant eco-friendly recycling',
      ],
      tag: 'Step 4: Peace of Mind',
    },
  ];

  return (
    <section id="power-journey" className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF2F2] border border-[#DC2626]/20 text-[#DC2626] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>The PowerMax Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            The 4-Step Power Journey
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] font-medium">
            How we ensure continuous, reliable power for your vehicle, inverter, and equipment from initial diagnostics to lifecycle recycling.
          </p>
        </div>

        {/* STEP PROGRESS TABS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-center gap-3 ${
                  isActive
                    ? 'bg-white border-[#DC2626] text-[#0F172A] shadow-md'
                    : 'bg-white/80 border-[#E2E8F0] text-[#64748B] hover:border-[#CBD5E1] hover:text-[#0F172A]'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                    isActive ? 'bg-[#DC2626] text-white' : 'bg-[#F1F5F9] text-[#64748B]'
                  }`}
                >
                  {s.number}
                </div>
                <div className="truncate">
                  <div className="text-xs font-bold truncate text-[#0F172A]">{s.title}</div>
                  <div className="text-[10px] text-[#64748B] truncate">{s.tag}</div>
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
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#FEF2F2] border border-[#DC2626]/20 text-xs font-bold text-[#DC2626]">
                    {current.tag}
                  </span>
                  <span className="text-xs text-[#64748B] font-semibold">
                    Step {activeStep + 1} of 4
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    {current.title}
                  </h3>
                  <h4 className="text-sm text-[#DC2626] mt-1 font-bold">
                    {current.subtitle}
                  </h4>
                  <p className="text-sm sm:text-base text-[#64748B] mt-3 leading-relaxed">
                    {current.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {current.keyPoints.map((pt, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[#475569]">
                      <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-3.5">
                  <button
                    onClick={onStartJourney}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs tracking-wide shadow-xs transition-all cursor-pointer"
                  >
                    <span>Experience This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {activeStep < steps.length - 1 ? (
                    <button
                      onClick={() => setActiveStep((prev) => prev + 1)}
                      className="px-5 py-3 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0] font-bold text-xs transition-colors cursor-pointer"
                    >
                      Next Step →
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveStep(0)}
                      className="px-5 py-3 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0] font-bold text-xs transition-colors cursor-pointer"
                    >
                      Restart Journey ↺
                    </button>
                  )}
                </div>
              </div>

              {/* Graphical Icon Accent Box */}
              <div className="lg:col-span-4 flex items-center justify-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] p-6 flex flex-col items-center justify-center text-center shadow-xs relative overflow-hidden">
                  <Icon className="w-16 h-16 text-[#DC2626] mb-3 relative z-10" />
                  <span className="text-3xl font-black text-[#0F172A] font-mono relative z-10">
                    {current.number}
                  </span>
                  <span className="text-xs text-[#64748B] font-bold uppercase tracking-wider mt-1 relative z-10">
                    Process Phase
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

import React, { useState } from 'react';
import { TECHNOLOGIES_DATA, TechnologyInfo } from '../../data/technologies';
import { BatteryTechnology } from '../../types';
import { Layers, ShieldCheck, Zap, ArrowRight, Cpu } from 'lucide-react';

export const BatteryDnaSection: React.FC = () => {
  const techList = Object.values(TECHNOLOGIES_DATA).slice(0, 6);
  const [selectedTechId, setSelectedTechId] = useState<BatteryTechnology>(techList[0].id);
  const [activeLayerKey, setActiveLayerKey] = useState<keyof TechnologyInfo['internalAnatomy']>('positivePlate');

  const currentTech = TECHNOLOGIES_DATA[selectedTechId] || techList[0];

  const anatomyLayers: { key: keyof TechnologyInfo['internalAnatomy']; label: string; iconLabel: string }[] = [
    { key: 'positivePlate', label: 'Positive Plate & Grid Alloy', iconLabel: '1' },
    { key: 'negativePlate', label: 'Negative Active Mass', iconLabel: '2' },
    { key: 'electrolyte', label: 'Electrolyte Formulation', iconLabel: '3' },
    { key: 'separator', label: 'Porous Membrane / AGM Separator', iconLabel: '4' },
    { key: 'casing', label: 'Shock-Proof Container & Lid', iconLabel: '5' },
  ];

  return (
    <section id="battery-dna" className="py-20 bg-neutral-900 border-b border-neutral-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>SIGNATURE EXPERIENCE: INSIDE THE CELL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            BATTERY DNA & ENGINEERING
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Explore the internal architecture and metallurgical innovations that differentiate premium automotive, tubular, and lithium energy storage systems.
          </p>
        </div>

        {/* TECHNOLOGY CHEMISTRY SWITCHER TABS */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 custom-scrollbar mb-10">
          {techList.map((tech) => {
            const isSelected = selectedTechId === tech.id;
            return (
              <button
                key={tech.id}
                onClick={() => {
                  setSelectedTechId(tech.id);
                  setActiveLayerKey('positivePlate');
                }}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/20'
                    : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700'
                }`}
              >
                {tech.name}
              </button>
            );
          })}
        </div>

        {/* INTERACTIVE ANATOMY EXPLORER STAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: INTERACTIVE ANATOMICAL LAYERS SELECTOR */}
          <div className="lg:col-span-5 bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase text-red-400 font-bold">
                <Layers className="w-4 h-4" />
                <span>Internal Anatomy Layers ({currentTech.name})</span>
              </div>

              <div className="space-y-3">
                {anatomyLayers.map((layer) => {
                  const isLayerActive = activeLayerKey === layer.key;
                  return (
                    <button
                      key={layer.key}
                      onClick={() => setActiveLayerKey(layer.key)}
                      className={`w-full p-4 rounded-xl text-left transition-all border cursor-pointer flex items-start justify-between ${
                        isLayerActive
                          ? 'bg-red-600/15 border-red-500 text-white shadow-md'
                          : 'bg-neutral-900/80 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:text-white'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`w-6 h-6 rounded-full text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                            isLayerActive ? 'bg-red-500 text-white' : 'bg-neutral-800 text-neutral-400'
                          }`}
                        >
                          {layer.iconLabel}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold leading-tight">{layer.label}</h4>
                          <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
                            {currentTech.internalAnatomy[layer.key]}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className={`w-4 h-4 mt-1 shrink-0 ${isLayerActive ? 'text-red-400' : 'text-neutral-600'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Chemistry Highlights */}
            <div className="pt-4 border-t border-neutral-800/80 grid grid-cols-2 gap-3 text-xs">
              <div className="bg-neutral-900 p-2.5 rounded-lg border border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-400 block">DESIGNED LIFESPAN</span>
                <span className="font-bold text-amber-400">{currentTech.lifespanYears}</span>
              </div>
              <div className="bg-neutral-900 p-2.5 rounded-lg border border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-400 block">ENERGY EFFICIENCY</span>
                <span className="font-bold text-emerald-400">{currentTech.efficiency}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: DEEP DIVE ANATOMY & SCIENTIFIC BENEFIT CARD */}
          <div className="lg:col-span-7 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div>
                  <span className="text-xs font-mono uppercase text-neutral-400">
                    Chemical Specification • {currentTech.maintenanceType}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-0.5">
                    {anatomyLayers.find((l) => l.key === activeLayerKey)?.label}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
                  <Zap className="w-5 h-5" />
                </div>
              </div>

              {/* High-Resolution Scientific Breakdown */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800">
                  <span className="text-[10px] font-mono uppercase text-red-400 font-bold block mb-1">
                    Anatomical Material Composition
                  </span>
                  <p className="text-sm text-neutral-200 leading-relaxed">
                    {currentTech.internalAnatomy[activeLayerKey]}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800">
                  <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block mb-1">
                    Thermal & Environmental Endurance
                  </span>
                  <p className="text-sm text-neutral-200 leading-relaxed">
                    Operates reliably within {currentTech.temperatureRange} with up to {currentTech.dischargeDepth} discharge resilience.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block mb-1">
                    Best Application Scenarios
                  </span>
                  <p className="text-sm text-neutral-200 leading-relaxed">
                    {currentTech.bestUseCases.join(' • ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Tech Advantages Grid */}
            <div className="pt-4 border-t border-neutral-800">
              <span className="text-[11px] font-mono uppercase text-neutral-400 font-bold block mb-2">
                Why We Recommend {currentTech.name}:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentTech.pros.map((adv, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-200"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                    <span>{adv}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

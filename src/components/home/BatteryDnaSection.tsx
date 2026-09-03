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
    <section id="battery-dna" className="py-20 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF2F2] border border-[#DC2626]/20 text-[#DC2626] text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Battery Engineering & Chemistry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Inside the Battery Cell
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] font-medium">
            Explore the metallurgy, grid chemistry, and separation technologies that power premium automotive, tubular, and deep cycle batteries.
          </p>
        </div>

        {/* TECHNOLOGY CHEMISTRY SWITCHER TABS */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 custom-scrollbar mb-8">
          {techList.map((tech) => {
            const isSelected = selectedTechId === tech.id;
            return (
              <button
                key={tech.id}
                onClick={() => {
                  setSelectedTechId(tech.id);
                  setActiveLayerKey('positivePlate');
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#DC2626] border-[#DC2626] text-white shadow-xs'
                    : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]'
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
          <div className="lg:col-span-5 bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs uppercase text-[#DC2626] font-bold tracking-wide">
                <Layers className="w-4 h-4" />
                <span>Internal Anatomy Layers ({currentTech.name})</span>
              </div>

              <div className="space-y-2.5">
                {anatomyLayers.map((layer) => {
                  const isLayerActive = activeLayerKey === layer.key;
                  return (
                    <button
                      key={layer.key}
                      onClick={() => setActiveLayerKey(layer.key)}
                      className={`w-full p-3.5 rounded-xl text-left transition-all border cursor-pointer flex items-start justify-between ${
                        isLayerActive
                          ? 'bg-[#FEF2F2] border-[#DC2626]/30 text-[#0F172A] shadow-xs'
                          : 'bg-white border-[#E2E8F0] text-[#64748B] hover:border-[#CBD5E1] hover:text-[#0F172A]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${
                            isLayerActive ? 'bg-[#DC2626] text-white' : 'bg-[#E2E8F0] text-[#64748B]'
                          }`}
                        >
                          {layer.iconLabel}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold leading-tight text-[#0F172A]">{layer.label}</h4>
                          <p className="text-xs text-[#64748B] mt-1 line-clamp-1">
                            {currentTech.internalAnatomy[layer.key].material}
                          </p>
                        </div>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform shrink-0 mt-1 ${
                          isLayerActive ? 'text-[#DC2626] translate-x-1' : 'text-[#94A3B8]'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#16A34A] shrink-0" />
              <p className="text-xs text-[#64748B] font-medium">
                Tested & verified to comply with Indian Standard (IS 14257 / IS 13369) battery guidelines.
              </p>
            </div>
          </div>

          {/* RIGHT: DETAILED LAYER BREAKDOWN */}
          <div className="lg:col-span-7 bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-4">
                <div>
                  <span className="text-xs font-bold uppercase text-[#DC2626] tracking-wide">
                    Anatomy Component
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                    {anatomyLayers.find((l) => l.key === activeLayerKey)?.label}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-[#0F172A] border border-[#E2E8F0]">
                  {currentTech.name}
                </span>
              </div>

              {/* Material Spec Card */}
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
                <span className="text-[11px] font-bold uppercase text-[#64748B]">Material & Alloy Composition</span>
                <p className="text-sm font-bold text-[#0F172A]">
                  {currentTech.internalAnatomy[activeLayerKey].material}
                </p>
              </div>

              {/* Primary Function */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase text-[#64748B]">Core Functional Role</span>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {currentTech.internalAnatomy[activeLayerKey].role}
                </p>
              </div>

              {/* Engineering Innovation Highlight */}
              <div className="p-4 rounded-xl bg-[#FEF2F2] border border-[#DC2626]/20 space-y-1">
                <span className="text-xs font-bold text-[#DC2626] flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>Engineering Advantage</span>
                </span>
                <p className="text-xs text-[#991B1B] font-medium leading-relaxed">
                  {currentTech.internalAnatomy[activeLayerKey].advantage}
                </p>
              </div>
            </div>

            {/* Quick Specs Footer */}
            <div className="pt-4 border-t border-[#E2E8F0] grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#64748B]">Cycle Life</span>
                <div className="text-xs font-bold text-[#0F172A] mt-0.5">{currentTech.cycleLifeRating}</div>
              </div>
              <div className="border-x border-[#E2E8F0]">
                <span className="text-[10px] uppercase font-bold text-[#64748B]">Self Discharge</span>
                <div className="text-xs font-bold text-[#0F172A] mt-0.5">{currentTech.selfDischargeRate}</div>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#64748B]">Temperature</span>
                <div className="text-xs font-bold text-[#0F172A] mt-0.5">{currentTech.operatingTempRange}</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

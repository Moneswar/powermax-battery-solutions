import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Zap,
  Wrench,
  Clock,
  Sparkles,
  RotateCcw,
} from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onScrollToFinder: () => void;
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onScrollToFinder,
  onContactClick,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [timerKey, setTimerKey] = useState(0);

  const slides = [
    {
      id: 0,
      headlinePrefix: 'Power That Moves ',
      headlineHighlight: 'You',
      subtitle: 'High performance batteries for every need',
      cards: [
        {
          icon: ShieldCheck,
          title: 'Longer Life',
          subtitle: 'Built to last',
        },
        {
          icon: Zap,
          title: 'High Cranking Power',
          subtitle: 'Instant Start',
        },
        {
          icon: Wrench,
          title: 'Low Maintenance',
          subtitle: 'Hassle Free',
        },
      ],
    },
    {
      id: 1,
      headlinePrefix: 'Express Doorstep ',
      headlineHighlight: 'Delivery',
      subtitle: 'Quick 30–60 minute installation by certified technicians',
      cards: [
        {
          icon: Clock,
          title: 'Express Arrival',
          subtitle: '30–60 Minutes',
        },
        {
          icon: ShieldCheck,
          title: 'Memory Saver',
          subtitle: 'No ECU Reset',
        },
        {
          icon: RotateCcw,
          title: 'Old Battery Scrap',
          subtitle: 'Instant Rebate',
        },
      ],
    },
    {
      id: 2,
      headlinePrefix: '100% Genuine Brand ',
      headlineHighlight: 'Warranty',
      subtitle: 'Authorized distributor for Amaron, Exide & SF Sonic',
      cards: [
        {
          icon: ShieldCheck,
          title: 'Official Warranty',
          subtitle: 'Up to 72 Months',
        },
        {
          icon: Sparkles,
          title: 'Paperless Registration',
          subtitle: 'Digital Portal',
        },
        {
          icon: Zap,
          title: 'OEM Certified',
          subtitle: 'Factory Barcoded',
        },
      ],
    },
  ];

  // Auto-play timer for carousel: automatically rotates every 1 second (1000ms)
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setDirection('next');
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeSlide, isPaused, timerKey, slides.length]);

  const handleDotClick = (index: number) => {
    if (index === activeSlide) {
      setTimerKey((prev) => prev + 1);
      return;
    }
    setDirection(index > activeSlide ? 'next' : 'prev');
    setActiveSlide(index);
    setTimerKey((prev) => prev + 1);
  };

  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('(hover: hover)').matches) {
      return;
    }
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  const currentSlide = slides[activeSlide];

  return (
    <section
      id="hero-section"
      className="relative pt-20 sm:pt-24 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* WIDE, SHORT PREMIUM HERO BANNER CONTAINER */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl lg:rounded-[28px] overflow-hidden border border-[#E2E8F0] shadow-[0_4px_20px_rgba(0,0,0,0.03)] bg-gradient-to-r from-[#F8FAFC] via-[#F4F9F5] to-[#EEF6F8] min-h-[360px] sm:min-h-[320px] lg:h-[340px] flex items-center">
        
        {/* BACKGROUND AMBIENT ENERGY WAVES & GLOW */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Soft Green Light Glow Behind Batteries */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-gradient-to-tr from-[#22C55E]/15 via-[#16A34A]/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute right-1/3 bottom-0 w-[260px] h-[180px] bg-[#38BDF8]/8 rounded-full blur-2xl" />

          {/* Smooth Green Ribbon Energy Waves (Matching Reference) */}
          <svg
            className="absolute inset-0 w-full h-full opacity-65"
            viewBox="0 0 1200 340"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-50 280 C 200 300, 380 280, 560 210 C 720 150, 880 180, 1250 140"
              stroke="url(#greenWaveGrad1)"
              strokeWidth="4"
              strokeLinecap="round"
              className="animate-pulse"
              style={{ animationDuration: '6s' }}
            />
            <path
              d="M-50 295 C 240 310, 440 260, 620 190 C 790 130, 940 160, 1250 120"
              stroke="url(#greenWaveGrad2)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M100 320 C 350 330, 500 240, 680 170 C 850 110, 1020 140, 1250 100"
              stroke="url(#greenWaveGrad3)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="greenWaveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22C55E" stopOpacity="0.05" />
                <stop offset="35%" stopColor="#16A34A" stopOpacity="0.4" />
                <stop offset="65%" stopColor="#4ADE80" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="greenWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22C55E" stopOpacity="0.0" />
                <stop offset="40%" stopColor="#22C55E" stopOpacity="0.5" />
                <stop offset="70%" stopColor="#86EFAC" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="greenWaveGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#16A34A" stopOpacity="0.0" />
                <stop offset="50%" stopColor="#4ADE80" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0.0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating Leaves / Organic Energy Particles */}
          <div className="absolute top-10 left-[42%] w-2 h-3.5 bg-[#22C55E]/40 rounded-full rotate-45 blur-[0.5px] animate-[floatLeaf_7s_ease-in-out_infinite]" />
          <div className="absolute bottom-16 left-[32%] w-2.5 h-4 bg-[#16A34A]/35 rounded-full -rotate-12 blur-[0.5px] animate-[floatLeaf_9s_ease-in-out_infinite_delay-1000]" />
          <div className="absolute top-14 right-[38%] w-2 h-3 bg-[#4ADE80]/45 rounded-full rotate-[60deg] blur-[0.5px] animate-[floatLeaf_6s_ease-in-out_infinite_delay-500]" />
          <div className="absolute top-8 right-[12%] w-2 h-3 bg-[#16A34A]/30 rounded-full -rotate-45 blur-[0.5px]" />
          <div className="absolute bottom-12 right-[8%] w-2.5 h-3.5 bg-[#22C55E]/30 rounded-full rotate-[30deg] blur-[0.5px]" />
        </div>

        {/* BANNER CONTENT GRID: LEFT TEXT & CARDS + RIGHT BATTERY PODIUM */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 py-6 sm:py-7 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
          
          {/* LEFT SIDE: HEADLINE + SUBTITLE + 3 BENEFIT CARDS WITH SMOOTH TRANSITION */}
          <div className="lg:col-span-6 xl:col-span-7 text-left overflow-hidden min-h-[190px] sm:min-h-[175px] flex flex-col justify-center">
            <div
              key={currentSlide.id}
              className={`space-y-4 ${
                direction === 'next'
                  ? 'animate-hero-slide-next'
                  : 'animate-hero-slide-prev'
              }`}
            >
              {/* Main Headline */}
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
                  <span>{currentSlide.headlinePrefix}</span>
                  <span className="text-[#16A34A]">{currentSlide.headlineHighlight}</span>
                  <span className="inline-flex items-center ml-2 text-[#16A34A]">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 fill-[#16A34A] text-[#16A34A] -mt-1 inline" />
                  </span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-xs sm:text-sm lg:text-base text-[#475569] font-medium tracking-normal mt-1.5">
                  {currentSlide.subtitle}
                </p>
              </div>

              {/* 3 Compact Benefit Cards Side-by-Side */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 max-w-xl">
                {currentSlide.cards.map((card, idx) => {
                  const IconComponent = card.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white/95 backdrop-blur-xs border border-[#E2E8F0] rounded-xl sm:rounded-2xl px-3.5 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center gap-2.5 hover:border-[#16A34A]/40 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F0FDF4] flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4 text-[#16A34A] fill-[#16A34A]/20" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-xs font-bold text-[#0F172A] leading-tight truncate">
                          {card.title}
                        </h2>
                        <p className="text-[11px] text-[#64748B] font-medium leading-tight truncate mt-0.5">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: AUTHENTIC 3-BATTERY SHOWROOM PODIUM (STABLE, NO FLOATING) */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center lg:justify-end">
            <div
              onClick={onExploreProducts}
              className="relative w-full max-w-[460px] sm:max-w-[490px] cursor-pointer group"
              title="Explore Amaron, Exide and SF Sonic batteries"
            >
              {/* Realistic Ground Contact Shadow under Podium */}
              <div className="absolute inset-x-8 bottom-0 h-6 bg-slate-900/10 rounded-full blur-md pointer-events-none" />

              {/* The Authentic 3-Battery Showroom Podium Artwork */}
              <img
                src="/images/hero/hero-batteries-podium.webp"
                alt="Amaron, Exide and SF Sonic authentic batteries on showroom podium"
                className="w-full h-auto object-contain select-none drop-shadow-[0_8px_20px_rgba(15,23,42,0.06)] transition-transform duration-300 group-hover:scale-[1.01]"
                loading="eager"
                draggable={false}
              />
            </div>
          </div>

        </div>

        {/* CAROUSEL CONTROLS: BOTTOM CENTER NAVIGATION DOTS */}
        <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => handleDotClick(idx)}
              className={`transition-all duration-300 cursor-pointer rounded-full ${
                activeSlide === idx
                  ? 'w-5 h-2 bg-[#16A34A]'
                  : 'w-2 h-2 bg-[#CBD5E1] hover:bg-[#94A3B8]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

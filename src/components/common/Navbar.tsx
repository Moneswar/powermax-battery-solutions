import React, { useState, useEffect } from 'react';
import { SITE_CONFIG, QUICK_CONTACT_LINKS } from '../../config/siteConfig';
import {
  Zap,
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Car,
  Bike,
  Truck,
  Sun,
  ShieldCheck,
} from 'lucide-react';
import { BatteryCategory } from '../../types';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string, params?: { category?: BatteryCategory; brand?: string }) => void;
  onOpenEnquiryModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenEnquiryModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products', hasDropdown: true },
    { id: 'brands', label: 'Brands' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const quickCategories: { label: string; cat: BatteryCategory; icon: any }[] = [
    { label: 'Car & SUV Batteries', cat: 'Automotive', icon: Car },
    { label: 'Bike & Scooter Batteries', cat: 'Two-Wheeler', icon: Bike },
    { label: 'Inverter & UPS Batteries', cat: 'Inverter & Home UPS', icon: Zap },
    { label: 'Truck & Commercial', cat: 'Commercial', icon: Truck },
    { label: 'Solar Storage Batteries', cat: 'Solar Storage', icon: Sun },
  ];

  const handleNavClick = (pageId: string) => {
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(pageId);
  };

  const handleCategoryClick = (cat: BatteryCategory) => {
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate('products', { category: cat });
  };

  return (
    <>
      <header
        id="main-navbar-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/95 backdrop-blur-md shadow-xl border-b border-neutral-800/80 py-2.5'
            : 'bg-neutral-950/80 backdrop-blur-xs border-b border-neutral-800/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* BRAND LOGO */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-hidden"
            aria-label="PowerMax Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-700 via-red-600 to-rose-500 p-0.5 shadow-lg shadow-red-600/30 flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-red-500 fill-red-500 transition-transform group-hover:rotate-12" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline tracking-tight">
                <span className="text-xl font-extrabold text-white">POWER</span>
                <span className="text-xl font-extrabold text-red-500">MAX</span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block -mt-1">
                Battery Solutions
              </span>
            </div>
          </button>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick(link.id)}
                      className={`px-3.5 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                        isActive
                          ? 'text-red-500 bg-red-500/10 font-bold'
                          : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          productsDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Products Dropdown Menu */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 p-2 bg-neutral-900 border border-neutral-700/80 rounded-xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
                        <div className="px-3 py-1.5 text-[11px] font-mono uppercase text-neutral-400 font-bold border-b border-neutral-800">
                          Popular Categories
                        </div>
                        {quickCategories.map((qc) => {
                          const IconComp = qc.icon;
                          return (
                            <button
                              key={qc.cat}
                              onClick={() => handleCategoryClick(qc.cat)}
                              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors text-left cursor-pointer"
                            >
                              <IconComp className="w-4 h-4 text-red-500 shrink-0" />
                              <span>{qc.label}</span>
                            </button>
                          );
                        })}
                        <div className="mt-1 pt-1 border-t border-neutral-800">
                          <button
                            onClick={() => handleNavClick('products')}
                            className="w-full text-center py-2 text-xs font-bold text-red-400 hover:text-red-300 hover:bg-red-950/40 rounded-lg transition-colors cursor-pointer"
                          >
                            Explore All Batteries →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'text-red-500 bg-red-500/10 font-bold'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* DESKTOP RIGHT CALL & ENQUIRY ACTIONS */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Phone Link */}
            <a
              href={QUICK_CONTACT_LINKS.callUrl}
              className="flex items-center gap-2 text-xs font-semibold text-neutral-200 hover:text-white px-2 py-1 transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-red-400">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="tracking-wide font-mono">{SITE_CONFIG.phoneDisplay}</span>
            </a>

            {/* Call Now CTA Button */}
            <a
              href={QUICK_CONTACT_LINKS.callUrl}
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs tracking-wide shadow-md shadow-red-600/20 transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              Call Us Now
            </a>

            {/* Quick WhatsApp Link */}
            <a
              href={QUICK_CONTACT_LINKS.whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 transition-colors"
              title="Chat on WhatsApp"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          {/* MOBILE MENU TOGGLE & FAST ACTIONS */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={QUICK_CONTACT_LINKS.callUrl}
              className="p-2 rounded-lg bg-red-600 text-white shadow-sm"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER NAVIGATION */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-50 lg:hidden bg-neutral-950/95 backdrop-blur-xl flex flex-col justify-between p-6 animate-in slide-in-from-top-4 duration-200"
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-lg font-bold text-white tracking-tight">
                  POWER<span className="text-red-500">MAX</span>
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-neutral-400 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="py-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-left transition-colors ${
                      isActive
                        ? 'bg-red-600/20 text-red-400 border border-red-500/30'
                        : 'text-neutral-200 hover:bg-neutral-800/80'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-neutral-500">→</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-neutral-800">
            <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>Authorized Battery Hub • Doorstep Installation</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={QUICK_CONTACT_LINKS.callUrl}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-600 text-white font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={QUICK_CONTACT_LINKS.whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

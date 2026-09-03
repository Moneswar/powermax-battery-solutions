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
  BatteryCharging,
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
      if (window.scrollY > 15) {
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
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-[#E2E8F0] py-2.5'
            : 'bg-white/90 backdrop-blur-xs border-b border-[#E2E8F0]/80 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* BRAND LOGO (POWERMAX RED ACCENT) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-hidden"
            aria-label="PowerMax Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#DC2626] to-[#EF4444] p-0.5 shadow-md shadow-[#DC2626]/20 flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#B91C1C] rounded-[10px] flex items-center justify-center">
                <BatteryCharging className="w-5 h-5 text-white transition-transform group-hover:rotate-6" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline tracking-tight">
                <span className="text-xl font-extrabold text-[#0F172A]">Power</span>
                <span className="text-xl font-extrabold text-[#DC2626]">Max</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#64748B] block -mt-1">
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
                      className={`px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                        isActive
                          ? 'text-[#DC2626] bg-[#FEF2F2] font-bold'
                          : 'text-[#0F172A] hover:text-[#DC2626] hover:bg-[#F8FAFC]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 text-[#64748B] ${
                          productsDropdownOpen ? 'rotate-180 text-[#DC2626]' : ''
                        }`}
                      />
                    </button>

                    {/* Products Dropdown Menu */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1.5 w-64 p-2 bg-white border border-[#E2E8F0] rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.1)] backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
                        <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#64748B] border-b border-[#F1F5F9]">
                          Popular Categories
                        </div>
                        <div className="py-1 space-y-0.5">
                          {quickCategories.map((qc) => {
                            const IconComp = qc.icon;
                            return (
                              <button
                                key={qc.cat}
                                onClick={() => handleCategoryClick(qc.cat)}
                                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-[#0F172A] hover:text-[#DC2626] hover:bg-[#FEF2F2] rounded-xl transition-colors text-left cursor-pointer"
                              >
                                <IconComp className="w-4 h-4 text-[#DC2626] shrink-0" />
                                <span>{qc.label}</span>
                              </button>
                            );
                          })}
                        </div>
                        <div className="mt-1 pt-1 border-t border-[#F1F5F9]">
                          <button
                            onClick={() => handleNavClick('products')}
                            className="w-full text-center py-2 text-xs font-bold text-[#DC2626] hover:bg-[#FEF2F2] rounded-xl transition-colors cursor-pointer"
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
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#DC2626] bg-[#FEF2F2] font-bold'
                      : 'text-[#0F172A] hover:text-[#DC2626] hover:bg-[#F8FAFC]'
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
              className="flex items-center gap-2 text-xs font-bold text-[#0F172A] hover:text-[#DC2626] px-2.5 py-1.5 rounded-xl hover:bg-[#F8FAFC] transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-[#FEF2F2] border border-[#DC2626]/20 flex items-center justify-center text-[#DC2626]">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="tracking-wide font-mono">{SITE_CONFIG.phoneDisplay}</span>
            </a>

            {/* Enquire Now CTA Button (PowerMax Red) */}
            <button
              onClick={onOpenEnquiryModal}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs tracking-wide shadow-sm hover:shadow-md shadow-[#DC2626]/20 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire Now</span>
            </button>
          </div>

          {/* MOBILE MENU TOGGLE & FAST ACTIONS */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={QUICK_CONTACT_LINKS.callUrl}
              className="p-2.5 rounded-xl bg-[#FEF2F2] text-[#DC2626] border border-[#DC2626]/20 shadow-xs"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white text-[#0F172A] hover:bg-[#F8FAFC] border border-[#E2E8F0] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER NAVIGATION */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-50 lg:hidden bg-white/98 backdrop-blur-xl flex flex-col justify-between p-6 animate-in slide-in-from-top-4 duration-200"
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#DC2626] flex items-center justify-center text-white">
                  <BatteryCharging className="w-4 h-4" />
                </div>
                <span className="text-lg font-bold text-[#0F172A] tracking-tight">
                  Power<span className="text-[#DC2626]">Max</span>
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#64748B] hover:text-[#0F172A] rounded-lg hover:bg-[#F8FAFC]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="py-5 space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-left transition-colors ${
                      isActive
                        ? 'bg-[#FEF2F2] text-[#DC2626] font-bold border border-[#DC2626]/20'
                        : 'text-[#0F172A] hover:bg-[#F8FAFC]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-[#64748B]">→</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-3 pt-5 border-t border-[#E2E8F0]">
            <div className="flex items-center gap-2 text-xs text-[#64748B] mb-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
              <span>100% Genuine Batteries • Express Doorstep Fitment</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={QUICK_CONTACT_LINKS.callUrl}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] font-bold text-sm shadow-xs hover:bg-[#F8FAFC]"
              >
                <Phone className="w-4 h-4 text-[#DC2626]" />
                Call Us
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiryModal();
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#DC2626] text-white font-bold text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Enquire
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS_DATA } from '../data/products';
import { ProductImage } from '../components/common/ProductImage';
import { ProductCard } from '../components/products/ProductCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { SITE_CONFIG, QUICK_CONTACT_LINKS } from '../config/siteConfig';
import {
  ShieldCheck,
  Zap,
  Phone,
  MessageCircle,
  CheckCircle2,
  Car,
  Wrench,
  RotateCcw,
  ArrowRight,
  Layers,
  HelpCircle,
  Check,
} from 'lucide-react';

interface ProductDetailPageProps {
  product: Product;
  onNavigateHome: () => void;
  onNavigateProducts: () => void;
  onSelectProduct: (product: Product) => void;
  onOpenEnquiry: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onNavigateHome,
  onNavigateProducts,
  onSelectProduct,
  onOpenEnquiry,
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'compatibility' | 'warranty' | 'faq'>('specs');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);

  const angleLabels = ['Front Elevation', '3/4 Perspective View', 'Top Terminal Deck'];

  // Related products from same category or brand
  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand)
  ).slice(0, 3);

  const handleWhatsAppEnquiry = () => {
    const text = `Hi ${SITE_CONFIG.businessName}, I would like to enquire about the best price and doorstep installation for ${product.brand} ${product.name} (${product.modelCode || ''}, ${product.capacity}, ${product.voltage}).`;
    window.open(QUICK_CONTACT_LINKS.whatsappUrl(text), '_blank');
  };

  const galleryImages = product.images && product.images.length > 0 ? product.images : [product.image];

  const brandLower = product.brand.toLowerCase();
  let brandBadgeBg = 'bg-[#DC2626]/10 text-[#DC2626] border-[#DC2626]/20';
  if (brandLower.includes('amaron')) {
    brandBadgeBg = 'bg-[#16A34A]/10 text-[#16A34A] border-[#16A34A]/25';
  } else if (brandLower.includes('exide')) {
    brandBadgeBg = 'bg-[#DC2626]/10 text-[#DC2626] border-[#DC2626]/25';
  } else if (brandLower.includes('sf sonic') || brandLower.includes('sf-sonic')) {
    brandBadgeBg = 'bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/25';
  }

  return (
    <>
      <SeoHead
        title={`${product.brand} ${product.name} (${product.capacity}, ${product.voltage})`}
        description={`Specifications, warranty details, and doorstep fitment for ${product.brand} ${product.name}. 100% genuine with ${product.warrantyMonths} months warranty.`}
        schemaType="Product"
        productSchemaData={{
          name: product.name,
          brand: product.brand,
          description: product.shortDescription,
          model: product.modelCode,
          category: product.category,
        }}
      />

      <div id="product-detail-page" className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: 'Products', onClick: onNavigateProducts },
              { label: product.name },
            ]}
            onNavigateHome={onNavigateHome}
          />

          {/* MAIN PRODUCT HEADER & STAGE */}
          <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-[#E2E8F0]">
            
            {/* LEFT: AUTHENTIC PRODUCT PHOTOGRAPHY GALLERY STAGE */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2E8F0] shadow-xs relative overflow-hidden flex flex-col items-center justify-center">
                {/* Brand & Model Pills */}
                <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full border font-bold text-xs ${brandBadgeBg}`}>
                    {product.brand} Genuine
                  </span>
                  {product.modelCode && (
                    <span className="px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] font-semibold text-xs">
                      {product.modelCode}
                    </span>
                  )}
                </div>

                {/* Main High-Res Photo Stage */}
                <div className="my-auto py-6 w-full flex items-center justify-center">
                  <ProductImage
                    product={product}
                    selectedImageIndex={selectedPhotoIndex}
                    aspectRatio="4/3"
                    className="h-72 sm:h-96 w-full max-w-[440px] bg-transparent border-0"
                    priority={true}
                  />
                </div>

                {/* Bottom Trust Highlight */}
                <div className="w-full pt-4 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between text-xs text-[#64748B] gap-2 font-medium">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                    <span>100% Genuine Barcoded Unit</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Wrench className="w-4 h-4 text-[#DC2626]" />
                    <span>Free Doorstep Fitment Included</span>
                  </div>
                </div>
              </div>

              {/* Multi-angle Thumbnail Strip */}
              {galleryImages.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {galleryImages.map((imgUrl, idx) => {
                    const isSelected = selectedPhotoIndex === idx;
                    return (
                      <button
                        key={imgUrl}
                        onClick={() => setSelectedPhotoIndex(idx)}
                        className={`p-2 rounded-2xl border transition-all text-left flex items-center gap-3 cursor-pointer ${
                          isSelected
                            ? 'bg-white border-[#DC2626] ring-2 ring-[#DC2626]/20 shadow-xs'
                            : 'bg-white border-[#E2E8F0] hover:border-[#CBD5E1] opacity-75 hover:opacity-100'
                        }`}
                      >
                        <div className="w-12 h-12 bg-[#F8FAFC] rounded-xl flex items-center justify-center p-1 shrink-0">
                          <img
                            src={imgUrl}
                            alt={`${product.name} angle ${idx + 1}`}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <div className="truncate">
                          <span className="text-xs font-bold text-[#0F172A] block truncate">
                            {angleLabels[idx] || `Angle ${idx + 1}`}
                          </span>
                          <span className="text-[10px] text-[#64748B] block">Verified OEM</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* RIGHT: SPECIFICATIONS SUMMARY & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${brandBadgeBg}`}>
                    {product.brand}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F0FDF4] border border-[#16A34A]/20 text-[#16A34A] text-xs font-bold">
                    ✓ {product.warrantyMonths} Months Warranty
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F1F5F9] text-[#0F172A] text-xs font-bold border border-[#E2E8F0]">
                    In Stock
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                  {product.name}
                </h1>
                
                <p className="text-sm text-[#64748B] mt-2 leading-relaxed font-medium">
                  {product.shortDescription || `${product.brand} ${product.name} engineered for superior starting power, high reserve capacity, and long service life in Indian operating conditions.`}
                </p>
              </div>

              {/* Quick Key Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
                <div className="text-center p-2 rounded-xl bg-[#F8FAFC]">
                  <span className="text-[10px] uppercase font-bold text-[#64748B] block">Voltage</span>
                  <span className="text-sm font-bold text-[#0F172A] mt-0.5 block">{product.voltage}</span>
                </div>
                <div className="text-center p-2 rounded-xl bg-[#F8FAFC]">
                  <span className="text-[10px] uppercase font-bold text-[#64748B] block">Capacity</span>
                  <span className="text-sm font-bold text-[#DC2626] mt-0.5 block">{product.capacity}</span>
                </div>
                <div className="text-center p-2 rounded-xl bg-[#F8FAFC]">
                  <span className="text-[10px] uppercase font-bold text-[#64748B] block">Cold Cranking</span>
                  <span className="text-sm font-bold text-[#0F172A] mt-0.5 block">{product.cca || 'High Power'}</span>
                </div>
                <div className="text-center p-2 rounded-xl bg-[#F8FAFC]">
                  <span className="text-[10px] uppercase font-bold text-[#64748B] block">Technology</span>
                  <span className="text-sm font-bold text-[#0F172A] mt-0.5 block truncate">{product.technology}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => onOpenEnquiry(product)}
                    className="w-full py-3.5 px-5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire Best Price</span>
                  </button>

                  <button
                    onClick={handleWhatsAppEnquiry}
                    className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>

                <a
                  href={QUICK_CONTACT_LINKS.callUrl}
                  className="w-full py-3.5 px-5 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] font-bold text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#DC2626]" />
                  <span>Call Us: {SITE_CONFIG.phoneDisplay}</span>
                </a>
              </div>

              {/* Delivery & Exchange Highlights */}
              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] space-y-2.5 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span>Free doorstep installation with memory saver protection</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span>Fair exchange scrap rebate on your old battery</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span>Paperless manufacturer warranty registration & instant invoice</span>
                </div>
              </div>

            </div>

          </div>

          {/* TABS SECTION: SPECIFICATIONS | COMPATIBILITY | WARRANTY | FAQ */}
          <div className="py-12 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-2 border-b border-[#E2E8F0] pb-3 overflow-x-auto custom-scrollbar mb-8">
              {[
                { id: 'specs', label: 'Detailed Specifications', icon: Layers },
                { id: 'compatibility', label: 'Vehicle / Application Fitment', icon: Car },
                { id: 'warranty', label: 'Warranty & Support', icon: ShieldCheck },
                { id: 'faq', label: 'Frequently Asked Questions', icon: HelpCircle },
              ].map((tab) => {
                const IconComp = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#DC2626] text-white shadow-sm shadow-[#DC2626]/25'
                        : 'bg-white text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB 1: DETAILED SPECIFICATIONS TABLE */}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 bg-white rounded-2xl border border-[#E2E8F0] shadow-xs overflow-hidden">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <tbody className="divide-y divide-[#E2E8F0]">
                      <tr className="bg-[#F8FAFC]">
                        <td className="p-3.5 font-bold text-[#64748B] w-1/3">Brand / Manufacturer</td>
                        <td className="p-3.5 font-bold text-[#0F172A]">{product.brand}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-[#64748B]">Model / Part Number</td>
                        <td className="p-3.5 font-bold text-[#0F172A]">{product.modelCode || product.name}</td>
                      </tr>
                      <tr className="bg-[#F8FAFC]">
                        <td className="p-3.5 font-bold text-[#64748B]">Nominal Voltage</td>
                        <td className="p-3.5 font-bold text-[#0F172A]">{product.voltage}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-[#64748B]">Capacity (Ah)</td>
                        <td className="p-3.5 font-bold text-[#DC2626]">{product.capacity}</td>
                      </tr>
                      <tr className="bg-[#F8FAFC]">
                        <td className="p-3.5 font-bold text-[#64748B]">Cold Cranking Amps (CCA)</td>
                        <td className="p-3.5 font-bold text-[#0F172A]">{product.cca || 'N/A (Deep Cycle / Inverter)'}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-[#64748B]">Battery Technology</td>
                        <td className="p-3.5 font-bold text-[#0F172A]">{product.technology}</td>
                      </tr>
                      <tr className="bg-[#F8FAFC]">
                        <td className="p-3.5 font-bold text-[#64748B]">Dimensions (L x W x H)</td>
                        <td className="p-3.5 font-mono text-[#0F172A]">{product.dimensions || 'Standard OEM Dimensions'}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-[#64748B]">Terminal Polarity Layout</td>
                        <td className="p-3.5 font-mono text-[#0F172A]">{product.terminalLayout || 'Left / Right Polarity Standard'}</td>
                      </tr>
                      <tr className="bg-[#F8FAFC]">
                        <td className="p-3.5 font-bold text-[#64748B]">Filled Battery Weight</td>
                        <td className="p-3.5 font-bold text-[#0F172A]">{product.weight || 'Standard Weight'}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-[#64748B]">Warranty Coverage</td>
                        <td className="p-3.5 font-bold text-[#16A34A]">{product.warrantyMonths} Months ({product.warrantyDetails})</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Features Highlights Sidebar */}
                <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-4">
                  <h3 className="text-base font-bold text-[#0F172A] border-b border-[#F1F5F9] pb-3">
                    Why Choose This Battery?
                  </h3>
                  <div className="space-y-3">
                    {(product.features || [
                      'High cranking power for immediate engine start',
                      'Advanced corrosion-resistant grid alloy',
                      'Factory charged and ready to fit',
                      'Robust vibration-resistant internal construction',
                    ]).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#475569]">
                        <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: COMPATIBILITY FITMENT */}
            {activeTab === 'compatibility' && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    Compatible Vehicles & Applications
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1 font-medium">
                    Verified OEM fitment list for {product.brand} {product.name}. If your vehicle is not listed, our technicians will confirm compatibility.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {(product.suitableVehicles && product.suitableVehicles.length > 0
                    ? product.suitableVehicles
                    : ['Compatible with standard vehicle models in this battery class', 'Inverter home power systems', 'Solar battery banks']
                  ).map((v, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold text-[#0F172A] flex items-center gap-1.5"
                    >
                      <Car className="w-3.5 h-3.5 text-[#DC2626]" />
                      <span>{v}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: WARRANTY & SUPPORT */}
            {activeTab === 'warranty' && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    Official Manufacturer Warranty Policy
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1 font-medium">
                    This unit comes with {product.warrantyMonths} Months authorized manufacturer warranty ({product.warrantyDetails}).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <ShieldCheck className="w-5 h-5 text-[#16A34A] mb-2" />
                    <h4 className="text-xs font-bold text-[#0F172A]">Paperless Warranty</h4>
                    <p className="text-[11px] text-[#64748B] mt-1">
                      Digital serial number registration on official brand portal upon purchase.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <RotateCcw className="w-5 h-5 text-[#DC2626] mb-2" />
                    <h4 className="text-xs font-bold text-[#0F172A]">Free Pro-Rata Support</h4>
                    <p className="text-[11px] text-[#64748B] mt-1">
                      Full free replacement period followed by official pro-rata discount schedule.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <Wrench className="w-5 h-5 text-[#DC2626] mb-2" />
                    <h4 className="text-xs font-bold text-[#0F172A]">Doorstep Claim Service</h4>
                    <p className="text-[11px] text-[#64748B] mt-1">
                      Our technician visits your location to test and process replacement units.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: FAQ */}
            {activeTab === 'faq' && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-4">
                <h3 className="text-lg font-bold text-[#0F172A] mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <h4 className="text-xs font-bold text-[#0F172A]">Is this battery 100% genuine?</h4>
                    <p className="text-xs text-[#64748B] mt-1">
                      Yes. PowerMax Battery Solutions is an authorized distributor for Amaron, Exide, and SF Sonic. Every unit includes factory barcoding and warranty verification.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <h4 className="text-xs font-bold text-[#0F172A]">How fast can you install it at my doorstep?</h4>
                    <p className="text-xs text-[#64748B] mt-1">
                      Our technicians typically arrive within 30 to 60 minutes across Bangalore with full memory-saver equipment.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <h4 className="text-xs font-bold text-[#0F172A]">Do you provide scrap discount for my old battery?</h4>
                    <p className="text-xs text-[#64748B] mt-1">
                      Yes, we provide fair, transparent market value rebates on your spent battery during installation.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RELATED RECOMMENDED BATTERIES */}
          {relatedProducts.length > 0 && (
            <div className="pt-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
                    Related Battery Recommendations
                  </h2>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-medium">
                    Similar high-performance batteries matching your power requirements.
                  </p>
                </div>
                <button
                  onClick={onNavigateProducts}
                  className="text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] flex items-center gap-1 cursor-pointer"
                >
                  <span>View All Batteries</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onSelectProduct={onSelectProduct}
                    onOpenEnquiry={onOpenEnquiry}
                    showCompare={true}
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

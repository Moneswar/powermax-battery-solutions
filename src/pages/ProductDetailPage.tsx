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
  Sparkles,
  Layers,
  HelpCircle,
  Eye,
  Maximize2,
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

  // Gallery angles labels
  const angleLabels = ['Front Elevation', '3/4 Perspective View', 'Top Terminal Deck'];

  // Related products from same category or brand
  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand)
  ).slice(0, 3);

  const handleWhatsAppEnquiry = () => {
    const text = `Hi ${SITE_CONFIG.businessName}, I would like to enquire about the best price and doorstep installation for ${product.brand} ${product.name} (${product.modelCode}, ${product.capacity}, ${product.voltage}).`;
    window.open(QUICK_CONTACT_LINKS.whatsappUrl(text), '_blank');
  };

  const galleryImages = product.images && product.images.length > 0 ? product.images : [product.image];

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

      <div id="product-detail-page" className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 pb-20">
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
          <div className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-neutral-800">
            
            {/* LEFT: AUTHENTIC PRODUCT PHOTOGRAPHY GALLERY STAGE */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="bg-gradient-to-b from-neutral-900 via-neutral-900/60 to-neutral-950 p-6 sm:p-8 rounded-3xl border border-neutral-800 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center">
                {/* Product Badge Pill */}
                <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 font-mono font-bold text-xs">
                    {product.brand} OEM
                  </span>
                  <span className="px-3 py-1 rounded-full bg-neutral-800/90 border border-neutral-700 text-neutral-300 font-mono text-xs">
                    {product.modelCode}
                  </span>
                </div>

                {/* Main High-Res Photo Stage */}
                <div className="my-auto py-4 w-full flex items-center justify-center">
                  <ProductImage
                    product={product}
                    selectedImageIndex={selectedPhotoIndex}
                    aspectRatio="4/3"
                    className="h-80 sm:h-96 w-full max-w-[480px] bg-transparent border-0"
                    priority={true}
                  />
                </div>

                {/* Bottom Quick Feature Highlights */}
                <div className="w-full pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>100% Genuine Barcoded Unit</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Wrench className="w-4 h-4 text-amber-400" />
                    <span>Free Doorstep Fitment</span>
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
                        className={`p-2 rounded-xl border transition-all text-left flex items-center gap-3 cursor-pointer ${
                          isSelected
                            ? 'bg-neutral-900 border-red-500 ring-2 ring-red-500/30'
                            : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <div className="w-12 h-10 rounded-lg overflow-hidden bg-[#090c12] border border-neutral-800 flex items-center justify-center shrink-0 p-1">
                          <img
                            src={imgUrl}
                            alt={`${product.name} ${angleLabels[idx] || `View ${idx + 1}`}`}
                            className="w-full h-full object-contain filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] font-mono uppercase text-neutral-400 block leading-tight truncate">
                            {angleLabels[idx] || `View ${idx + 1}`}
                          </span>
                          <span className={`text-[11px] font-bold block ${isSelected ? 'text-red-400' : 'text-neutral-300'}`}>
                            {idx === 0 ? 'Front' : idx === 1 ? 'Perspective' : 'Top Deck'}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* RIGHT: SPECS OVERVIEW & FAST ORDER ACTIONS */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-red-400 font-bold mb-2">
                  <span>{product.category}</span>
                  <span>•</span>
                  <span>{product.application}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {product.name}
                </h1>
                <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
                  {product.fullDescription || product.shortDescription}
                </p>
              </div>

              {/* Highlight Spec Cards Grid */}
              <div className="grid grid-cols-3 gap-3 bg-neutral-900/90 p-4 rounded-2xl border border-neutral-800 text-center">
                <div className="p-2">
                  <span className="text-[10px] font-mono text-neutral-400 block uppercase">VOLTAGE</span>
                  <span className="text-base sm:text-lg font-black text-white">{product.voltage}</span>
                </div>
                <div className="p-2 border-x border-neutral-800">
                  <span className="text-[10px] font-mono text-neutral-400 block uppercase">CAPACITY</span>
                  <span className="text-base sm:text-lg font-black text-amber-400">{product.capacity}</span>
                </div>
                <div className="p-2">
                  <span className="text-[10px] font-mono text-neutral-400 block uppercase">WARRANTY</span>
                  <span className="text-base sm:text-lg font-black text-emerald-400">{product.warrantyMonths} Months</span>
                </div>
              </div>

              {/* Warranty Breakdown Pill */}
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2 text-xs">
                <div className="flex items-center justify-between font-semibold">
                  <span className="text-white">Warranty Structure:</span>
                  <span className="text-emerald-400 font-bold">{product.warrantyDetails}</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400 text-[11px]">
                  <span>Total Coverage Duration:</span>
                  <span className="font-mono text-white">{product.warrantyMonths} Months</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => onOpenEnquiry(product)}
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-xl shadow-red-600/30 transition-all cursor-pointer hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant Price Enquiry</span>
                  </button>

                  <button
                    onClick={handleWhatsAppEnquiry}
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>

                <a
                  href={QUICK_CONTACT_LINKS.callUrl}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 text-xs font-bold transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>Call Hotline for Immediate 30-Min Fitment: {SITE_CONFIG.phoneDisplay}</span>
                </a>
              </div>

              {/* Included Services Checklist */}
              <div className="pt-2 border-t border-neutral-800 space-y-2">
                <span className="text-[11px] font-mono uppercase text-neutral-400 font-bold block">
                  Included with this battery:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Free Doorstep Delivery & Fitting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Electronic Alternator Voltage Check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>OBD-II Computer Memory Preservation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Maximum Old Battery Scrap Rebate</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* TABBED SPECIFICATIONS & COMPATIBILITY DEEP DIVE */}
          <div className="py-12 border-b border-neutral-800 space-y-8">
            {/* Tab navigation buttons */}
            <div className="flex items-center gap-2 border-b border-neutral-800 pb-3 overflow-x-auto custom-scrollbar">
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'specs'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                Technical Specifications
              </button>

              <button
                onClick={() => setActiveTab('compatibility')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'compatibility'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                Compatible Vehicles & Applications
              </button>

              <button
                onClick={() => setActiveTab('warranty')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'warranty'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                Warranty & Registration
              </button>

              <button
                onClick={() => setActiveTab('faq')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'faq'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                Maintenance & Features
              </button>
            </div>

            {/* TAB CONTENT: SPECS */}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-4">
                  <h3 className="text-sm font-mono uppercase text-red-400 font-bold tracking-wider">
                    Electrical & Performance
                  </h3>
                  <dl className="divide-y divide-neutral-800 text-xs">
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-neutral-400">Nominal Voltage</dt>
                      <dd className="font-bold text-white">{product.voltage}</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-neutral-400">Rated Capacity</dt>
                      <dd className="font-bold text-amber-400">{product.capacity}</dd>
                    </div>
                    {product.cca && (
                      <div className="py-2.5 flex justify-between">
                        <dt className="text-neutral-400">Cold Cranking Amps (CCA)</dt>
                        <dd className="font-bold text-white">{product.cca}</dd>
                      </div>
                    )}
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-neutral-400">Battery Technology</dt>
                      <dd className="font-bold text-white">{product.technology}</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-neutral-400">OEM Model Code</dt>
                      <dd className="font-mono text-neutral-300">{product.modelCode}</dd>
                    </div>
                  </dl>
                </div>

                <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-4">
                  <h3 className="text-sm font-mono uppercase text-red-400 font-bold tracking-wider">
                    Physical & Mechanical
                  </h3>
                  <dl className="divide-y divide-neutral-800 text-xs">
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-neutral-400">Dimensions (L x W x H)</dt>
                      <dd className="font-mono text-white">{product.dimensions}</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-neutral-400">Approximate Weight</dt>
                      <dd className="font-mono text-white">{product.weight}</dd>
                    </div>
                    {product.terminalLayout && (
                      <div className="py-2.5 flex justify-between">
                        <dt className="text-neutral-400">Terminal Configuration</dt>
                        <dd className="text-right text-neutral-300">{product.terminalLayout}</dd>
                      </div>
                    )}
                    {product.casingType && (
                      <div className="py-2.5 flex justify-between">
                        <dt className="text-neutral-400">Casing Material</dt>
                        <dd className="text-right text-neutral-300">{product.casingType}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
            )}

            {/* TAB CONTENT: COMPATIBILITY */}
            {activeTab === 'compatibility' && (
              <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 space-y-6">
                <div>
                  <h3 className="text-base font-bold text-white">Recommended Vehicle & Application Fitments</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Below is an indicative list of vehicles and setups verified for correct battery tray dimensions, polarity terminals, and charging alternator rates.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {product.suitableVehicles && product.suitableVehicles.length > 0 ? (
                    product.suitableVehicles.map((vehicle, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-200"
                      >
                        <Car className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{vehicle}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-neutral-400">Universal fitment for standard {product.voltage} systems.</p>
                  )}
                </div>

                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-amber-400" />
                    <span className="text-neutral-300">Don't see your specific car or equipment listed?</span>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry(product)}
                    className="text-red-400 font-bold hover:underline cursor-pointer"
                  >
                    Check Fitment with Technician
                  </button>
                </div>
              </div>
            )}

            {/* TAB CONTENT: WARRANTY */}
            {activeTab === 'warranty' && (
              <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
                  <div>
                    <h3 className="text-lg font-bold text-white">Official Brand Warranty: {product.warrantyMonths} Months</h3>
                    <p className="text-xs text-emerald-400 font-mono mt-1">{product.warrantyDetails}</p>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Nationwide Cashless Warranty Support</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center font-bold font-mono">
                      01
                    </div>
                    <h4 className="font-bold text-white">Paperless Digital Registration</h4>
                    <p className="text-neutral-400 leading-relaxed">
                      We register your serial number barcode directly with the manufacturer on installation day.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center font-bold font-mono">
                      02
                    </div>
                    <h4 className="font-bold text-white">Instant Replacement Window</h4>
                    <p className="text-neutral-400 leading-relaxed">
                      100% free unit exchange during the primary guarantee period with zero hassle.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center font-bold font-mono">
                      03
                    </div>
                    <h4 className="font-bold text-white">Pro-Rata Settlement Discount</h4>
                    <p className="text-neutral-400 leading-relaxed">
                      Substantial discount on a brand-new battery if replacement occurs in the pro-rata period.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: FEATURES & MAINTENANCE */}
            {activeTab === 'faq' && (
              <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 space-y-6">
                <div>
                  <h3 className="text-base font-bold text-white">Key Engineering Highlights & Maintenance Guidelines</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Manufacturer designed technology benefits for durability and performance in Indian conditions.
                  </p>
                </div>

                <div className="space-y-3">
                  {product.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300"
                    >
                      <Sparkles className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* SIMILAR / ALTERNATIVE RECOMMENDATIONS */}
          {relatedProducts.length > 0 && (
            <div className="pt-12 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Explore Alternative Recommendations</h3>
                <button
                  onClick={onNavigateProducts}
                  className="text-xs text-red-400 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View All in {product.category}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedProducts.map((relProduct) => (
                  <ProductCard
                    key={relProduct.id}
                    product={relProduct}
                    onSelectProduct={onSelectProduct}
                    onOpenEnquiry={onOpenEnquiry}
                    showCompare={false}
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

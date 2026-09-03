import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { QuickEnquiryModal } from './components/common/QuickEnquiryModal';
import { LegalModals } from './pages/LegalModals';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { BrandsPage } from './pages/BrandsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { Product, Service, BatteryCategory } from './types';
import { PRODUCTS_DATA } from './data/products';
import { SERVICES_DATA } from './data/services';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  // Navigation filters
  const [targetCategory, setTargetCategory] = useState<BatteryCategory | null>(null);
  const [targetBrand, setTargetBrand] = useState<string | null>(null);

  // Global Modals
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState<Product | null>(null);
  const [enquiryService, setEnquiryService] = useState<Service | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  // Scroll to top upon page navigation
  const navigateTo = (
    page: string,
    params?: {
      category?: BatteryCategory;
      brand?: string;
      productId?: string;
      serviceId?: string;
    }
  ) => {
    if (params?.category) {
      setTargetCategory(params.category);
    } else {
      setTargetCategory(null);
    }

    if (params?.brand) {
      setTargetBrand(params.brand);
    } else {
      setTargetBrand(null);
    }

    if (params?.productId) {
      const prod = PRODUCTS_DATA.find((p) => p.id === params.productId);
      if (prod) setSelectedProduct(prod);
    }

    if (params?.serviceId) {
      const srv = SERVICES_DATA.find((s) => s.id === params.serviceId);
      if (srv) setSelectedService(srv);
    }

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (product?: Product | null, service?: Service | null) => {
    setEnquiryProduct(product || null);
    setEnquiryService(service || null);
    setEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F9F7] text-[#172033] flex flex-col font-sans selection:bg-[#2E8B35] selection:text-white antialiased">
      {/* GLOBAL NAVBAR */}
      <Navbar
        activePage={currentPage}
        onNavigate={navigateTo}
        onOpenEnquiryModal={() => handleOpenEnquiry(null, null)}
      />

      {/* DYNAMIC PAGE CONTENT ROUTER */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectProduct={handleSelectProduct}
            onSelectService={handleSelectService}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateContact={() => navigateTo('contact')}
            onNavigateProducts={() => navigateTo('products')}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            initialCategory={targetCategory}
            initialBrand={targetBrand}
            onNavigateHome={() => navigateTo('home')}
            onSelectProduct={handleSelectProduct}
            onOpenEnquiry={(p) => handleOpenEnquiry(p, null)}
          />
        )}

        {currentPage === 'product-detail' && (
          <ProductDetailPage
            product={selectedProduct || PRODUCTS_DATA[0]}
            onNavigateHome={() => navigateTo('home')}
            onNavigateProducts={() => navigateTo('products')}
            onSelectProduct={handleSelectProduct}
            onOpenEnquiry={(p) => handleOpenEnquiry(p, null)}
          />
        )}

        {currentPage === 'brands' && (
          <BrandsPage
            onNavigateHome={() => navigateTo('home')}
            onSelectBrand={(b) => navigateTo('products', { brand: b })}
            onNavigateProductsWithFilter={(b) => navigateTo('products', { brand: b })}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigateHome={() => navigateTo('home')}
            onSelectService={handleSelectService}
            onBookService={(s) => handleOpenEnquiry(null, s)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigateHome={() => navigateTo('home')} />
        )}

        {![
          'home',
          'about',
          'products',
          'product-detail',
          'brands',
          'services',
          'contact',
        ].includes(currentPage) && (
          <NotFoundPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateProducts={() => navigateTo('products')}
          />
        )}
      </main>

      {/* GLOBAL FOOTER */}
      <Footer
        onNavigate={navigateTo}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenTerms={() => setTermsModalOpen(true)}
      />

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />

      {/* GLOBAL FAST ENQUIRY MODAL */}
      <QuickEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        product={enquiryProduct}
        service={enquiryService}
      />

      {/* LEGAL POLICIES MODALS */}
      <LegalModals
        privacyOpen={privacyModalOpen}
        termsOpen={termsModalOpen}
        onClosePrivacy={() => setPrivacyModalOpen(false)}
        onCloseTerms={() => setTermsModalOpen(false)}
      />
    </div>
  );
}

export default App;

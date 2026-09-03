import React from 'react';
import { Hero } from '../components/home/Hero';
import { BrandShowcase } from '../components/home/BrandShowcase';
import { PowerFinder } from '../components/home/PowerFinder';
import { CategoryShowcase } from '../components/home/CategoryShowcase';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { HomeServices } from '../components/home/HomeServices';
import { BatteryDnaSection } from '../components/home/BatteryDnaSection';
import { PowerJourney } from '../components/home/PowerJourney';
import { HomeContactCta } from '../components/home/HomeContactCta';
import { Product, Service, BatteryCategory } from '../types';
import { SeoHead } from '../components/common/SeoHead';

interface HomePageProps {
  onNavigate: (page: string, params?: { category?: BatteryCategory; brand?: string; productId?: string; serviceId?: string }) => void;
  onSelectProduct: (product: Product) => void;
  onSelectService: (service: Service) => void;
  onOpenEnquiry: (product?: Product | null, service?: Service | null) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onSelectService,
  onOpenEnquiry,
}) => {
  const scrollToFinder = () => {
    const el = document.getElementById('power-finder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SeoHead />
      <div id="home-page" className="w-full bg-[#F7F9F7]">
        {/* 1. Hero Section */}
        <Hero
          onExploreProducts={() => onNavigate('products')}
          onScrollToFinder={scrollToFinder}
          onContactClick={() => onNavigate('contact')}
        />

        {/* 2. Trusted Brands Showcase (Amaron, Exide, SF Sonic) */}
        <BrandShowcase
          onSelectBrand={(brandName) => onNavigate('products', { brand: brandName })}
          onViewAllBrands={() => onNavigate('brands')}
        />

        {/* 3. Signature Power Finder */}
        <PowerFinder
          onSelectProduct={onSelectProduct}
          onOpenEnquiry={(p) => onOpenEnquiry(p, null)}
        />

        {/* 4. Product Categories Grid */}
        <CategoryShowcase
          onSelectCategory={(cat) => onNavigate('products', { category: cat })}
          onViewAllProducts={() => onNavigate('products')}
        />

        {/* 5. Featured High-Demand Batteries */}
        <FeaturedProducts
          onSelectProduct={onSelectProduct}
          onOpenEnquiry={(p) => onOpenEnquiry(p, null)}
          onViewAll={() => onNavigate('products')}
        />

        {/* 6. Why Choose PowerMax Trust Pillars */}
        <WhyChooseUs />

        {/* 7. Complete Battery Services */}
        <HomeServices
          onSelectService={onSelectService}
          onViewAllServices={() => onNavigate('services')}
        />

        {/* 8. Battery Chemistry & Engineering DNA */}
        <BatteryDnaSection />

        {/* 9. The 4-Step Power Journey */}
        <PowerJourney
          onStartJourney={() => onNavigate('services')}
        />

        {/* 10. Home Contact / Quick Callback CTA */}
        <HomeContactCta
          onContactClick={() => onNavigate('contact')}
          onOpenEnquiry={() => onOpenEnquiry(null, null)}
        />
      </div>
    </>
  );
};

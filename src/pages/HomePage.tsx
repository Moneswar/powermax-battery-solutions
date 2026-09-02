import React from 'react';
import { Hero } from '../components/home/Hero';
import { PowerFinder } from '../components/home/PowerFinder';
import { CategoryShowcase } from '../components/home/CategoryShowcase';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { BatteryDnaSection } from '../components/home/BatteryDnaSection';
import { BrandShowcase } from '../components/home/BrandShowcase';
import { PowerJourney } from '../components/home/PowerJourney';
import { HomeServices } from '../components/home/HomeServices';
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
      <div id="home-page" className="w-full">
        {/* 1. Hero Section */}
        <Hero
          onExploreProducts={() => onNavigate('products')}
          onScrollToFinder={scrollToFinder}
          onContactClick={() => onNavigate('contact')}
        />

        {/* 2. Signature Experience 1: Power Finder */}
        <PowerFinder
          onSelectProduct={onSelectProduct}
          onOpenEnquiry={(p) => onOpenEnquiry(p, null)}
        />

        {/* 3. Category Showcase Grid */}
        <CategoryShowcase
          onSelectCategory={(cat) => onNavigate('products', { category: cat })}
          onViewAllProducts={() => onNavigate('products')}
        />

        {/* 4. Why Choose Us / Trust Pillars */}
        <WhyChooseUs />

        {/* 5. Featured In-Demand Batteries */}
        <FeaturedProducts
          onSelectProduct={onSelectProduct}
          onOpenEnquiry={(p) => onOpenEnquiry(p, null)}
          onViewAll={() => onNavigate('products')}
        />

        {/* 6. Signature Experience 2: Battery DNA / Inside the Cell */}
        <BatteryDnaSection />

        {/* 7. Brand Showcase Strip */}
        <BrandShowcase
          onSelectBrand={(brandName) => onNavigate('products', { brand: brandName })}
          onViewAllBrands={() => onNavigate('brands')}
        />

        {/* 8. Signature Experience 3: The 4-Step Power Journey */}
        <PowerJourney
          onStartJourney={() => onNavigate('services')}
        />

        {/* 9. Full Services Summary */}
        <HomeServices
          onSelectService={onSelectService}
          onViewAllServices={() => onNavigate('services')}
        />

        {/* 10. Home Contact / Showroom Callout */}
        <HomeContactCta
          onContactClick={() => onNavigate('contact')}
          onOpenEnquiry={() => onOpenEnquiry(null, null)}
        />
      </div>
    </>
  );
};

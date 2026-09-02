import { useEffect } from 'react';
import { SITE_CONFIG } from '../../config/siteConfig';

interface SeoProps {
  title?: string;
  description?: string;
  schemaType?: 'Organization' | 'LocalBusiness' | 'Product' | 'Service' | 'WebSite';
  productSchemaData?: {
    name: string;
    brand: string;
    description: string;
    model: string;
    category: string;
  };
  serviceSchemaData?: {
    name: string;
    description: string;
  };
}

export const SeoHead = ({
  title,
  description,
  schemaType = 'LocalBusiness',
  productSchemaData,
  serviceSchemaData,
}: SeoProps) => {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.businessName}`
    : `${SITE_CONFIG.businessName} | ${SITE_CONFIG.tagline} – Automotive, Inverter & Industrial Batteries`;

  const metaDesc =
    description ||
    `${SITE_CONFIG.businessName} provides genuine car, motorcycle, truck, inverter, solar, and industrial batteries from top brands with fast doorstep delivery and installation.`;

  useEffect(() => {
    document.title = fullTitle;

    // Update Meta Description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', metaDesc);
    }

    // Update OG Title & Description
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) ogTitleTag.setAttribute('content', fullTitle);

    let ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) ogDescTag.setAttribute('content', metaDesc);

    // Inject JSON-LD Schema
    const scriptId = 'json-ld-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    let schemaObject: Record<string, any> = {
      '@context': 'https://schema.org',
    };

    if (schemaType === 'Product' && productSchemaData) {
      schemaObject = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: productSchemaData.name,
        brand: {
          '@type': 'Brand',
          name: productSchemaData.brand,
        },
        description: productSchemaData.description,
        model: productSchemaData.model,
        category: productSchemaData.category,
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceType: 'https://schema.org/InvoicePrice',
            description: 'Enquire for best local price with exchange discount',
          },
        },
      };
    } else if (schemaType === 'Service' && serviceSchemaData) {
      schemaObject = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceSchemaData.name,
        description: serviceSchemaData.description,
        provider: {
          '@type': 'LocalBusiness',
          name: SITE_CONFIG.businessName,
          telephone: SITE_CONFIG.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: SITE_CONFIG.address,
            addressLocality: SITE_CONFIG.city,
            addressRegion: SITE_CONFIG.state,
            postalCode: SITE_CONFIG.pincode,
            addressCountry: 'IN',
          },
        },
      };
    } else {
      // Default LocalBusiness & Organization Schema
      schemaObject = {
        '@context': 'https://schema.org',
        '@type': 'AutoPartsStore',
        name: SITE_CONFIG.businessName,
        description: SITE_CONFIG.subTagline,
        url: window.location.origin,
        telephone: SITE_CONFIG.phone,
        email: SITE_CONFIG.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE_CONFIG.address,
          addressLocality: SITE_CONFIG.city,
          addressRegion: SITE_CONFIG.state,
          postalCode: SITE_CONFIG.pincode,
          addressCountry: 'IN',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '20:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday'],
            opens: '10:00',
            closes: '17:00',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Battery Inventory',
          itemListElement: [
            { '@type': 'OfferCatalog', name: 'Car & SUV Batteries' },
            { '@type': 'OfferCatalog', name: 'Motorcycle & Scooter Batteries' },
            { '@type': 'OfferCatalog', name: 'Inverter & Tall Tubular Batteries' },
            { '@type': 'OfferCatalog', name: 'Commercial Truck & Bus Batteries' },
            { '@type': 'OfferCatalog', name: 'Solar Storage & EV Batteries' },
          ],
        },
      };
    }

    scriptTag.text = JSON.stringify(schemaObject);
  }, [fullTitle, metaDesc, schemaType, productSchemaData, serviceSchemaData]);

  return null;
};

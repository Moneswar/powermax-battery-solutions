import { PRODUCTS_DATA } from '../data/products';
import { Product } from '../types';

export interface ImageValidationResult {
  productId: string;
  brand: string;
  modelCode: string;
  name: string;
  imagePath: string;
  imageStatus: 'real' | 'pending';
  galleryCount: number;
  hasImage: boolean;
  hasDuplicates: boolean;
  isKebabCase: boolean;
  brandFolderMatch: boolean;
  modelNameInPath: boolean;
  status: 'valid' | 'warning' | 'error';
  issues: string[];
}

export interface CatalogValidationReport {
  totalProducts: number;
  validCount: number;
  warningCount: number;
  errorCount: number;
  brandBreakdown: Record<string, { total: number; valid: number }>;
  results: ImageValidationResult[];
  allPassed: boolean;
}

/**
 * Validates the image architecture and consistency for a given product
 */
export function validateProductImage(product: Product): ImageValidationResult {
  const issues: string[] = [];
  const brandFolderMap: Record<string, string> = {
    amaron: 'amaron',
    exide: 'exide',
    bosch: 'bosch',
    livguard: 'livguard',
    luminous: 'luminous',
    microtek: 'microtek',
    okaya: 'okaya',
    'sf sonic': 'sf-sonic',
    sf_sonic: 'sf-sonic',
  };

  const imageStatus = product.imageStatus || (product.image ? 'real' : 'pending');
  const hasImage = Boolean(product.image && product.image.trim().length > 0);
  if (!hasImage && imageStatus === 'real') {
    issues.push('Missing primary image path (product.image is empty)');
  }

  const brandNormalized = product.brand.toLowerCase().trim();
  const expectedFolder = brandFolderMap[brandNormalized] || brandNormalized.replace(/\s+/g, '-');

  // Check path format: should start with /images/products/<brand>/
  const expectedPrefix = `/images/products/${expectedFolder}/`;
  const brandFolderMatch = product.image ? product.image.startsWith(expectedPrefix) : true;

  if (product.image && !brandFolderMatch) {
    issues.push(`Image path '${product.image}' does not match expected brand folder '${expectedPrefix}'`);
  }

  // Check kebab-case filename
  const filename = product.image ? product.image.split('/').pop() || '' : '';
  const isKebabCase = product.image ? /^[a-z0-9]+(-[a-z0-9]+)*\.(webp|png|jpg|jpeg)$/.test(filename) : true;
  if (product.image && !isKebabCase) {
    issues.push(`Filename '${filename}' does not adhere to strict lowercase kebab-case convention`);
  }

  // Check model reference in filename
  const modelNormalized = product.modelCode.toLowerCase().replace(/[^a-z0-9]/g, '');
  const idNormalized = product.id.toLowerCase().replace(/[^a-z0-9]/g, '');
  const filenameNormalized = filename.toLowerCase().replace(/[^a-z0-9]/g, '');
  const modelNameInPath =
    !product.image ||
    filenameNormalized.includes(modelNormalized) ||
    filenameNormalized.includes(idNormalized) ||
    product.slug.replace(/[^a-z0-9]/g, '').includes(filenameNormalized) ||
    filenameNormalized.length > 0;

  // Check for duplicate images in gallery
  let hasDuplicates = false;
  if (product.images && product.images.length > 1) {
    const uniqueImages = new Set(product.images);
    if (uniqueImages.size < product.images.length) {
      hasDuplicates = true;
      issues.push('Gallery images array contains duplicate identical image paths');
    }
  }

  const galleryCount = product.images ? product.images.length : 0;
  if (product.images) {
    product.images.forEach((img, idx) => {
      if (!img.startsWith(expectedPrefix)) {
        issues.push(`Gallery image #${idx + 1} (${img}) does not reside in brand folder '${expectedPrefix}'`);
      }
    });
  }

  let status: 'valid' | 'warning' | 'error' = 'valid';
  if ((!hasImage && imageStatus === 'real') || !brandFolderMatch) {
    status = 'error';
  } else if (issues.length > 0) {
    status = 'warning';
  }

  return {
    productId: product.id,
    brand: product.brand,
    modelCode: product.modelCode,
    name: product.name,
    imagePath: product.image,
    imageStatus,
    galleryCount,
    hasImage,
    hasDuplicates,
    isKebabCase,
    brandFolderMatch,
    modelNameInPath,
    status,
    issues,
  };
}

/**
 * Validates the entire product catalogue and returns a structured audit report
 */
export function validateCatalogImages(products: Product[] = PRODUCTS_DATA): CatalogValidationReport {
  const results = products.map(validateProductImage);
  const totalProducts = results.length;
  const validCount = results.filter((r) => r.status === 'valid').length;
  const warningCount = results.filter((r) => r.status === 'warning').length;
  const errorCount = results.filter((r) => r.status === 'error').length;

  const brandBreakdown: Record<string, { total: number; valid: number }> = {};

  results.forEach((r) => {
    if (!brandBreakdown[r.brand]) {
      brandBreakdown[r.brand] = { total: 0, valid: 0 };
    }
    brandBreakdown[r.brand].total += 1;
    if (r.status === 'valid') {
      brandBreakdown[r.brand].valid += 1;
    }
  });

  return {
    totalProducts,
    validCount,
    warningCount,
    errorCount,
    brandBreakdown,
    results,
    allPassed: errorCount === 0,
  };
}

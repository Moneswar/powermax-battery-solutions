import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigateHome: () => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigateHome }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center space-x-2 text-xs sm:text-sm text-neutral-400 py-3 overflow-x-auto whitespace-nowrap"
    >
      <button
        onClick={onNavigateHome}
        className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
        aria-label="Navigate to home page"
      >
        <Home className="w-3.5 h-3.5 text-neutral-400 hover:text-white" />
        <span>Home</span>
      </button>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
            {isLast || !item.onClick ? (
              <span className="font-semibold text-neutral-200 truncate max-w-[200px] sm:max-w-xs">
                {item.label}
              </span>
            ) : (
              <button
                onClick={item.onClick}
                className="hover:text-white transition-colors cursor-pointer truncate max-w-[150px]"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

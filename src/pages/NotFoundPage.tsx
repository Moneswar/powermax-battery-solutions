import React from 'react';
import { Zap, ArrowLeft, Home, Search } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateProducts: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigateHome,
  onNavigateProducts,
}) => {
  return (
    <div id="not-found-page" className="min-h-screen bg-neutral-950 text-neutral-100 pt-28 pb-20 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-red-600/20 border border-red-500/40 text-red-500 flex items-center justify-center mx-auto shadow-2xl">
          <Zap className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-red-500 font-bold tracking-widest">
            ERROR 404: CIRCUIT DISCONNECTED
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
            The battery model or page you are looking for has been relocated or is temporarily offline. Let us guide you back to full power.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={onNavigateProducts}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-bold text-xs transition-colors cursor-pointer"
          >
            <Search className="w-4 h-4 text-red-400" />
            <span>Browse Battery Catalog</span>
          </button>
        </div>
      </div>
    </div>
  );
};

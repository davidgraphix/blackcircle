'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface MarketIndex {
  symbol: string;
  name: string;
  value: number;
  change: number;
  percentChange: number;
}

const marketIndices: MarketIndex[] = [
  {
    symbol: 'NGX30',
    name: 'NGX All-Share',
    value: 97245,
    change: 1245,
    percentChange: 1.30,
  },
  {
    symbol: 'BRVM',
    name: 'BRVM Composite',
    value: 8456,
    change: -145,
    percentChange: -1.69,
  },
  {
    symbol: 'TBills',
    name: 'Treasury Bills',
    value: 12.45,
    change: 0.25,
    percentChange: 2.05,
  },
  {
    symbol: 'USD/NGN',
    name: 'USD to Naira',
    value: 1565,
    change: 15,
    percentChange: 0.97,
  },
  {
    symbol: 'Oil',
    name: 'Crude Oil (USD)',
    value: 78.50,
    change: -2.15,
    percentChange: -2.67,
  },
];

export function DashboardHero() {
  return (
    <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Markets</h2>
          <Link href="/market-scoop" className="text-xs text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
            View all <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {marketIndices.map((index) => (
            <div
              key={index.symbol}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-xs text-gray-500 font-medium">{index.symbol}</p>
                  <p className="text-sm font-semibold text-gray-900">{index.value.toLocaleString('en-US', { maximumFractionDigits: 2 })}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${index.percentChange >= 0 ? 'bg-emerald-500' : 'bg-red-500'}`}
                    style={{ width: `${Math.min(Math.abs(index.percentChange) * 10, 100)}%` }}
                  />
                </div>
                <span className={`text-xs font-semibold whitespace-nowrap ${index.percentChange >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                  {index.percentChange >= 0 ? '+' : ''}{index.percentChange.toFixed(2)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

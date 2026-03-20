'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BarometerRow {
  label: string;
  value: number;
  core: number;
  growth: number;
}

const barometerData: BarometerRow[] = [
  { label: 'Large', value: -0.72, core: -1.9, growth: -4.57 },
  { label: 'Mid', value: -0.84, core: -1.71, growth: -1.93 },
  { label: 'Small', value: -1.77, core: -2.07, growth: -2.51 },
];

export function MarketBarometer() {
  const getColor = (value: number) => {
    if (value < -2) return 'bg-red-600';
    if (value < -1) return 'bg-red-500';
    if (value < 0) return 'bg-red-400';
    if (value < 1) return 'bg-emerald-400';
    return 'bg-emerald-500';
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">US Market Barometer</h3>
        <Link href="/market-scoop" className="text-xs text-primary hover:text-primary/80">
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="space-y-3">
        {barometerData.map((row) => (
          <div key={row.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-600">{row.label}</span>
              <span className="text-xs text-gray-500">{row.value}</span>
            </div>
            <div className="flex gap-1 h-6">
              <div className="flex-1 rounded bg-gray-100 flex items-center justify-center">
                <span className={`text-xs font-semibold ${row.value < 0 ? 'text-red-600' : 'text-emerald-600'}`}>
                  {row.value.toFixed(2)}
                </span>
              </div>
              <div className={`flex-1 rounded ${getColor(row.core)} flex items-center justify-center`}>
                <span className="text-xs font-semibold text-white">{row.core.toFixed(2)}</span>
              </div>
              <div className={`flex-1 rounded ${getColor(row.growth)} flex items-center justify-center`}>
                <span className="text-xs font-semibold text-white">{row.growth.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-600 leading-relaxed">
          Data on gainers, losers, and actives is available starting 15 minutes after US markets open.
        </p>
      </div>
    </div>
  );
}

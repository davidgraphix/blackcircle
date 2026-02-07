import type { Metadata } from 'next';
import { MarketScoopHub } from './MarketScoopHub';

export const metadata: Metadata = {
  title: 'Market Scoop',
  description:
    'Stay informed with timely analysis of market movements, economic indicators, and investment opportunities across African markets.',
};

export default function MarketScoopPage() {
  return <MarketScoopHub />;
}

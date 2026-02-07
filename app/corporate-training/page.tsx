import type { Metadata } from 'next';
import { CorporateTrainingPage } from './CorporateTrainingPage';

export const metadata: Metadata = {
  title: 'Corporate Training',
  description:
    'Equip your team with practical financial literacy and market knowledge. Custom training programs for African market participants.',
};

export default function Page() {
  return <CorporateTrainingPage />;
}

import {
  Hero,
  ContentMatrix,
  LearningHighlight,
  CorporateHighlight,
  Newsletter,
  CommunityInvite,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ContentMatrix />
      <LearningHighlight />
      <CorporateHighlight />
      <Newsletter />
      <CommunityInvite />
    </>
  );
}

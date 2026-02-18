import {
  Hero,
  ContentMatrix,
  Newsletter,
  CommunityInvite,
  ServicesMatrix,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ContentMatrix />
      <ServicesMatrix />
      <Newsletter />
      <CommunityInvite />
    </>
  );
}

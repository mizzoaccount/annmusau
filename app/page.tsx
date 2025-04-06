// pages/index.tsx
import HeroSection from '@/components/Hero';
import NavBar from '@/components/Header';
import AboutSection from '@/components/About';
import MediaSection from '@/components/MediaSection';
import DevotionalsSection from '@/components/Devotion';
import StoreSection from '@/components/StoreSection';
import EventsSection from '@/components/EventSection';
import DonationSection from '@/components/DonationSection';
import NewsletterSection from '@/components/NewsLetterSection';
import HolyFooter from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
     
      <main>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <MediaSection />
      <DevotionalsSection />
      <StoreSection />
      <EventsSection />
      <DonationSection />
      <NewsletterSection />
      <HolyFooter />
      </main>    
    </div>
  );
}
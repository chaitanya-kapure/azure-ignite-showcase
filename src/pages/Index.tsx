import { useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { SessionsSection } from '@/components/SessionsSection';
import { SponsorsSection } from '@/components/SponsorsSection';
import { RegistrationSection } from '@/components/RegistrationSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add scroll-based animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <div id="home">
        <HeroSection />
      </div>

      {/* Sessions Section */}
      <div id="sessions" className="scroll-reveal">
        <SessionsSection />
      </div>

      {/* Sponsors Section */}
      <div id="sponsors" className="scroll-reveal">
        <SponsorsSection />
      </div>

      {/* Registration Section */}
      <div id="register" className="scroll-reveal">
        <RegistrationSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
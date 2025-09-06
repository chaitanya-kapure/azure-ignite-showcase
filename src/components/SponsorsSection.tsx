import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';

// Mock sponsor logos - in a real project these would be actual sponsor logo images
const sponsors = [
  { name: "Microsoft", logo: "🟦", tier: "title" },
  { name: "Unstop", logo: "🎯", tier: "title" },
  { name: "GitHub", logo: "🐙", tier: "platinum" },
  { name: "Docker", logo: "🐳", tier: "gold" },
  { name: "HashiCorp", logo: "⬢", tier: "gold" },
  { name: "MongoDB", logo: "🍃", tier: "silver" },
  { name: "Redis", logo: "🔴", tier: "silver" },
  { name: "Kubernetes", logo: "⚙️", tier: "silver" }
];

const tierStyles = {
  title: "text-6xl group-hover:scale-110 drop-shadow-lg",
  platinum: "text-5xl group-hover:scale-108",
  gold: "text-4xl group-hover:scale-106", 
  silver: "text-3xl group-hover:scale-104"
};

const tierLabels = {
  title: "Title Sponsors",
  platinum: "Platinum Partners", 
  gold: "Gold Partners",
  silver: "Silver Partners"
};

export const SponsorsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const groupedSponsors = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {} as Record<string, typeof sponsors>);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-background to-muted/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-accent/30 text-accent">
            Our Partners
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Sponsors & Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proudly supported by industry leaders who believe in empowering the next generation of cloud professionals
          </p>
        </div>

        {/* Sponsors by Tier */}
        <div className="space-y-12">
          {Object.entries(groupedSponsors).map(([tier, tierSponsors], tierIndex) => (
            <div key={tier} className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: `${tierIndex * 200}ms` }}>
              {/* Tier Label */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
                  {tierLabels[tier as keyof typeof tierLabels]}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
              </div>

              {/* Sponsors Grid */}
              <div className={`grid gap-8 justify-items-center ${
                tier === 'title' ? 'grid-cols-1 sm:grid-cols-2' :
                tier === 'platinum' ? 'grid-cols-2 sm:grid-cols-3' :
                'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
              }`}>
                {tierSponsors.map((sponsor, index) => (
                  <div
                    key={sponsor.name}
                    className={`group relative p-8 rounded-2xl glass-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'animate-scale-in' : ''}`}
                    style={{ animationDelay: `${(tierIndex * 200) + (index * 100)}ms` }}
                  >
                    {/* Sponsor Logo/Icon */}
                    <div className="text-center">
                      <div className={`${tierStyles[tier as keyof typeof tierStyles]} transition-all duration-300 mb-4`}>
                        {sponsor.logo}
                      </div>
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {sponsor.name}
                      </h4>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Sponsors */}
        <div className={`text-center mt-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in Sponsoring?</h3>
            <p className="text-muted-foreground mb-6">
              Join our community of forward-thinking organizations supporting cloud education
            </p>
            <a 
              href="mailto:sponsors@azureworkshop.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
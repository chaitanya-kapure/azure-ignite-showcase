import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Calendar, Gift, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle,
    title: "Expert-Led Sessions",
    description: "Learn directly from Microsoft Azure certified professionals"
  },
  {
    icon: Users,
    title: "Networking Opportunities", 
    description: "Connect with 500+ cloud professionals and industry leaders"
  },
  {
    icon: Gift,
    title: "Exclusive Resources",
    description: "Access to premium Azure learning materials and templates"
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "Choose sessions that fit your learning objectives"
  }
];

export const RegistrationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [registrationCount, setRegistrationCount] = useState(347);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('registration-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Simulate live registration counter
  useEffect(() => {
    const interval = setInterval(() => {
      setRegistrationCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleRegister = () => {
    // Open Unstop registration page
    window.open('https://unstop.com', '_blank');
    
    // Trigger auto-email (in a real app, this would be an API call)
    console.log('Auto-email triggered for Azure Workshop 2025 registration');
    
    // Show success notification (you could use a toast here)
    alert('Registration initiated! You will receive a confirmation email shortly.');
  };

  return (
    <section id="registration-section" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg" />
      <div className="absolute inset-0 bg-background/90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <Users className="w-8 h-8 text-primary/40" />
        </div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
          <Calendar className="w-6 h-6 text-accent/40" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/30 text-primary animate-pulse-glow">
            Limited Seats Available
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Secure Your Spot</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join the most comprehensive Azure learning experience of 2025. Registration closes soon!
          </p>
          
          {/* Live Counter */}
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-card">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              <span className="font-bold text-primary">{registrationCount}</span> professionals already registered
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits List */}
          <div className={`space-y-6 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <h3 className="text-3xl font-bold mb-8">Why Attend?</h3>
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`flex items-start gap-4 p-4 rounded-lg glass-card hover:shadow-lg transition-all duration-300 transform hover:scale-102 ${isVisible ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Registration Card */}
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <Card className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-500">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-primary to-accent p-1">
                <div className="bg-background p-6 text-center">
                  <h3 className="text-2xl font-bold gradient-text mb-2">Free Registration</h3>
                  <p className="text-muted-foreground">Complete access to all sessions</p>
                </div>
              </div>

              <CardContent className="p-8">
                {/* Event Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between py-2 border-b border-muted/20">
                    <span className="text-muted-foreground">Event Dates</span>
                    <span className="font-semibold">Jan 15-16, 2025</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-muted/20">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-semibold">2 Full Days</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-muted/20">
                    <span className="text-muted-foreground">Format</span>
                    <span className="font-semibold">Hybrid Event</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-muted-foreground">Certificate</span>
                    <span className="font-semibold text-primary">Included</span>
                  </div>
                </div>

                {/* Registration Button */}
                <Button
                  onClick={handleRegister}
                  size="lg"
                  className="w-full group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 glow text-lg font-semibold py-4"
                >
                  Register on Unstop
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Footer Note */}
                <p className="text-xs text-muted-foreground text-center mt-4">
                  You'll receive a confirmation email after registration
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';
import speaker1 from '@/assets/speaker-1.jpg';
import speaker2 from '@/assets/speaker-2.jpg';
import speaker3 from '@/assets/speaker-3.jpg';
import speaker4 from '@/assets/speaker-4.jpg';

const sessions = [
  {
    id: 1,
    title: "Introduction to Azure",
    description: "Discover the fundamentals of Microsoft Azure and cloud computing essentials.",
    date: "January 15, 2025",
    time: "9:00 AM - 11:00 AM",
    speaker: {
      name: "John Mitchell",
      designation: "Senior Cloud Architect",
      image: speaker1
    },
    color: "from-primary to-primary/60"
  },
  {
    id: 2,
    title: "Azure DevOps & CI/CD",
    description: "Master continuous integration and deployment with Azure DevOps pipelines.",
    date: "January 15, 2025", 
    time: "11:30 AM - 1:30 PM",
    speaker: {
      name: "Sarah Chen",
      designation: "DevOps Lead Engineer",
      image: speaker2
    },
    color: "from-secondary to-secondary/60"
  },
  {
    id: 3,
    title: "Azure Security & Compliance",
    description: "Learn enterprise-grade security practices and compliance frameworks.",
    date: "January 16, 2025",
    time: "9:00 AM - 11:00 AM", 
    speaker: {
      name: "Michael Rodriguez",
      designation: "Security Solutions Architect",
      image: speaker3
    },
    color: "from-accent to-accent/60"
  },
  {
    id: 4,
    title: "Scaling with Azure Functions",
    description: "Build serverless applications and implement scalable microservices.",
    date: "January 16, 2025",
    time: "11:30 AM - 1:30 PM",
    speaker: {
      name: "Priya Patel",
      designation: "Principal Developer",
      image: speaker4
    },
    color: "from-primary to-accent"
  }
];

export const SessionsSection = () => {
  const [visibleSessions, setVisibleSessions] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sessionIndex = parseInt(entry.target.getAttribute('data-session') || '0');
            setVisibleSessions(prev => [...new Set([...prev, sessionIndex])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sessionCards = sectionRef.current?.querySelectorAll('[data-session]');
    sessionCards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/30 text-primary">
            Workshop Sessions
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Learn from the Best</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four comprehensive sessions designed to take your Azure expertise to the next level
          </p>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sessions.map((session, index) => (
            <div
              key={session.id}
              data-session={index}
              className={`transform transition-all duration-700 ${
                visibleSessions.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="group h-full glass-card hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${session.color}`} />
                
                <CardContent className="p-8">
                  {/* Session Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {session.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {session.description}
                      </p>
                    </div>
                  </div>

                  {/* Session Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{session.time}</span>
                    </div>
                  </div>

                  {/* Speaker Info */}
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 border border-muted/30">
                    <div className="relative">
                      <img
                        src={session.speaker.image}
                        alt={session.speaker.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <User className="w-4 h-4 text-primary/60" />
                        <span className="font-semibold">{session.speaker.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{session.speaker.designation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
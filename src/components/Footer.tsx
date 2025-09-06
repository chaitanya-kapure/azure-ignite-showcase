import { Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'Sessions', href: '#sessions' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Register', href: '#register' }
  ],
  social: [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Email', href: 'mailto:info@azureworkshop.com', icon: Mail }
  ]
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-background border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-background to-muted/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-3">Azure Workshop 2025</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Empowering the next generation of cloud professionals with hands-on Azure expertise 
                and industry insights from Microsoft certified experts.
              </p>
            </div>
            
            {/* Event Info */}
            <div className="glass-card p-4 max-w-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium">January 15-16, 2025</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Join 500+ professionals for the ultimate Azure learning experience
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Connect With Us</h4>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            {/* External Links */}
            <div className="space-y-2">
              <a 
                href="https://unstop.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                Register on Unstop
                <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://azure.microsoft.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                Learn Azure
                <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Azure Workshop. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors">Privacy Policy</button>
              <button className="hover:text-primary transition-colors">Terms of Service</button>
              <span className="text-xs">Made with ❤️ for the cloud community</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-50" />
    </footer>
  );
};
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/70 backdrop-blur border border-border/70 mb-10 animate-fade-in shadow-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs tracking-wide text-muted-foreground">Available for new opportunities</span>
          </div>

          {/* Profile Image */}
          <img
            src="/images/Profile3.jpg"
            alt="Profile photo of Nino Hägglund"
            className="mx-auto mb-8 w-32 h-32 md:w-36 md:h-36 object-cover rounded-full border border-border/70 shadow-card animate-fade-in-up"
            style={{ animationDelay: '0.05s' }}
            loading="lazy"
          />

          {/* Main Heading */}
          <h1
            className="font-display text-5xl md:text-7xl font-medium mb-6 leading-[1.05] animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Hi, I'm{' '}
            <span className="italic text-gradient">Nino Hägglund</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            A .NET developer crafting calm, considered backends, APIs and fullstack web applications.
          </p>

          {/* Tech Stack */}
          <div
            className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            {['ASP.NET Core', 'C#', 'Azure', 'EF Core', 'React'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs bg-card/60 border border-border/70 text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center mb-14 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Button variant="hero" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
              <ArrowRight className="ml-1" />
            </Button>
            <Button variant="heroOutline" size="lg" onClick={() => window.open('/Nino_Hägglund_Webbutvecklare_NET.pdf', '_blank')}>
              <Download className="mr-1" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {[
              { icon: Github, href: 'https://github.com/ninohaegglund', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/nino-h%C3%A4gglund-441740307/', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-2.5 rounded-full bg-card/60 border border-border/70 text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-200"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-9 rounded-full border border-border flex justify-center pt-2">
          <div className="w-1 h-1.5 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
  role: '.NET Developer',
  company: 'Digital Engine AB',
  period: '2025 Dec - 2026 April',
  description: 'Developed automation solutions using C# within a cloud-based platform. Built and orchestrated task-based workflows for data processing and system integration.',
  achievements: [
    'Implemented custom commands for data transformation and API integrations',
    'Built end-to-end automation flow from Excel to JSON to external API',
    'Designed batch processing to handle large datasets efficiently',
    'Improved data quality through validation and filtering logic'
  ],
},
  {
  role: 'Webbutvecklare .NET Student',
  company: 'Nackademin',
  period: '2024 - 2026',
  description: 'Focused on backend development with C# and .NET, including APIs, databases, and web applications.',
  achievements: [
    'Built REST APIs using ASP.NET Core',
    'Worked with SQL Server and Entity Framework',
    'Developed full-stack applications with modern web technologies'
  ],
},
  {
    role: 'Junior Developer',
    company: 'StartupHub Stockholm',
    period: '2018 - 2020',
    description: 'Developed web applications and APIs for various startup clients. Gained experience across the full development lifecycle.',
    achievements: ['Delivered 10+ client projects', 'Learned Azure cloud services', 'Contributed to open-source projects'],
  },
];

const certifications = [
  { name: 'TBD', issuer: 'TBD', year: 'TBD' },
  { name: 'TBD', issuer: 'TBD', year: 'TBD' },
  { name: 'TBD', issuer: 'TBD', year: 'TBD' },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey in software development and cloud architecture.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

              {experiences.map((exp, index) => (
                <div
                  key={exp.role}
                  className="relative pl-20 pb-12 last:pb-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-glow" />

                  {/* Content */}
                  <div className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-display text-xl font-bold">{exp.role}</h3>
                      <span className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">
                        {exp.company}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar size={14} />
                      {exp.period}
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div >
            <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="text-primary" size={20} />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="glass-card rounded-xl p-4 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-medium mb-1">{cert.name}</h4>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
    {
  id: 3,
  title: 'Personal Job Application Manager',
  description: 'A fullstack web application for searching, saving, and managing job applications using external job ad data, authentication, and structured application tracking.',
  image: '/images/job-application-manager.png',
  category: 'Backend',
  tags: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'React', 'TypeScript', 'REST API', 'Authentication'],
  outcomes: [
    'Integrated external job search data through REST API calls',
    'Built structured tracking for saved jobs and applications',
    'Implemented authentication and user-specific application data'
  ],
  github: 'https://github.com/ninohaegglund/JobApplicationManager',
  live: 'https://github.com/ninohaegglund/personal-job-application-manager',
},
  {
    id: 1,
    title: 'PC Builder',
    description: 'Ongoing Full-stack ASP.NET Core application for building custom PCs, managing customer orders, and connecting an MVC frontend with backend APIs.',
    image: '/images/pcbuilder.png',
    category: 'Full Stack',
    tags: ['ASP.NET Core', 'MVC', 'Web API', 'Entity Framework Core', 'SQL Server', 'C#', 'Bootstrap'],
    outcomes: [
      'Built CRUD flows for computers, orders, and customers',
      'Integrated MVC frontend with backend APIs',
      'Worked with DTOs, validation, mapping, and database relations'
    ],
    github: 'https://github.com/ninohaegglund/PCBuilder',
    live: '#',
  },
  {
    id: 2,
    title: 'Project Manager MVC',
    description: 'Full-stack analytics platform with real-time data visualization and predictive insights.',
    image: '/images/alpha.png',
    category: 'Full Stack',
    tags: ['C#', 'SignalR', 'React', 'Azure Functions'],
    outcomes: ['Built project CRUD functionality', 'Implemented role-based task management', 'Created responsive dashboard views'],
    github: '#',
    live: '#',
  },

  {
    id: 4,
    title: 'Daily check in',
    description: 'A web application for tracking mental and physical well-being over time. The frontend is implemented in React and communicates with a RESTful API built in ASP.NET Core.',
    image: '/images/daily-check.png',
    category: 'Frontend',
    tags: ['ASP.NET Core', 'MVC', 'C#', 'EF Core', 'Identity'],
    outcomes: ['', '', ''],
    github: 'https://github.com/ninohaegglund/daily-checkin-api',
    live: 'https://daily-checkin-app.netlify.app/',
  },
];

const categories = ['All', 'Backend', 'Full Stack', 'Frontend'];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my recent work showcasing expertise in .NET, cloud architecture, and scalable solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-secondary overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-primary/20 text-primary/100 border border-primary/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Outcomes */}
                <div className="mb-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Key Outcomes</p>
                  <div className="flex flex-wrap gap-2">
                    {project.outcomes.map((outcome) => (
                      <span
                        key={outcome}
                        className="px-2 py-1 rounded text-xs bg-primary/10 text-primary border border-primary/20"
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors ml-auto"
                  >
                    Case Study
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

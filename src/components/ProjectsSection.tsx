import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import CaseStudyModal, { type ProjectCaseStudy } from '@/components/CaseStudyModal';

type Project = ProjectCaseStudy & {
  id: number;
  description: string;
  image: string;
  category: string;
  tags: string[];
  outcomes: string[];
  github: string;
  live: string;
};

const projects: Project[] = [
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
  caseStudy: {
    problem: 'Job searching across multiple sources was fragmented, and keeping track of applications, statuses, and related details became inconsistent and time-consuming.',
    solution: 'I built a fullstack application that centralizes job discovery and application tracking with authenticated, user-specific workflows and a clean data model for status updates.',
    techStack: ['ASP.NET Core', 'React', 'TypeScript', 'Entity Framework Core', 'SQL Server'],
    whatIBuilt: [
      'Built REST API endpoints to search, save, and manage job applications',
      'Implemented authentication to isolate each user\'s application data securely',
      'Created React views for organizing jobs by status and tracking progress over time'
    ],
    whatILearned: [
      'Strengthened my understanding of fullstack architecture and API-driven design',
      'Practiced connecting React state flows to ASP.NET Core backend operations',
      'Improved at structuring relational data for practical, user-focused workflows'
    ]
  }
  },
    {
  id: 5,
  title: 'E-Commerce Microservices Platform',
  description: 'A full-stack e-commerce application built with a microservices architecture. The system includes product catalog, shopping cart, identity, orders, checkout, and a payment service prepared for Stripe integration.',
  image: '/images/ecommerce.png',
  category: 'Full Stack',
  tags: [
    'C#',
    'ASP.NET Core',
    'Microservices',
    'REST API',
    'Entity Framework Core',
    'SQL Server',
    'Identity',
    'Stripe',
    'React'
  ],
  outcomes: [
    'Built an end-to-end e-commerce flow from product selection to checkout',
    'Implemented separate services for catalog, cart, identity, orders, and payments',
    'Prepared payment service architecture for future Stripe integration'
  ],
  github: 'https://github.com/ninohaegglund/ECommerce-platform',
  live: 'https://github.com/ninohaegglund/ECommerce-platform-client',
  caseStudy: {
    problem: 'E-commerce systems often involve several separate business areas such as product management, user identity, shopping cart, orders, checkout, and payments. The goal was to build a system where these responsibilities are separated into independent services instead of one large monolithic application.',
    solution: 'We built a full-stack e-commerce application using a microservices-based architecture. Each main business area is handled by its own API, including Catalog API, Order API, Identity API, Product/Cart API, and Payment Service API. The frontend connects these services into one user flow where a customer can select products, add them to the cart, continue to checkout, enter required information, and proceed to the payment step.',
    techStack: [
      'C#',
      'ASP.NET Core',
      'Microservices',
      'REST API',
      'Entity Framework Core',
      'SQL Server',
      'Identity',
      'React',
      'Stripe'
    ],
    whatIBuilt: [
      'Built parts of the product and checkout flow',
      'Worked with multiple ASP.NET Core APIs in a microservices structure',
      'Connected frontend views to backend services through REST API calls',
      'Implemented flow from product selection to cart and checkout',
      'Prepared the payment service for future Stripe integration'
    ],
    whatILearned: [
      'Improved my understanding of microservices and service separation',
      'Practiced designing APIs around separate business responsibilities',
      'Learned how different services communicate in an e-commerce system',
      'Gained experience with checkout flow, cart handling, identity, and order management',
      'Understood the importance of keeping unfinished integrations clearly separated from completed functionality'
    ]
  }
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
    caseStudy: {
      problem: 'Building and ordering custom PCs involved multiple disconnected steps, making it difficult to manage products, customers, and order flow in one system.',
      solution: 'I created a fullstack ASP.NET Core application that connects MVC screens with backend APIs to manage computers, customers, and orders through consistent CRUD workflows.',
      techStack: ['ASP.NET Core', 'MVC', 'Web API', 'Entity Framework Core', 'SQL Server', 'C#', 'Bootstrap'],
      whatIBuilt: [
        'Implemented CRUD endpoints and UI flows for computers, customers, and orders',
        'Connected MVC frontend components with backend API endpoints',
        'Applied DTOs, validation, and mapping for safer and cleaner data exchange'
      ],
      whatILearned: [
        'Deepened my understanding of layered architecture in .NET applications',
        'Learned to keep frontend and backend contracts aligned through DTO design',
        'Improved at modeling relational data for real business workflows'
      ]
    }
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
    caseStudy: {
      problem: 'Teams lacked a single view of project progress, and updates were often delayed or unclear across roles and workstreams.',
      solution: 'I built a project management application with role-aware workflows and responsive dashboards to keep project state visible and easy to update.',
      techStack: ['ASP.NET Core', 'React', 'TypeScript', 'SignalR', 'Azure Functions'],
      whatIBuilt: [
        'Implemented project and task CRUD features with role-based access controls',
        'Developed dashboard components for visualizing project status and priorities',
        'Integrated real-time update patterns for shared project visibility'
      ],
      whatILearned: [
        'Improved at designing role-based behavior in fullstack applications',
        'Gained practical experience balancing responsiveness and data consistency',
        'Learned to structure UI around decision-making, not just data display'
      ]
    }
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
    caseStudy: {
      problem: 'Tracking mental and physical well-being was inconsistent without a simple, structured way to log daily patterns and review trends over time.',
      solution: 'I created a React frontend with an ASP.NET Core API to capture daily check-ins, persist entries, and present history in a way that encourages reflection and consistency.',
      techStack: ['ASP.NET Core', 'React', 'TypeScript', 'Entity Framework Core', 'Identity'],
      whatIBuilt: [
        'Built API endpoints for creating and retrieving user check-in records',
        'Developed frontend forms and views for daily logging and historical review',
        'Implemented identity-based access so users only interact with their own data'
      ],
      whatILearned: [
        'Strengthened my understanding of authenticated user flows end to end',
        'Practiced designing APIs and UI states around recurring user habits',
        'Improved at aligning UX decisions with personal data privacy requirements'
      ]
    }
    
  },


];

const categories = ['All', 'Backend', 'Full Stack', 'Frontend'];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCaseStudyOpen = (project: Project) => {
    setSelectedProject(project);
    setIsCaseStudyOpen(true);
  };

  const handleCaseStudyOpenChange = (open: boolean) => {
    setIsCaseStudyOpen(open);

    if (!open) {
      setSelectedProject(null);
    }
  };

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
                  <button
                    type="button"
                    onClick={() => handleCaseStudyOpen(project)}
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors ml-auto"
                  >
                    Case Study
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <CaseStudyModal
          open={isCaseStudyOpen}
          onOpenChange={handleCaseStudyOpenChange}
          project={selectedProject}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;

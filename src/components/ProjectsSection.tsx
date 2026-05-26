import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { ExternalLink, Github, ArrowLeft, ArrowRight } from 'lucide-react';
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
    outcomes: [],
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
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);

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

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateActiveSlide = () => {
      setActiveSlide(carouselApi.selectedScrollSnap());
    };

    updateActiveSlide();
    carouselApi.on('select', updateActiveSlide);
    carouselApi.on('reInit', updateActiveSlide);

    return () => {
      carouselApi.off('select', updateActiveSlide);
      carouselApi.off('reInit', updateActiveSlide);
    };
  }, [carouselApi]);

  useEffect(() => {
    setActiveSlide(0);
    carouselApi?.scrollTo(0);
  }, [activeCategory, carouselApi]);

  return (
    <section id="projects" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my recent work showcasing expertise in .NET, cloud architecture, and scalable solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
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

        {/* Projects Carousel */}
        <div className="mx-auto max-w-6xl">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: 'center',
              loop: filteredProjects.length > 1,
            }}
            className="animate-fade-in-up"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {filteredProjects.map((project, index) => {
                const visibleTags = project.tags.slice(0, 6);
                const remainingTagCount = project.tags.length - visibleTags.length;
                const visibleOutcomes = project.outcomes.filter(Boolean).slice(0, 2);

                return (
                  <CarouselItem
                    key={project.id}
                    className="basis-[88%] pl-4 sm:basis-[76%] md:basis-[68%] md:pl-6 lg:basis-[58%]"
                  >
                    <article className="group zen-card flex h-[660px] flex-col overflow-hidden bg-card/95 hover:border-primary/40 sm:h-[620px] lg:h-[600px]">
                      <div className="relative h-56 shrink-0 overflow-hidden bg-secondary sm:h-60">
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading={index === 0 ? 'eager' : 'lazy'}
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/5 to-card/85" />
                        <div className="absolute left-4 top-4 flex items-center gap-2">
                          <span className="rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-xs text-primary">
                            {project.category}
                          </span>
                          <span className="rounded-full border border-border/60 bg-card/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
                            {String(index + 1).padStart(2, '0')} / {String(filteredProjects.length).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      <div className="flex min-h-0 flex-1 flex-col p-6 sm:p-7">
                        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                          Featured Project
                        </p>
                        <h3 className="font-display min-h-[4rem] text-2xl font-bold leading-tight transition-colors group-hover:text-primary">
                          {project.title}
                        </h3>
                        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {visibleTags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded bg-secondary px-2 py-1 text-xs text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                          {remainingTagCount > 0 && (
                            <span className="rounded border border-border/70 px-2 py-1 text-xs text-muted-foreground">
                              +{remainingTagCount}
                            </span>
                          )}
                        </div>

                        {visibleOutcomes.length > 0 && (
                          <div className="mt-5">
                            <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">Key Outcomes</p>
                            <div className="space-y-1.5">
                              {visibleOutcomes.map((outcome) => (
                                <p
                                  key={outcome}
                                  className="rounded-md border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs leading-snug text-primary"
                                >
                                  {outcome}
                                </p>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
                          <a
                            href={project.github}
                            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                          >
                            <Github size={16} />
                            Code
                          </a>
                          <a
                            href={project.live}
                            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                          <button
                            type="button"
                            onClick={() => handleCaseStudyOpen(project)}
                            className="ml-auto flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
                          >
                            Case Study
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    </article>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {filteredProjects.length > 1 && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  type="button"
                  variant="heroOutline"
                  size="icon"
                  onClick={() => carouselApi?.scrollPrev()}
                  aria-label="Previous project"
                >
                  <ArrowLeft />
                </Button>

                <div className="flex items-center gap-2">
                  {filteredProjects.map((project, index) => (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => carouselApi?.scrollTo(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeSlide === index ? 'w-8 bg-primary' : 'w-2.5 bg-border hover:bg-muted-foreground/50'
                      }`}
                      aria-label={`Show ${project.title}`}
                      aria-current={activeSlide === index ? 'true' : undefined}
                    />
                  ))}
                </div>

                <Button
                  type="button"
                  variant="heroOutline"
                  size="icon"
                  onClick={() => carouselApi?.scrollNext()}
                  aria-label="Next project"
                >
                  <ArrowRight />
                </Button>
              </div>
            )}
          </Carousel>

          {filteredProjects.length > 1 && (
            <div className="mx-auto mt-7 flex max-w-5xl gap-2 overflow-x-auto rounded-full border border-border/60 bg-card/50 p-2 backdrop-blur-sm">
              {filteredProjects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={`max-w-[15rem] shrink-0 truncate rounded-full px-4 py-2 text-left text-xs transition-colors ${
                    activeSlide === index
                      ? 'bg-foreground text-background'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  {project.title}
                </button>
              ))}
            </div>
          )}
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

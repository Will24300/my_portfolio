import { Project } from '../types/project';

/**
 * ============================================================================
 * REAL PUBLIC GITHUB PROJECTS FOR VOLONTE RWICHA (@Will24300)
 * ============================================================================
 */
export const projectsData: Project[] = [
  {
    id: 'artisan-crumbs',
    title: 'Artisan Crumbs - Bakery E-Commerce',
    description: 'Full-stack online artisan bakery platform featuring reactive menu browsing, shopping cart state, and order management.',
    techStack: ['TypeScript', 'React', 'Node.js', 'Express', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Will24300/artisan-crumbs',
    liveUrl: 'https://artisan-crumbs.vercel.app/',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'bakery-web-app',
    title: 'Bakery Web Showcase',
    description: 'Modern, highly-responsive web store application designed for bakery catalog presentation and online ordering.',
    techStack: ['JavaScript', 'React', 'Tailwind CSS', 'Node.js'],
    githubUrl: 'https://github.com/Will24300/bakery',
    liveUrl: 'https://bakery-pi-one.vercel.app',
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop',
    featured: true,
    category: 'frontend',
  },
  {
    id: 'barkery-store',
    title: 'Barkery E-Commerce Platform',
    description: 'E-commerce web application featuring dynamic product catalog, inventory filters, and customer checkout flows.',
    techStack: ['JavaScript', 'Node.js', 'Express', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/Will24300/barkery',
    imageUrl: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=800&auto=format&fit=crop',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'my-portfolio',
    title: 'Developer Terminal Portfolio',
    description: 'Personal terminal-inspired developer portfolio featuring interactive CLI modal execution, typewriter titles, and custom theme tokens.',
    techStack: ['TypeScript', 'React 19', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/Will24300/my_portfolio',
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800&auto=format&fit=crop',
    featured: true,
    category: 'cli',
  },
  {
    id: 'calculator-app',
    title: 'Interactive Web Calculator',
    description: 'Responsive mathematical calculator application built with clean UI components and keyboard event handlers.',
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/Will24300/calculator-app',
    imageUrl: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=800&auto=format&fit=crop',
    featured: false,
    category: 'frontend',
  },
  {
    id: 'advanced-git',
    title: 'Advanced Git Workflows & Automation',
    description: 'Practical repository showcasing advanced version control techniques, branching strategies, and CI/CD pipelines.',
    techStack: ['Git', 'GitHub Actions', 'Bash Shell'],
    githubUrl: 'https://github.com/Will24300/advanced-git',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop',
    featured: false,
    category: 'open-source',
  },
];

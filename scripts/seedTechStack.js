const mongoose = require('mongoose');
const dotenv = require('dotenv');
const TechStack = require('../models/TechStack');

// Load environment variables
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

// Tech stack data
const techStackData = [
  // Frontend Technologies
  {
    name: 'JavaScript',
    description: 'Core language of the web. Essential for building interactive and dynamic web applications. Powers both frontend and backend development in the MEAN/MERN stack.',
    category: 'Frontend',
    year: '1995',
    paradigm: 'Multi-paradigm',
    features: ['ES6+ Syntax', 'Async/Await', 'Closures', 'Event Loop', 'DOM Manipulation'],
    useCases: ['Web Development', 'Single Page Applications', 'Real-time Apps', 'API Integration'],
    icon: 'SiJavascript',
    gradient: 'from-yellow-400 to-yellow-600',
    difficulty: 'Intermediate',
    topics: [
      {
        id: 0,
        title: 'Introduction to JavaScript',
        description: 'Learn the fundamentals of JavaScript, the language that powers the modern web.',
        subtopics: [],
        isIntro: true
      },
      {
        id: 1,
        title: 'Fundamentals',
        description: 'Core JavaScript concepts and syntax.',
        subtopics: ['Variables and Data Types', 'Operators', 'Control Flow', 'Functions', 'Scope and Hoisting', 'this Keyword']
      },
      {
        id: 2,
        title: 'ES6+ Features',
        description: 'Modern JavaScript features introduced in ES6 and beyond.',
        subtopics: ['Arrow Functions', 'Template Literals', 'Destructuring', 'Spread/Rest Operators', 'Modules', 'Classes']
      },
      {
        id: 3,
        title: 'Asynchronous JavaScript',
        description: 'Handle asynchronous operations effectively.',
        subtopics: ['Callbacks', 'Promises', 'Async/Await', 'Event Loop', 'Fetch API', 'Error Handling']
      },
      {
        id: 4,
        title: 'DOM Manipulation',
        description: 'Interact with and modify web page elements.',
        subtopics: ['Selecting Elements', 'Modifying Content', 'Event Listeners', 'Creating Elements', 'DOM Traversal']
      }
    ],
    resources: [
      { title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', type: 'Official' },
      { title: 'JavaScript.info', url: 'https://javascript.info', type: 'Tutorial' },
      { title: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net', type: 'Article' }
    ]
  },
  {
    name: 'TypeScript',
    description: 'Superset of JavaScript with static typing. Enhances code quality and developer experience in large-scale applications. Widely used in Angular and modern React projects.',
    category: 'Frontend',
    year: '2012',
    paradigm: 'Multi-paradigm',
    features: ['Static Typing', 'Interfaces', 'Generics', 'Type Inference', 'Enhanced IDE Support'],
    useCases: ['Enterprise Applications', 'Angular Projects', 'React with TypeScript', 'Type-safe APIs'],
    icon: 'SiTypescript',
    gradient: 'from-blue-500 to-blue-700',
    difficulty: 'Advanced',
    topics: [
      {
        id: 0,
        title: 'Introduction to TypeScript',
        description: 'Discover TypeScript and how it enhances JavaScript development with static typing.',
        subtopics: [],
        isIntro: true
      },
      {
        id: 1,
        title: 'Type System',
        description: 'Master TypeScript\'s powerful type system.',
        subtopics: ['Basic Types', 'Type Annotations', 'Type Inference', 'Union Types', 'Intersection Types', 'Type Aliases']
      },
      {
        id: 2,
        title: 'Advanced Types',
        description: 'Explore advanced TypeScript type features.',
        subtopics: ['Generics', 'Utility Types', 'Conditional Types', 'Mapped Types', 'Template Literal Types']
      },
      {
        id: 3,
        title: 'Interfaces and Classes',
        description: 'Object-oriented programming in TypeScript.',
        subtopics: ['Interfaces', 'Classes', 'Abstract Classes', 'Access Modifiers', 'Inheritance']
      },
      {
        id: 4,
        title: 'TypeScript with React',
        description: 'Use TypeScript in React applications.',
        subtopics: ['Component Types', 'Props Typing', 'State Typing', 'Event Handlers', 'Hooks with TypeScript']
      }
    ],
    resources: [
      { title: 'TypeScript Official Docs', url: 'https://www.typescriptlang.org/docs/', type: 'Official' },
      { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', type: 'Documentation' },
      { title: 'TypeScript Deep Dive', url: 'https://basarat.gitbook.io/typescript/', type: 'Article' }
    ]
  },
  {
    name: 'HTML5',
    description: 'Latest evolution of HTML. Foundation of web development providing semantic markup and modern APIs for building accessible and SEO-friendly applications.',
    category: 'Frontend',
    year: '2014',
    paradigm: 'Markup Language',
    features: ['Semantic Elements', 'Canvas API', 'Local Storage', 'Geolocation', 'Multimedia Support'],
    useCases: ['Web Structure', 'SEO Optimization', 'Accessibility', 'Progressive Web Apps'],
    icon: 'FaHtml5',
    gradient: 'from-orange-500 to-red-500',
    difficulty: 'Beginner',
    topics: [
      {
        id: 0,
        title: 'Introduction to HTML5',
        description: 'Learn the foundation of web development with HTML5.',
        subtopics: [],
        isIntro: true
      },
      {
        id: 1,
        title: 'Semantic HTML',
        description: 'Use meaningful HTML elements for better structure.',
        subtopics: ['Header, Nav, Main', 'Article, Section, Aside', 'Figure, Figcaption', 'Time, Mark', 'Semantic Best Practices']
      },
      {
        id: 2,
        title: 'Forms and Input',
        description: 'Create interactive forms with HTML5.',
        subtopics: ['Input Types', 'Form Validation', 'Datalist', 'Form Attributes', 'Accessibility']
      },
      {
        id: 3,
        title: 'Multimedia',
        description: 'Embed audio and video content.',
        subtopics: ['Video Element', 'Audio Element', 'Canvas API', 'SVG Graphics']
      },
      {
        id: 4,
        title: 'APIs and Storage',
        description: 'Modern browser APIs and storage options.',
        subtopics: ['Local Storage', 'Session Storage', 'Geolocation API', 'Drag and Drop', 'Web Workers']
      }
    ],
    resources: [
      { title: 'MDN HTML Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', type: 'Official' },
      { title: 'HTML5 Tutorial', url: 'https://www.w3schools.com/html/', type: 'Tutorial' },
      { title: 'HTML Best Practices', url: 'https://github.com/hail2u/html-best-practices', type: 'Article' }
    ]
  },
  {
    name: 'CSS3',
    description: 'Modern styling language for web applications. Creates responsive, beautiful, and animated user interfaces with advanced layout systems like Flexbox and Grid.',
    category: 'Frontend',
    year: '2011',
    paradigm: 'Style Sheet Language',
    features: ['Flexbox', 'Grid Layout', 'Animations', 'Media Queries', 'Custom Properties'],
    useCases: ['Responsive Design', 'UI Styling', 'Animations', 'Layout Design'],
    icon: 'FaCss3Alt',
    gradient: 'from-blue-400 to-blue-600',
    difficulty: 'Intermediate',
    topics: [
      {
        id: 0,
        title: 'Introduction to CSS3',
        description: 'Master the art of styling web applications with CSS3.',
        subtopics: [],
        isIntro: true
      },
      {
        id: 1,
        title: 'Selectors and Specificity',
        description: 'Target elements effectively with CSS selectors.',
        subtopics: ['Basic Selectors', 'Combinators', 'Pseudo-classes', 'Pseudo-elements', 'Specificity Rules']
      },
      {
        id: 2,
        title: 'Flexbox Layout',
        description: 'Create flexible one-dimensional layouts.',
        subtopics: ['Flex Container', 'Flex Items', 'Alignment', 'Ordering', 'Responsive Flexbox']
      },
      {
        id: 3,
        title: 'Grid Layout',
        description: 'Build complex two-dimensional layouts.',
        subtopics: ['Grid Container', 'Grid Template', 'Grid Areas', 'Auto-placement', 'Responsive Grids']
      },
      {
        id: 4,
        title: 'Animations and Transitions',
        description: 'Add motion and interactivity to your designs.',
        subtopics: ['Transitions', 'Keyframe Animations', 'Transform', 'Animation Properties', 'Performance']
      },
      {
        id: 5,
        title: 'Responsive Design',
        description: 'Create layouts that work on all devices.',
        subtopics: ['Media Queries', 'Mobile-First', 'Breakpoints', 'Viewport Units', 'Container Queries']
      }
    ],
    resources: [
      { title: 'MDN CSS Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', type: 'Official' },
      { title: 'CSS Tricks', url: 'https://css-tricks.com', type: 'Article' },
      { title: 'Flexbox Froggy', url: 'https://flexboxfroggy.com', type: 'Tutorial' },
      { title: 'Grid Garden', url: 'https://cssgridgarden.com', type: 'Tutorial' }
    ]
  },
  // Frameworks
  {
    name: 'React',
    description: 'Popular JavaScript library for building user interfaces. Component-based architecture makes it perfect for building scalable SPAs. Core of the MERN stack.',
    category: 'Framework',
    year: '2013',
    paradigm: 'Component-based',
    features: ['Virtual DOM', 'JSX', 'Hooks', 'Component Reusability', 'Unidirectional Data Flow'],
    useCases: ['Single Page Apps', 'Progressive Web Apps', 'Mobile Apps (React Native)', 'Dashboard UIs'],
    icon: 'FaReact',
    gradient: 'from-cyan-400 to-blue-500',
    difficulty: 'Intermediate',
    topics: [
      {
        id: 0,
        title: 'Introduction to React',
        description: 'Get started with React - understand what it is, why it\'s popular, and where it\'s used in modern web development.',
        subtopics: [],
        isIntro: true
      },
      {
        id: 1,
        title: 'Core Concepts',
        description: 'Fundamental concepts every React developer should master to build effective applications.',
        subtopics: [
          'JSX Syntax and Expressions',
          'Components and Props',
          'State Management',
          'Lifecycle Methods',
          'Virtual DOM and Reconciliation',
          'Event Handling',
          'Conditional Rendering',
          'Lists and Keys'
        ]
      },
      {
        id: 2,
        title: 'React Hooks',
        description: 'Modern React features for functional components that simplify state and side effect management.',
        subtopics: [
          'useState - State Management',
          'useEffect - Side Effects',
          'useContext - Context API',
          'useReducer - Complex State',
          'useMemo - Performance Optimization',
          'useCallback - Function Memoization',
          'useRef - DOM References',
          'Custom Hooks - Reusable Logic'
        ]
      },
      {
        id: 3,
        title: 'Component Patterns',
        description: 'Advanced patterns and best practices for building scalable React applications.',
        subtopics: [
          'Higher-Order Components (HOC)',
          'Render Props Pattern',
          'Compound Components',
          'Controlled vs Uncontrolled Components',
          'Container/Presentational Pattern',
          'Provider Pattern',
          'Composition vs Inheritance'
        ]
      },
      {
        id: 4,
        title: 'State Management',
        description: 'Techniques and libraries for managing application state in React.',
        subtopics: [
          'Context API',
          'Redux Toolkit',
          'Zustand',
          'Recoil',
          'MobX',
          'Local vs Global State',
          'State Lifting',
          'Prop Drilling Solutions'
        ]
      },
      {
        id: 5,
        title: 'Routing',
        description: 'Navigation and routing in React applications using React Router.',
        subtopics: [
          'React Router Setup',
          'Route Configuration',
          'Dynamic Routes',
          'Nested Routes',
          'Protected Routes',
          'Navigation Hooks',
          'URL Parameters',
          'Programmatic Navigation'
        ]
      },
      {
        id: 6,
        title: 'Performance Optimization',
        description: 'Techniques to optimize React application performance and user experience.',
        subtopics: [
          'React.memo for Component Memoization',
          'useMemo and useCallback',
          'Code Splitting with React.lazy',
          'Suspense for Lazy Loading',
          'Virtualization for Large Lists',
          'Debouncing and Throttling',
          'Bundle Size Optimization',
          'Profiling with React DevTools'
        ]
      },
      {
        id: 7,
        title: 'Testing',
        description: 'Testing strategies and tools for React applications.',
        subtopics: [
          'Jest - Unit Testing',
          'React Testing Library',
          'Component Testing',
          'Integration Testing',
          'Mocking API Calls',
          'Testing Hooks',
          'Snapshot Testing',
          'End-to-End Testing with Cypress'
        ]
      }
    ],
    resources: [
      {
        title: 'Official React Documentation',
        url: 'https://react.dev',
        type: 'Official'
      },
      {
        title: 'React Tutorial - Learn React',
        url: 'https://react.dev/learn',
        type: 'Tutorial'
      },
      {
        title: 'React API Reference',
        url: 'https://react.dev/reference/react',
        type: 'Documentation'
      },
      {
        title: 'React Hooks Complete Guide',
        url: 'https://react.dev/reference/react/hooks',
        type: 'Documentation'
      },
      {
        title: 'React for Beginners - Wes Bos',
        url: 'https://reactforbeginners.com',
        type: 'Tutorial'
      },
      {
        title: 'Full React Course - freeCodeCamp',
        url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
        type: 'Video'
      },
      {
        title: 'React Patterns',
        url: 'https://reactpatterns.com',
        type: 'Article'
      }
    ]
  },
  {
    name: 'Angular',
    description: 'Comprehensive TypeScript-based framework by Google. Full-featured framework for building enterprise-grade applications. Core of the MEAN stack.',
    category: 'Framework',
    year: '2016',
    paradigm: 'MVC/MVVM',
    features: ['Two-way Data Binding', 'Dependency Injection', 'RxJS', 'TypeScript Native', 'CLI Tools'],
    useCases: ['Enterprise Applications', 'Large-scale SPAs', 'Admin Dashboards', 'Progressive Web Apps'],
    icon: 'FaAngular',
    gradient: 'from-red-500 to-red-700',
    difficulty: 'Advanced',
    topics: [
      {
        id: 0,
        title: 'Introduction to Angular',
        description: 'Get started with Angular, Google\'s powerful framework for building enterprise applications.',
        subtopics: [],
        isIntro: true
      },
      {
        id: 1,
        title: 'Components and Templates',
        description: 'Build UI with Angular components.',
        subtopics: ['Component Architecture', 'Templates', 'Data Binding', 'Directives', 'Pipes']
      },
      {
        id: 2,
        title: 'Services and Dependency Injection',
        description: 'Share data and logic across components.',
        subtopics: ['Services', 'Dependency Injection', 'Providers', 'Singleton Services']
      },
      {
        id: 3,
        title: 'Routing',
        description: 'Navigate between views in Angular.',
        subtopics: ['Router Setup', 'Route Parameters', 'Child Routes', 'Guards', 'Lazy Loading']
      },
      {
        id: 4,
        title: 'RxJS and Observables',
        description: 'Handle asynchronous data streams.',
        subtopics: ['Observables', 'Operators', 'Subjects', 'Error Handling', 'Best Practices']
      }
    ],
    resources: [
      { title: 'Angular Official Docs', url: 'https://angular.io/docs', type: 'Official' },
      { title: 'Angular Tutorial', url: 'https://angular.io/tutorial', type: 'Tutorial' },
      { title: 'RxJS Documentation', url: 'https://rxjs.dev', type: 'Documentation' }
    ]
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development. Provides low-level utility classes for building custom designs without leaving your HTML.',
    category: 'Framework',
    year: '2017',
    paradigm: 'Utility-first CSS',
    features: ['Utility Classes', 'Responsive Design', 'Dark Mode', 'Customizable', 'JIT Compiler'],
    useCases: ['Rapid Prototyping', 'Custom Designs', 'Component Libraries', 'Modern Web Apps'],
    icon: 'SiTailwindcss',
    gradient: 'from-cyan-400 to-teal-500',
    difficulty: 'Beginner',
    topics: [
      {
        id: 0,
        title: 'Introduction to Tailwind CSS',
        description: 'Learn utility-first CSS for rapid UI development.',
        subtopics: [],
        isIntro: true
      },
      {
        id: 1,
        title: 'Core Concepts',
        description: 'Understand Tailwind\'s utility-first approach.',
        subtopics: ['Utility Classes', 'Responsive Design', 'State Variants', 'Dark Mode', 'Customization']
      },
      {
        id: 2,
        title: 'Layout and Spacing',
        description: 'Build layouts with Tailwind utilities.',
        subtopics: ['Flexbox', 'Grid', 'Spacing', 'Sizing', 'Container']
      },
      {
        id: 3,
        title: 'Styling',
        description: 'Style elements with utility classes.',
        subtopics: ['Colors', 'Typography', 'Backgrounds', 'Borders', 'Effects']
      }
    ],
    resources: [
      { title: 'Tailwind CSS Docs', url: 'https://tailwindcss.com/docs', type: 'Official' },
      { title: 'Tailwind UI', url: 'https://tailwindui.com', type: 'Tutorial' },
      { title: 'Tailwind Play', url: 'https://play.tailwindcss.com', type: 'Tutorial' }
    ]
  },
  {
    name: 'Bootstrap',
    description: 'Popular CSS framework for responsive web development. Provides pre-built components and grid system for quick and consistent UI development.',
    category: 'Framework',
    year: '2011',
    paradigm: 'Component-based CSS',
    features: ['Grid System', 'Pre-built Components', 'Responsive Utilities', 'JavaScript Plugins', 'Customizable'],
    useCases: ['Rapid Development', 'Responsive Websites', 'Admin Templates', 'Landing Pages'],
    icon: 'SiBootstrap',
    gradient: 'from-purple-500 to-purple-700',
    difficulty: 'Beginner',
    topics: [
      {
        id: 0,
        title: 'Introduction to Bootstrap',
        description: 'Learn Bootstrap for rapid responsive web development.',
        subtopics: [],
        isIntro: true
      },
      {
        id: 1,
        title: 'Grid System',
        description: 'Create responsive layouts with Bootstrap grid.',
        subtopics: ['Container', 'Rows and Columns', 'Breakpoints', 'Gutters', 'Nesting']
      },
      {
        id: 2,
        title: 'Components',
        description: 'Use pre-built Bootstrap components.',
        subtopics: ['Buttons', 'Cards', 'Navbar', 'Forms', 'Modals', 'Alerts']
      },
      {
        id: 3,
        title: 'Utilities',
        description: 'Apply utility classes for quick styling.',
        subtopics: ['Spacing', 'Colors', 'Display', 'Flexbox', 'Text']
      }
    ],
    resources: [
      { title: 'Bootstrap Docs', url: 'https://getbootstrap.com/docs', type: 'Official' },
      { title: 'Bootstrap Examples', url: 'https://getbootstrap.com/docs/5.3/examples/', type: 'Tutorial' }
    ]
  },
  // Backend Technologies
  {
    name: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 engine. Enables server-side JavaScript development. Core backend technology in both MEAN and MERN stacks.',
    category: 'Backend',
    year: '2009',
    paradigm: 'Event-driven',
    features: ['Non-blocking I/O', 'NPM Ecosystem', 'Event Loop', 'Scalable', 'Cross-platform'],
    useCases: ['REST APIs', 'Real-time Applications', 'Microservices', 'Server-side Rendering'],
    icon: 'FaNodeJs',
    gradient: 'from-green-500 to-green-700',
    difficulty: 'Intermediate',
    topics: [
      {
        id: 0,
        title: 'Introduction to Node.js',
        description: 'Learn server-side JavaScript with Node.js.',
        subtopics: [],
        isIntro: true
      },
      {
        id: 1,
        title: 'Core Modules',
        description: 'Work with built-in Node.js modules.',
        subtopics: ['File System', 'HTTP', 'Path', 'Events', 'Streams', 'Buffer']
      },
      {
        id: 2,
        title: 'NPM and Packages',
        description: 'Manage dependencies with NPM.',
        subtopics: ['Package.json', 'Installing Packages', 'Semantic Versioning', 'Scripts', 'Publishing']
      },
      {
        id: 3,
        title: 'Asynchronous Programming',
        description: 'Handle async operations in Node.js.',
        subtopics: ['Callbacks', 'Promises', 'Async/Await', 'Event Loop', 'Error Handling']
      },
      {
        id: 4,
        title: 'Building APIs',
        description: 'Create RESTful APIs with Node.js.',
        subtopics: ['HTTP Server', 'Routing', 'Middleware', 'Authentication', 'Error Handling']
      }
    ],
    resources: [
      { title: 'Node.js Official Docs', url: 'https://nodejs.org/docs', type: 'Official' },
      { title: 'Node.js Tutorial', url: 'https://nodejs.dev/learn', type: 'Tutorial' },
      { title: 'Node.js Best Practices', url: 'https://github.com/goldbergyoni/nodebestpractices', type: 'Article' }
    ]
  },
  {
    name: 'Express.js',
    description: 'Fast, minimalist web framework for Node.js. Simplifies building robust APIs and web applications. Essential part of MEAN and MERN backend development.',
    category: 'Backend',
    year: '2010',
    paradigm: 'Middleware-based',
    features: ['Routing', 'Middleware', 'Template Engines', 'Error Handling', 'RESTful APIs'],
    useCases: ['REST APIs', 'Web Applications', 'Microservices', 'API Gateways'],
    icon: 'SiExpress',
    gradient: 'from-gray-600 to-gray-800',
    difficulty: 'Intermediate',
    topics: [
      {
        id: 0,
        title: 'Introduction to Express.js',
        description: 'Build web applications and APIs with Express.js.',
        subtopics: [],
        isIntro: true
      },
      {
        id: 1,
        title: 'Routing',
        description: 'Handle HTTP requests with Express routing.',
        subtopics: ['Basic Routes', 'Route Parameters', 'Query Strings', 'Route Handlers', 'Router Middleware']
      },
      {
        id: 2,
        title: 'Middleware',
        description: 'Use middleware for request processing.',
        subtopics: ['Built-in Middleware', 'Custom Middleware', 'Third-party Middleware', 'Error Handling', 'Middleware Order']
      },
      {
        id: 3,
        title: 'RESTful APIs',
        description: 'Build REST APIs with Express.',
        subtopics: ['CRUD Operations', 'Status Codes', 'Request/Response', 'Validation', 'Authentication']
      },
      {
        id: 4,
        title: 'Database Integration',
        description: 'Connect Express with databases.',
        subtopics: ['MongoDB with Mongoose', 'MySQL', 'PostgreSQL', 'Connection Pooling', 'ORM/ODM']
      }
    ],
    resources: [
      { title: 'Express.js Official Docs', url: 'https://expressjs.com', type: 'Official' },
      { title: 'Express.js Guide', url: 'https://expressjs.com/en/guide/routing.html', type: 'Documentation' },
      { title: 'REST API with Express', url: 'https://www.youtube.com/watch?v=pKd0Rpw7O48', type: 'Video' }
    ]
  },
  // Database Technologies
  {
    name: 'MongoDB',
    description: 'NoSQL document database with flexible schema. Stores data in JSON-like documents. The "M" in MEAN and MERN stacks, perfect for modern web applications.',
    category: 'Database',
    year: '2009',
    paradigm: 'Document-oriented',
    features: ['Flexible Schema', 'JSON Documents', 'Scalability', 'Aggregation Framework', 'Indexing'],
    useCases: ['Web Applications', 'Real-time Analytics', 'Content Management', 'IoT Applications'],
    icon: 'SiMongodb',
    gradient: 'from-green-500 to-green-700',
    difficulty: 'Intermediate',
    topics: [
      {
        id: 0,
        title: 'Introduction to MongoDB',
        description: 'Learn NoSQL database development with MongoDB.',
        subtopics: [],
        isIntro: true
      },
      {
        id: 1,
        title: 'CRUD Operations',
        description: 'Perform basic database operations.',
        subtopics: ['Insert Documents', 'Query Documents', 'Update Documents', 'Delete Documents', 'Bulk Operations']
      },
      {
        id: 2,
        title: 'Data Modeling',
        description: 'Design effective MongoDB schemas.',
        subtopics: ['Document Structure', 'Embedded Documents', 'References', 'Schema Design Patterns', 'Validation']
      },
      {
        id: 3,
        title: 'Aggregation',
        description: 'Process and analyze data with aggregation.',
        subtopics: ['Aggregation Pipeline', 'Stages', 'Operators', 'Group and Match', 'Performance']
      },
      {
        id: 4,
        title: 'Indexing',
        description: 'Optimize query performance with indexes.',
        subtopics: ['Index Types', 'Creating Indexes', 'Compound Indexes', 'Index Performance', 'Text Search']
      }
    ],
    resources: [
      { title: 'MongoDB Official Docs', url: 'https://www.mongodb.com/docs/', type: 'Official' },
      { title: 'MongoDB University', url: 'https://university.mongodb.com', type: 'Tutorial' },
      { title: 'MongoDB Crash Course', url: 'https://www.youtube.com/watch?v=-56x56UppqQ', type: 'Video' }
    ]
  },
  {
    name: 'MySQL',
    description: 'Popular open-source relational database. ACID-compliant with strong data integrity. Widely used for structured data and complex queries.',
    category: 'Database',
    year: '1995',
    paradigm: 'Relational',
    features: ['ACID Compliance', 'SQL Queries', 'Transactions', 'Stored Procedures', 'Replication'],
    useCases: ['E-commerce', 'Data Warehousing', 'Web Applications', 'Financial Systems'],
    icon: 'SiMysql',
    gradient: 'from-blue-500 to-blue-700',
    difficulty: 'Intermediate',
    topics: [
      {
        id: 0,
        title: 'Introduction to MySQL',
        description: 'Learn relational database management with MySQL.',
        subtopics: [],
        isIntro: true
      },
      {
        id: 1,
        title: 'SQL Basics',
        description: 'Master SQL query language.',
        subtopics: ['SELECT Queries', 'INSERT, UPDATE, DELETE', 'WHERE Clause', 'JOIN Operations', 'Aggregate Functions']
      },
      {
        id: 2,
        title: 'Database Design',
        description: 'Design efficient database schemas.',
        subtopics: ['Tables and Columns', 'Primary Keys', 'Foreign Keys', 'Normalization', 'Relationships']
      },
      {
        id: 3,
        title: 'Advanced Features',
        description: 'Use advanced MySQL capabilities.',
        subtopics: ['Stored Procedures', 'Triggers', 'Views', 'Transactions', 'Indexes']
      }
    ],
    resources: [
      { title: 'MySQL Official Docs', url: 'https://dev.mysql.com/doc/', type: 'Official' },
      { title: 'MySQL Tutorial', url: 'https://www.mysqltutorial.org', type: 'Tutorial' }
    ]
  },
  {
    name: 'PostgreSQL',
    description: 'Advanced open-source relational database. Known for reliability, feature robustness, and performance. Supports both SQL and JSON querying.',
    category: 'Database',
    year: '1996',
    paradigm: 'Relational',
    features: ['ACID Compliance', 'JSON Support', 'Full-text Search', 'Advanced Indexing', 'Extensibility'],
    useCases: ['Enterprise Applications', 'Geospatial Data', 'Data Analytics', 'Complex Queries'],
    icon: 'SiPostgresql',
    gradient: 'from-blue-600 to-indigo-600',
    difficulty: 'Advanced',
    topics: [
      {
        id: 0,
        title: 'Introduction to PostgreSQL',
        description: 'Explore the world\'s most advanced open-source database.',
        subtopics: [],
        isIntro: true
      },
      {
        id: 1,
        title: 'SQL and Queries',
        description: 'Write powerful SQL queries.',
        subtopics: ['SELECT Statements', 'Joins', 'Subqueries', 'CTEs', 'Window Functions']
      },
      {
        id: 2,
        title: 'JSON and NoSQL Features',
        description: 'Work with JSON data in PostgreSQL.',
        subtopics: ['JSON Data Types', 'JSON Operators', 'JSONB', 'Indexing JSON', 'Querying JSON']
      },
      {
        id: 3,
        title: 'Performance Optimization',
        description: 'Optimize PostgreSQL performance.',
        subtopics: ['Indexes', 'Query Planning', 'EXPLAIN', 'Vacuuming', 'Connection Pooling']
      }
    ],
    resources: [
      { title: 'PostgreSQL Official Docs', url: 'https://www.postgresql.org/docs/', type: 'Official' },
      { title: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com', type: 'Tutorial' }
    ]
  },
  // Tools
  {
    name: 'Git',
    description: 'Distributed version control system. Essential for collaborative development, code versioning, and maintaining project history across teams.',
    category: 'Tools',
    year: '2005',
    paradigm: 'Version Control',
    features: ['Branching', 'Merging', 'Distributed', 'Fast Performance', 'Open Source'],
    useCases: ['Version Control', 'Team Collaboration', 'Code Review', 'CI/CD Integration'],
    icon: 'SiGit',
    gradient: 'from-orange-500 to-red-600',
    difficulty: 'Intermediate',
    topics: [
      {
        id: 0,
        title: 'Introduction to Git',
        description: 'Master version control with Git.',
        subtopics: [],
        isIntro: true
      },
      {
        id: 1,
        title: 'Basic Commands',
        description: 'Learn essential Git commands.',
        subtopics: ['git init', 'git add', 'git commit', 'git status', 'git log', 'git diff']
      },
      {
        id: 2,
        title: 'Branching and Merging',
        description: 'Work with branches effectively.',
        subtopics: ['Creating Branches', 'Switching Branches', 'Merging', 'Resolving Conflicts', 'Branch Strategies']
      },
      {
        id: 3,
        title: 'Remote Repositories',
        description: 'Collaborate with remote repositories.',
        subtopics: ['git clone', 'git push', 'git pull', 'git fetch', 'Remote Tracking']
      },
      {
        id: 4,
        title: 'Advanced Git',
        description: 'Master advanced Git techniques.',
        subtopics: ['Rebasing', 'Cherry-picking', 'Stashing', 'Reset and Revert', 'Git Hooks']
      }
    ],
    resources: [
      { title: 'Git Official Docs', url: 'https://git-scm.com/doc', type: 'Official' },
      { title: 'Pro Git Book', url: 'https://git-scm.com/book/en/v2', type: 'Documentation' },
      { title: 'Learn Git Branching', url: 'https://learngitbranching.js.org', type: 'Tutorial' }
    ]
  },
  {
    name: 'Docker',
    description: 'Platform for developing, shipping, and running applications in containers. Ensures consistency across different environments and simplifies deployment.',
    category: 'Tools',
    year: '2013',
    paradigm: 'Containerization',
    features: ['Containerization', 'Portability', 'Isolation', 'Scalability', 'Microservices Support'],
    useCases: ['Application Deployment', 'Microservices', 'CI/CD Pipelines', 'Development Environments'],
    icon: 'SiDocker',
    gradient: 'from-blue-500 to-cyan-500',
    difficulty: 'Advanced',
    topics: [
      {
        id: 0,
        title: 'Introduction to Docker',
        description: 'Learn containerization with Docker.',
        subtopics: [],
        isIntro: true
      },
      {
        id: 1,
        title: 'Docker Basics',
        description: 'Understand Docker fundamentals.',
        subtopics: ['Images', 'Containers', 'Dockerfile', 'Docker Hub', 'Basic Commands']
      },
      {
        id: 2,
        title: 'Docker Compose',
        description: 'Manage multi-container applications.',
        subtopics: ['docker-compose.yml', 'Services', 'Networks', 'Volumes', 'Environment Variables']
      },
      {
        id: 3,
        title: 'Networking and Volumes',
        description: 'Connect containers and persist data.',
        subtopics: ['Container Networks', 'Port Mapping', 'Volume Mounting', 'Data Persistence']
      },
      {
        id: 4,
        title: 'Production Deployment',
        description: 'Deploy Docker containers in production.',
        subtopics: ['Docker Swarm', 'Kubernetes', 'Security', 'Optimization', 'Monitoring']
      }
    ],
    resources: [
      { title: 'Docker Official Docs', url: 'https://docs.docker.com', type: 'Official' },
      { title: 'Docker Tutorial', url: 'https://docker-curriculum.com', type: 'Tutorial' },
      { title: 'Docker for Beginners', url: 'https://www.youtube.com/watch?v=fqMOX6JJhGo', type: 'Video' }
    ]
  },
  {
    name: 'Postman',
    description: 'API development and testing platform. Simplifies API testing, documentation, and collaboration. Essential tool for backend development.',
    category: 'Tools',
    year: '2012',
    paradigm: 'API Testing',
    features: ['API Testing', 'Collections', 'Environment Variables', 'Automated Testing', 'Documentation'],
    useCases: ['API Development', 'Testing', 'Documentation', 'Team Collaboration'],
    icon: 'SiPostman',
    gradient: 'from-orange-500 to-orange-600',
    difficulty: 'Beginner',
    topics: [
      {
        id: 0,
        title: 'Introduction to Postman',
        description: 'Learn API testing and development with Postman.',
        subtopics: [],
        isIntro: true
      },
      {
        id: 1,
        title: 'Making Requests',
        description: 'Send HTTP requests with Postman.',
        subtopics: ['GET Requests', 'POST Requests', 'PUT/PATCH', 'DELETE', 'Headers and Body']
      },
      {
        id: 2,
        title: 'Collections and Environments',
        description: 'Organize and manage API requests.',
        subtopics: ['Creating Collections', 'Environment Variables', 'Global Variables', 'Sharing Collections']
      },
      {
        id: 3,
        title: 'Testing and Automation',
        description: 'Automate API testing.',
        subtopics: ['Test Scripts', 'Assertions', 'Collection Runner', 'Newman CLI', 'CI/CD Integration']
      }
    ],
    resources: [
      { title: 'Postman Learning Center', url: 'https://learning.postman.com', type: 'Official' },
      { title: 'Postman Tutorial', url: 'https://www.youtube.com/watch?v=VywxIQ2ZXw4', type: 'Video' }
    ]
  }
];

// Seed function
const seedTechStack = async () => {
  try {
    await connectDB();

    // Clear existing data
    console.log('🗑️  Clearing existing tech stack data...');
    await TechStack.deleteMany({});

    // Insert new data
    console.log('📝 Inserting tech stack data...');
    const result = await TechStack.insertMany(techStackData);

    console.log(`✅ Successfully seeded ${result.length} technologies!`);
    console.log('\n📊 Summary:');

    const stats = await TechStack.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 }
        }
      }
    ]);

    stats.forEach(stat => {
      console.log(`   ${stat._id}: ${stat.count}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding tech stack:', error);
    process.exit(1);
  }
};

// Run seed
seedTechStack();


import type { LucideIcon } from 'lucide-react';
import {
  BarChart3,
  Bot,
  Boxes,
  BrainCircuit,
  Brush,
  Clapperboard,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  FileCode2,
  FileSpreadsheet,
  Film,
  Globe,
  Layers,
  LayoutDashboard,
  LineChart,
  Megaphone,
  MessageSquareText,
  MousePointerClick,
  Palette,
  PenTool,
  PieChart,
  Search,
  Share2,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Table2,
  TerminalSquare,
  TestTube2,
  Wand2,
} from 'lucide-react';
import type { TierId } from './pricing';

/**
 * The K76 Learn course catalogue.
 *
 * Each category holds its courses. Every course gets its own page at
 * /courses/<category slug>/<course slug>, is listed on the Courses and Fees
 * pages, and appears in the enquiry form and the sitemap.
 *
 * Set `available: false` on a course to hide it everywhere without deleting it.
 */

export type Fees = Partial<Record<TierId, number>> & { advanced: number; premium: number };

export type CourseLogistics = {
  /** e.g. "12 weeks". Leave unset until confirmed — shown as "Shared on enquiry". */
  duration?: string;
  /** e.g. "Classroom / Live online / Hybrid". */
  mode?: string;
  /** e.g. "K76 Learn certificate of completion". */
  certification?: string;
};

export type Course = {
  slug: string;
  name: string;
  icon: LucideIcon;
  /** One or two sentences for cards and meta descriptions. */
  short: string;
  overview: string;
  topics: string[];
  skills: string[];
  projects: string[];
  /** Falls back to the category's `whoCanJoin`. */
  whoCanJoin?: string[];
  fees: Fees;
  logistics?: CourseLogistics;
  /** Bundles only: slugs of the courses included. */
  includes?: string[];
  available?: boolean;
};

export type Category = {
  slug: string;
  title: string;
  icon: LucideIcon;
  /** Tailwind gradient classes used for icons and glows. */
  accent: string;
  tagline: string;
  description: string;
  whoCanJoin: string[];
  isBundle?: boolean;
  courses: Course[];
};

export const categories: Category[] = [
  {
    slug: 'design-creative',
    title: 'Design and Creative',
    icon: Palette,
    accent: 'from-fuchsia-400 to-violet-600',
    tagline: 'Design that communicates, converts and stands out.',
    description:
      'Professional design and creative courses covering graphic design, UI/UX, video editing, AI video production and branding — taught through real briefs and portfolio-ready projects.',
    whoCanJoin: [
      'Students with a creative interest — no prior experience needed for Basic',
      'Graduates looking for a career in design or content',
      'Freelancers who want to offer professional creative services',
      'Marketers and founders who want in-house creative skills',
    ],
    courses: [
      {
        slug: 'graphic-design',
        name: 'Graphic Design',
        icon: PenTool,
        short: 'Master visual communication — layout, typography, colour and industry-standard design tools — and build a professional design portfolio.',
        overview:
          'This course builds the visual foundations every designer needs and applies them to real brand, print and digital work. You will learn the principles behind strong layouts, work confidently in professional design software and produce a portfolio of campaign, social and print designs reviewed by trainers.',
        topics: [
          'Design principles, layout and composition',
          'Typography and colour theory',
          'Adobe Photoshop',
          'Adobe Illustrator',
          'Social media and advertising creatives',
          'Print design — posters, brochures and packaging basics',
          'Portfolio presentation',
        ],
        skills: [
          'Visual hierarchy and composition',
          'Photo editing and manipulation',
          'Vector illustration',
          'Designing for social and print',
          'Presenting design decisions',
        ],
        projects: ['Social media campaign creative set', 'Event poster and brochure', 'Product packaging concept', 'Personal design portfolio'],
        fees: { basic: 19999, advanced: 29999, premium: 44999 },
      },
      {
        slug: 'ui-ux-design',
        name: 'UI/UX Design',
        icon: Layers,
        short: 'Design digital products people love to use. Research users, wireframe, prototype in Figma and build design systems.',
        overview:
          'Learn the end-to-end product design process used by product teams. You will start with user research and problem framing, move through wireframes and interactive prototypes, and finish with a consistent design system — building a portfolio of case studies along the way.',
        topics: ['UI design fundamentals', 'UX research', 'Wireframing', 'Prototyping', 'Figma', 'Design systems', 'Real-world design projects'],
        skills: [
          'Visual hierarchy, typography and colour',
          'User interviews and usability testing',
          'Information architecture and user flows',
          'Interactive prototyping in Figma',
          'Components, variants and design tokens',
        ],
        projects: [
          'Redesign an existing mobile app based on user research',
          'Design and prototype a web product from scratch',
          'Create a reusable design system in Figma',
          'Publish portfolio-ready case studies',
        ],
        fees: { basic: 24999, advanced: 39999, premium: 59999 },
      },
      {
        slug: 'video-editing',
        name: 'Video Editing',
        icon: Film,
        short: 'Edit professional videos for social media, brands and YouTube — from cutting and pacing to colour, sound and motion graphics.',
        overview:
          'Video is the most in-demand content format. This course teaches the craft of editing — storytelling, pacing, colour and audio — in professional editing software, then applies it to short-form reels, brand films and long-form YouTube content.',
        topics: [
          'Editing fundamentals and storytelling',
          'Adobe Premiere Pro',
          'DaVinci Resolve',
          'Colour correction and grading',
          'Audio editing and sound design',
          'Motion graphics with After Effects',
          'Short-form content for Reels and Shorts',
        ],
        skills: ['Narrative and pacing', 'Multi-track editing workflows', 'Colour correction', 'Audio clean-up and mixing', 'Titles and motion graphics'],
        projects: ['Short-form social reel series', 'Brand promotional video', 'YouTube video edit with motion graphics', 'Showreel'],
        fees: { basic: 19999, advanced: 34999, premium: 49999 },
      },
      {
        slug: 'ai-video-production',
        name: 'AI Video Production',
        icon: Clapperboard,
        short: 'Create videos with generative AI — scripts, visuals, voice-overs and avatars — and combine them with professional editing.',
        overview:
          'Generative AI is changing how video is made. This course teaches you to plan, script and produce videos using AI tools for visuals, voice and editing, and to combine AI output with professional editing so the result looks polished, on-brand and responsible.',
        topics: [
          'AI-assisted scripting and storyboarding',
          'Text-to-video and image-to-video tools',
          'AI voice-overs and dubbing',
          'AI avatars and presenters',
          'AI-powered editing and enhancement',
          'Combining AI footage with traditional editing',
          'Ethics, copyright and responsible use',
        ],
        skills: [
          'Prompting for visual generation',
          'Storyboarding with AI',
          'Voice and audio generation',
          'Hybrid AI and manual editing',
          'Responsible AI content practices',
        ],
        projects: ['AI-generated product explainer', 'Faceless social video series', 'Multilingual video with AI dubbing', 'AI video portfolio'],
        fees: { basic: 19999, advanced: 34999, premium: 54999 },
      },
      {
        slug: 'branding-creative-design',
        name: 'Branding & Creative Design',
        icon: Brush,
        short: 'Build brands from strategy to identity — logos, visual systems, brand guidelines and creative campaigns.',
        overview:
          'Great brands are designed, not decorated. This course connects brand strategy with visual identity: you will research audiences, define positioning, design logos and identity systems, and produce brand guidelines and campaign creatives for real-world briefs.',
        topics: [
          'Brand strategy and positioning',
          'Logo design',
          'Visual identity systems',
          'Brand guidelines',
          'Packaging and merchandise design',
          'Campaign creative direction',
          'Presenting to clients',
        ],
        skills: ['Brand research and positioning', 'Logo and identity design', 'Building brand guidelines', 'Creative direction', 'Client presentation'],
        projects: ['Complete brand identity for a new business', 'Brand guidelines document', 'Rebrand case study', 'Launch campaign creatives'],
        fees: { basic: 19999, advanced: 34999, premium: 49999 },
      },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    icon: Megaphone,
    accent: 'from-sky-400 to-blue-600',
    tagline: 'Grow brands with strategy, content and data.',
    description:
      'Digital marketing courses covering SEO, social media, Meta and Google Ads, performance marketing and AI-powered marketing — with live campaigns, analytics and reporting.',
    whoCanJoin: [
      'College students from any stream',
      'Graduates looking for a marketing career',
      'Entrepreneurs and small business owners',
      'Freelancers who want to offer marketing services',
    ],
    courses: [
      {
        slug: 'digital-marketing',
        name: 'Digital Marketing',
        icon: Megaphone,
        short: 'The complete digital marketing programme — social media, SEO, Google Ads, Meta Ads, content, performance marketing and analytics.',
        overview:
          'This programme takes you through the full digital marketing stack used by modern brands. You will plan campaigns, run ads, optimise for search, create content that converts and read the numbers that prove what works. Every module ends with a practical task on real platforms.',
        topics: [
          'Social media marketing',
          'Search engine optimisation (SEO)',
          'Google Ads',
          'Meta Ads',
          'Content marketing',
          'Performance marketing',
          'Analytics and reporting',
        ],
        skills: [
          'Campaign planning and strategy',
          'Keyword research and on-page SEO',
          'Ad account setup, targeting and budgeting',
          'Funnel thinking and conversion tracking',
          'Dashboards and performance reports',
        ],
        projects: [
          'Social media content plan for a brand',
          'SEO audit and optimisation plan for a website',
          'Google Ads and Meta Ads campaign structure',
          'Performance report with insights and next steps',
        ],
        fees: { basic: 24999, advanced: 39999, premium: 59999 },
      },
      {
        slug: 'seo-search-marketing',
        name: 'SEO & Search Marketing',
        icon: Search,
        short: 'Rank higher and grow organic traffic with technical SEO, keyword strategy, content optimisation and search analytics.',
        overview:
          'Search is where customers start. This course covers how search engines work, how to research what people search for, and how to optimise websites technically and editorially. You will audit real sites, build content and link strategies, and track results in Google Search Console and Analytics.',
        topics: [
          'How search engines work',
          'Keyword research and search intent',
          'On-page SEO',
          'Technical SEO',
          'Content strategy for search',
          'Link building and off-page SEO',
          'Local SEO',
          'Google Search Console and Google Analytics',
        ],
        skills: ['Keyword and competitor research', 'Site audits', 'Optimising content for intent', 'Technical SEO fixes', 'SEO reporting'],
        projects: ['Full SEO audit of a live website', 'Keyword strategy and content plan', 'Local SEO setup for a business', 'Monthly SEO performance report'],
        fees: { basic: 14999, advanced: 24999, premium: 39999 },
      },
      {
        slug: 'social-media-marketing',
        name: 'Social Media Marketing',
        icon: Share2,
        short: 'Plan, create and grow brand presence on Instagram, LinkedIn, YouTube and more — with content strategy, community and analytics.',
        overview:
          'Learn how brands build audiences and communities on social platforms. This course covers platform strategy, content planning, short-form video, creator collaborations and analytics, so you can run social media for a brand or as a freelancer.',
        topics: [
          'Social media strategy',
          'Platform playbooks — Instagram, LinkedIn, YouTube, X',
          'Content calendars and planning',
          'Short-form video and Reels',
          'Community management',
          'Influencer and creator marketing',
          'Social media analytics',
        ],
        skills: ['Audience research', 'Content planning', 'Copywriting for social', 'Community engagement', 'Social analytics and reporting'],
        projects: ['30-day content calendar for a brand', 'Short-form video content series', 'Influencer campaign plan', 'Social media growth report'],
        fees: { basic: 14999, advanced: 24999, premium: 39999 },
      },
      {
        slug: 'meta-google-ads',
        name: 'Meta & Google Ads',
        icon: MousePointerClick,
        short: 'Run profitable paid campaigns on Google and Meta — search, display, YouTube, Facebook and Instagram ads.',
        overview:
          'Paid advertising is a core skill for every performance marketer. This course teaches you to structure campaigns, target the right audiences, write ads that convert, track conversions and optimise budgets on Google Ads and Meta Ads Manager.',
        topics: [
          'Paid advertising fundamentals',
          'Google Search, Display and YouTube ads',
          'Meta Ads Manager — Facebook and Instagram',
          'Audience targeting and retargeting',
          'Ad copy and creative testing',
          'Conversion tracking and pixels',
          'Budgeting, bidding and optimisation',
        ],
        skills: ['Campaign structuring', 'Audience building', 'A/B testing ads', 'Conversion tracking', 'ROAS-focused optimisation'],
        projects: ['Google Search campaign build', 'Meta lead-generation campaign', 'Retargeting funnel', 'Paid media performance report'],
        fees: { basic: 19999, advanced: 29999, premium: 44999 },
      },
      {
        slug: 'ai-powered-digital-marketing',
        name: 'AI-Powered Digital Marketing',
        icon: Sparkles,
        short: 'Combine digital marketing with AI — research, content, creatives, ads, automation and analytics powered by AI tools.',
        overview:
          'AI is transforming how marketing teams work. This programme covers core digital marketing and shows how to use AI at every step — audience research, content and creative production, ad optimisation, personalisation, automation and analytics — while keeping strategy and judgement human.',
        topics: [
          'Digital marketing fundamentals',
          'AI for audience and market research',
          'AI content and copywriting',
          'AI-generated creatives',
          'AI in Google and Meta ad campaigns',
          'Marketing automation and personalisation',
          'AI-assisted analytics and reporting',
        ],
        skills: [
          'Prompting for marketing tasks',
          'AI-assisted content workflows',
          'Campaign automation',
          'Personalisation strategy',
          'Data-driven decision making',
        ],
        projects: [
          'AI-assisted campaign from research to launch',
          'Automated email and social workflow',
          'AI creative testing plan',
          'AI marketing playbook for a brand',
        ],
        fees: { basic: 24999, advanced: 44999, premium: 69999 },
      },
    ],
  },
  {
    slug: 'programming-development',
    title: 'Programming and Development',
    icon: Code2,
    accent: 'from-cyan-400 to-blue-600',
    tagline: 'Write code that ships.',
    description:
      'Programming and software development courses in Python, Java, web and full-stack development, Android, React, Angular, PHP, Shopify and software testing — built around real applications.',
    whoCanJoin: [
      'Engineering, computer science and IT students',
      'Graduates from any stream who want to code',
      'Career switchers moving into tech',
      'Beginners — Basic tracks start from the fundamentals',
    ],
    courses: [
      {
        slug: 'python-programming',
        name: 'Python Programming',
        icon: TerminalSquare,
        short: 'Learn Python from the ground up — syntax, data structures, OOP, files, APIs and automation — and build real programs.',
        overview:
          'Python is one of the most versatile and in-demand programming languages. This course takes you from fundamentals to writing clean, structured programs: data structures, object-oriented programming, working with files and APIs, and automating everyday tasks.',
        topics: [
          'Python fundamentals and syntax',
          'Data structures — lists, dictionaries, sets, tuples',
          'Functions and modules',
          'Object-oriented programming',
          'File handling and exceptions',
          'Working with APIs and libraries',
          'Automation and scripting',
        ],
        skills: ['Problem solving with code', 'Writing clean, reusable functions', 'OOP design', 'Working with external data', 'Debugging'],
        projects: ['Command-line utility', 'Task automation scripts', 'API-powered application', 'Mini project with OOP'],
        fees: { basic: 19999, advanced: 29999, premium: 44999 },
      },
      {
        slug: 'java-programming',
        name: 'Java Programming',
        icon: Coffee,
        short: 'Build strong programming foundations in Java — OOP, collections, exception handling, JDBC and application development.',
        overview:
          'Java powers enterprise systems, Android apps and backend services. This course builds solid programming foundations in Java, from core syntax and object-oriented design to collections, multithreading basics and connecting applications to databases.',
        topics: [
          'Core Java and syntax',
          'Object-oriented programming',
          'Collections framework',
          'Exception handling',
          'Multithreading basics',
          'JDBC and database connectivity',
          'Introduction to Spring Boot',
        ],
        skills: ['OOP principles', 'Data structures with collections', 'Writing robust code', 'Database connectivity', 'Interview-style problem solving'],
        projects: ['Console-based management system', 'Database-backed application', 'REST API introduction project'],
        fees: { basic: 19999, advanced: 29999, premium: 44999 },
      },
      {
        slug: 'web-development',
        name: 'Web Development',
        icon: Globe,
        short: 'Build responsive, modern websites with HTML, CSS, JavaScript and frontend frameworks — and deploy them online.',
        overview:
          'Learn to build websites the way professionals do. Starting with semantic HTML and modern CSS, you will move into JavaScript and a frontend framework, learn responsive design and accessibility, and deploy real websites to the web.',
        topics: [
          'HTML5 and semantic markup',
          'CSS3, Flexbox and Grid',
          'Responsive design',
          'JavaScript fundamentals and the DOM',
          'Introduction to React',
          'Git and GitHub',
          'Website deployment',
        ],
        skills: ['Responsive layouts', 'Interactive UI with JavaScript', 'Component-based thinking', 'Version control', 'Deploying websites'],
        projects: ['Personal portfolio website', 'Business landing page', 'Interactive JavaScript web app', 'Multi-page responsive website'],
        fees: { basic: 24999, advanced: 39999, premium: 59999 },
      },
      {
        slug: 'full-stack-development',
        name: 'Full-Stack Development',
        icon: Boxes,
        short: 'Go from your first line of code to complete web applications — React frontend, Node.js backend, databases and APIs.',
        overview:
          'A hands-on development track covering the modern JavaScript stack. You will build responsive interfaces with React, write server-side logic with Node.js, design databases and connect everything through APIs — finishing with real web applications you can deploy and show.',
        topics: [
          'HTML, CSS and JavaScript',
          'React.js',
          'Frontend development',
          'Backend development with Node.js and Express',
          'Database management — SQL and MongoDB',
          'API integration and authentication',
          'Deployment and real-world web applications',
        ],
        skills: [
          'Modern JavaScript and component thinking',
          'State management and routing in React',
          'REST APIs with Node.js',
          'Data modelling and database queries',
          'Git, deployment and debugging',
        ],
        projects: [
          'Interactive React application',
          'REST API with authentication and a database',
          'Full-stack web application deployed online',
          'Capstone product build (Premium)',
        ],
        fees: { basic: 34999, advanced: 54999, premium: 79999 },
      },
      {
        slug: 'android-app-development',
        name: 'Android App Development',
        icon: Smartphone,
        short: 'Build native Android apps with Kotlin and Android Studio — UI, data, APIs and publishing to the Play Store.',
        overview:
          'Learn to build Android applications from scratch. This course covers Kotlin, Android Studio, modern UI with Jetpack Compose, local storage, connecting to APIs and Firebase, and preparing an app for release on the Google Play Store.',
        topics: [
          'Kotlin fundamentals',
          'Android Studio and app architecture',
          'Building UI with Jetpack Compose',
          'Navigation and app state',
          'Local storage and databases',
          'REST APIs and Firebase',
          'Publishing to the Google Play Store',
        ],
        skills: ['Kotlin programming', 'Mobile UI design', 'App architecture', 'API integration', 'App release process'],
        projects: ['Utility app', 'API-connected news or weather app', 'Firebase-backed app with authentication', 'Play Store–ready app'],
        fees: { basic: 24999, advanced: 39999, premium: 59999 },
      },
      {
        slug: 'react-react-native',
        name: 'React / React Native',
        icon: Code2,
        short: 'Build modern web apps with React and cross-platform mobile apps with React Native from a single skill set.',
        overview:
          'React is the most widely used frontend library, and React Native brings the same skills to iOS and Android. This course covers components, hooks, state management and routing on the web, then builds cross-platform mobile apps with React Native.',
        topics: [
          'Modern JavaScript (ES6+)',
          'React components and hooks',
          'State management',
          'Routing and data fetching',
          'React Native fundamentals',
          'Mobile navigation and native features',
          'Building and deploying apps',
        ],
        skills: ['Component architecture', 'Hooks and state management', 'API integration', 'Cross-platform mobile development', 'Performance basics'],
        projects: ['React web dashboard', 'React Native mobile app', 'API-driven cross-platform app'],
        fees: { basic: 24999, advanced: 39999, premium: 59999 },
      },
      {
        slug: 'software-testing',
        name: 'Software Testing',
        icon: TestTube2,
        short: 'Learn manual and automation testing — test design, Selenium, API testing and test management — for QA careers.',
        overview:
          'Quality assurance is essential to every software team. This course covers testing fundamentals and the software development life cycle, writing effective test cases, finding and reporting bugs, and automating tests with Selenium and API testing tools.',
        topics: [
          'Software testing fundamentals and SDLC/STLC',
          'Manual testing and test case design',
          'Bug tracking and reporting',
          'Automation testing with Selenium',
          'API testing with Postman',
          'Agile testing practices',
          'Test management and reporting',
        ],
        skills: ['Test planning and design', 'Defect reporting', 'Automation scripting', 'API testing', 'Agile QA workflows'],
        projects: ['Test plan and test cases for a web app', 'Selenium automation suite', 'API test collection', 'QA report for a live project'],
        fees: { basic: 19999, advanced: 34999, premium: 49999 },
      },
      {
        slug: 'php-web-applications',
        name: 'PHP & Web Applications',
        icon: FileCode2,
        short: 'Build dynamic, database-driven web applications with PHP, MySQL and the Laravel framework.',
        overview:
          'PHP powers a large share of the web. This course teaches server-side programming with PHP, working with MySQL databases, building secure forms and authentication, and developing structured applications with the Laravel framework.',
        topics: [
          'PHP fundamentals',
          'Forms, sessions and authentication',
          'MySQL databases',
          'CRUD applications',
          'Object-oriented PHP',
          'Laravel framework',
          'Web application security basics',
        ],
        skills: ['Server-side programming', 'Database design and queries', 'MVC architecture', 'Secure coding basics', 'Deploying PHP apps'],
        projects: ['Dynamic website with an admin panel', 'Database-driven CRUD application', 'Laravel web application'],
        fees: { basic: 19999, advanced: 29999, premium: 44999 },
      },
      {
        slug: 'shopify-development',
        name: 'Shopify Development',
        icon: ShoppingBag,
        short: 'Build and customise Shopify stores — themes, Liquid, apps, payments and conversion-focused e-commerce.',
        overview:
          'E-commerce businesses need people who can build and improve online stores. This course covers setting up Shopify stores, customising themes with Liquid, configuring products, payments and apps, and optimising stores for conversions.',
        topics: [
          'Shopify store setup',
          'Products, collections and inventory',
          'Theme customisation',
          'Liquid templating',
          'Apps and integrations',
          'Payments, shipping and taxes setup',
          'Store optimisation and conversion',
        ],
        skills: ['Store configuration', 'Theme development', 'Liquid', 'E-commerce UX', 'Conversion optimisation'],
        projects: ['Complete Shopify store build', 'Custom theme section', 'Store conversion audit'],
        fees: { basic: 14999, advanced: 24999, premium: 39999 },
      },
      {
        slug: 'angular-development',
        name: 'Angular Development',
        icon: FileCode2,
        short: 'Build scalable single-page applications with Angular and TypeScript — components, services, routing and RxJS.',
        overview:
          'Angular is widely used for large-scale enterprise applications. This course covers TypeScript, Angular components and modules, services and dependency injection, routing, forms, RxJS and connecting to APIs.',
        topics: [
          'TypeScript fundamentals',
          'Angular components and modules',
          'Services and dependency injection',
          'Routing and navigation',
          'Reactive and template-driven forms',
          'RxJS and observables',
          'HTTP client and APIs',
        ],
        skills: ['TypeScript', 'Component architecture', 'Reactive programming', 'Form handling and validation', 'Enterprise app structure'],
        projects: ['Angular dashboard application', 'Form-heavy business app', 'API-integrated single-page application'],
        fees: { basic: 24999, advanced: 39999, premium: 54999 },
      },
    ],
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics and Business Tools',
    icon: BarChart3,
    accent: 'from-emerald-400 to-teal-600',
    tagline: 'Turn data into decisions.',
    description:
      'Data analytics and business tools courses in Advanced Excel, Power BI, Tableau, SQL, Python for data analytics and end-to-end data analytics — with real datasets and dashboards.',
    whoCanJoin: [
      'Commerce, management, engineering and science students',
      'Graduates aiming for analyst roles',
      'Working professionals who handle data and reports',
      'Anyone comfortable with numbers — no coding needed for Basic',
    ],
    courses: [
      {
        slug: 'advanced-excel',
        name: 'Advanced Excel',
        icon: FileSpreadsheet,
        short: 'Master Excel for business — formulas, lookups, pivot tables, charts, dashboards and automation.',
        overview:
          'Excel remains the most widely used business tool. This course moves you beyond the basics to advanced formulas, lookups, pivot tables, data cleaning, dashboards and automation — the skills employers expect in analyst and business roles.',
        topics: [
          'Advanced formulas and functions',
          'XLOOKUP, VLOOKUP and INDEX-MATCH',
          'Pivot tables and pivot charts',
          'Data cleaning and validation',
          'Conditional formatting',
          'Excel dashboards',
          'Introduction to macros and automation',
        ],
        skills: ['Data organisation', 'Formula-based analysis', 'Summarising data', 'Dashboard design', 'Automating repetitive work'],
        projects: ['Sales analysis workbook', 'Interactive Excel dashboard', 'Automated monthly report'],
        fees: { basic: 9999, advanced: 14999, premium: 24999 },
      },
      {
        slug: 'power-bi',
        name: 'Power BI',
        icon: LayoutDashboard,
        short: 'Build interactive business dashboards with Microsoft Power BI — data modelling, DAX and storytelling with data.',
        overview:
          'Power BI is the leading business intelligence tool in many organisations. This course covers connecting and transforming data with Power Query, building data models, writing DAX measures and designing interactive reports that tell a clear story.',
        topics: [
          'Power BI Desktop and Service',
          'Power Query and data transformation',
          'Data modelling and relationships',
          'DAX measures and calculations',
          'Visualisation best practices',
          'Interactive dashboards',
          'Publishing and sharing reports',
        ],
        skills: ['Data preparation', 'Data modelling', 'DAX', 'Dashboard design', 'Data storytelling'],
        projects: ['Sales performance dashboard', 'HR or finance analytics report', 'End-to-end BI project'],
        fees: { basic: 14999, advanced: 24999, premium: 39999 },
      },
      {
        slug: 'tableau',
        name: 'Tableau',
        icon: PieChart,
        short: 'Create compelling visual analytics and dashboards with Tableau — from data connection to storytelling.',
        overview:
          'Tableau is known for powerful, interactive visual analytics. This course teaches you to connect to data, build charts and calculated fields, design dashboards and stories, and publish insights stakeholders can explore.',
        topics: [
          'Tableau interface and data connections',
          'Charts and visual best practices',
          'Calculated fields and table calculations',
          'Filters, parameters and actions',
          'Dashboards and stories',
          'Maps and geographic analysis',
          'Publishing to Tableau Public',
        ],
        skills: ['Visual analytics', 'Calculated fields', 'Interactive dashboards', 'Data storytelling', 'Presenting insights'],
        projects: ['Business KPI dashboard', 'Public data story', 'Portfolio of Tableau visualisations'],
        fees: { basic: 14999, advanced: 24999, premium: 39999 },
      },
      {
        slug: 'data-analytics',
        name: 'Data Analytics',
        icon: LineChart,
        short: 'The complete data analyst programme — Excel, SQL, Python, statistics, Power BI/Tableau and business problem solving.',
        overview:
          'This programme prepares you for analyst roles end to end. You will learn to collect, clean and analyse data with Excel, SQL and Python, apply statistics, visualise findings in BI tools and present recommendations that drive business decisions.',
        topics: [
          'Data analytics lifecycle',
          'Excel for analysis',
          'SQL for data extraction',
          'Python with Pandas',
          'Statistics for analytics',
          'Data visualisation with Power BI and Tableau',
          'Business case studies and storytelling',
        ],
        skills: ['Data cleaning', 'Querying databases', 'Exploratory data analysis', 'Statistical thinking', 'Presenting insights'],
        projects: ['Exploratory analysis of a real dataset', 'SQL business case study', 'End-to-end analytics capstone with dashboard'],
        fees: { basic: 29999, advanced: 44999, premium: 69999 },
      },
      {
        slug: 'sql-database-management',
        name: 'SQL & Database Management',
        icon: Database,
        short: 'Learn SQL and relational databases — queries, joins, design, optimisation and administration basics.',
        overview:
          'Every application and analytics team relies on databases. This course teaches SQL from first queries to advanced joins and window functions, along with database design, normalisation, indexing and the basics of managing databases.',
        topics: [
          'Relational database concepts',
          'SQL queries and filtering',
          'Joins and subqueries',
          'Aggregations and window functions',
          'Database design and normalisation',
          'Indexes and query optimisation',
          'MySQL and PostgreSQL',
        ],
        skills: ['Writing efficient queries', 'Data modelling', 'Schema design', 'Query optimisation', 'Data integrity'],
        projects: ['Design a database for a business', 'SQL analysis case study', 'Reporting queries for dashboards'],
        fees: { basic: 12999, advanced: 19999, premium: 29999 },
      },
      {
        slug: 'python-for-data-analytics',
        name: 'Python for Data Analytics',
        icon: BarChart3,
        short: 'Analyse and visualise data with Python — NumPy, Pandas, Matplotlib, Seaborn and Jupyter notebooks.',
        overview:
          'Python is the analyst’s most powerful tool. This course covers Python for data work: cleaning and transforming data with Pandas, numerical computing with NumPy, visualisation with Matplotlib and Seaborn, and exploratory analysis in Jupyter notebooks.',
        topics: [
          'Python essentials for data',
          'NumPy',
          'Pandas for data cleaning and transformation',
          'Data visualisation with Matplotlib and Seaborn',
          'Exploratory data analysis',
          'Working with Jupyter notebooks',
          'Introduction to statistics and machine learning',
        ],
        skills: ['Data wrangling', 'Visual analysis', 'EDA', 'Reproducible notebooks', 'Communicating findings'],
        projects: ['Data cleaning pipeline', 'Exploratory analysis notebook', 'Analytics case study report'],
        fees: { basic: 24999, advanced: 39999, premium: 54999 },
      },
    ],
  },
  {
    slug: 'ai-emerging-technologies',
    title: 'AI and Emerging Technologies',
    icon: BrainCircuit,
    accent: 'from-violet-400 to-indigo-600',
    tagline: 'Learn smarter. Work faster. Think bigger.',
    description:
      'AI and emerging technology courses in AI tools and productivity, generative AI applications, prompt engineering, machine learning and cloud computing — practical, hands-on and career-focused.',
    whoCanJoin: [
      'Students from every discipline',
      'Working professionals who want to work smarter',
      'Developers, analysts, marketers and designers',
      'Anyone curious about AI — Basic tracks need no coding',
    ],
    courses: [
      {
        slug: 'ai-tools-productivity',
        name: 'AI Tools & Productivity',
        icon: Bot,
        short: 'Use leading AI tools to research, write, create, analyse and automate — and get more done in study and work.',
        overview:
          'AI tools are now part of everyday work. This course shows you how to choose and use AI assistants and tools for research, writing, presentations, data and design, and how to automate routine tasks — responsibly and effectively.',
        topics: [
          'Introduction to artificial intelligence',
          'AI assistants and chatbots',
          'AI for research and writing',
          'AI for presentations and design',
          'AI for spreadsheets and data',
          'No-code automation workflows',
          'Responsible and ethical AI use',
        ],
        skills: ['Choosing the right AI tool', 'Effective prompting', 'AI-assisted content creation', 'Workflow automation', 'Evaluating AI output'],
        projects: ['Personal AI productivity toolkit', 'Automated workflow for a real task', 'AI-assisted research report'],
        fees: { basic: 9999, advanced: 19999, premium: 29999 },
      },
      {
        slug: 'generative-ai-applications',
        name: 'Generative AI Applications',
        icon: Wand2,
        short: 'Build applications with generative AI — LLM APIs, retrieval-augmented generation, AI agents and no-code AI apps.',
        overview:
          'Go beyond using AI to building with it. This course explains how large language models and generative AI work, then teaches you to build applications using AI APIs, retrieval-augmented generation (RAG), agents and automation — plus how to evaluate and deploy them responsibly.',
        topics: [
          'How generative AI and LLMs work',
          'Working with AI APIs',
          'Prompt design for applications',
          'Retrieval-augmented generation (RAG)',
          'AI agents and tool use',
          'No-code and low-code AI app builders',
          'Evaluation, safety and deployment',
        ],
        skills: ['Integrating AI APIs', 'Designing AI workflows', 'Building RAG systems', 'Evaluating AI quality', 'Responsible AI design'],
        projects: ['AI chatbot over custom documents', 'AI-powered content tool', 'Agent that automates a multi-step task'],
        fees: { basic: 19999, advanced: 34999, premium: 54999 },
      },
      {
        slug: 'prompt-engineering',
        name: 'Prompt Engineering',
        icon: MessageSquareText,
        short: 'Write prompts that get reliable, high-quality results from AI — for text, code, images and business workflows.',
        overview:
          'The quality of AI output depends on the quality of the prompt. This course teaches structured prompting techniques, prompt templates and testing, and how to apply them to writing, coding, image generation and business use cases.',
        topics: [
          'How language models respond to prompts',
          'Prompt structures and patterns',
          'Few-shot and chain-of-thought prompting',
          'Prompting for code',
          'Prompting for images and video',
          'Prompt templates and libraries',
          'Testing and refining prompts',
        ],
        skills: [
          'Structured prompting',
          'Reducing errors and hallucinations',
          'Building prompt templates',
          'Domain-specific prompting',
          'Evaluating output quality',
        ],
        projects: ['Prompt library for a business function', 'Prompt evaluation exercise', 'AI-assisted content workflow'],
        fees: { basic: 9999, advanced: 14999, premium: 24999 },
      },
      {
        slug: 'machine-learning',
        name: 'Machine Learning',
        icon: Cpu,
        short: 'Learn machine learning with Python — regression, classification, clustering, model evaluation and deployment.',
        overview:
          'Machine learning powers recommendations, predictions and automation across industries. This course covers the mathematics and intuition behind ML, data preparation, supervised and unsupervised algorithms with scikit-learn, model evaluation and an introduction to deep learning.',
        topics: [
          'Python and maths for machine learning',
          'Data preprocessing and feature engineering',
          'Supervised learning — regression and classification',
          'Unsupervised learning — clustering',
          'Model evaluation and tuning',
          'Introduction to deep learning',
          'Deploying ML models',
        ],
        skills: ['Preparing data for ML', 'Training and comparing models', 'Model evaluation', 'Feature engineering', 'Communicating model results'],
        projects: ['Prediction model on a real dataset', 'Classification project', 'Deployed ML model capstone'],
        fees: { basic: 34999, advanced: 54999, premium: 79999 },
      },
      {
        slug: 'cloud-computing',
        name: 'Cloud Computing',
        icon: Cloud,
        short: 'Learn cloud fundamentals on AWS — compute, storage, networking, security and deploying applications to the cloud.',
        overview:
          'Most modern software runs in the cloud. This course covers cloud computing concepts and hands-on work with AWS — virtual servers, storage, networking, identity and security — plus deploying and monitoring applications, with an introduction to Azure and Google Cloud.',
        topics: [
          'Cloud computing concepts and service models',
          'AWS core services — EC2, S3, IAM',
          'Cloud networking — VPC basics',
          'Databases in the cloud',
          'Deploying applications',
          'Monitoring, scaling and cost management',
          'Introduction to Azure and Google Cloud',
        ],
        skills: ['Provisioning cloud resources', 'Cloud security basics', 'Deploying applications', 'Cost awareness', 'Cloud architecture thinking'],
        projects: ['Host a website on the cloud', 'Deploy a full application with a database', 'Cloud architecture design document'],
        fees: { basic: 24999, advanced: 39999, premium: 59999 },
      },
    ],
  },
  {
    slug: 'bundles',
    title: 'Premium Bundled Programmes',
    icon: Table2,
    accent: 'from-amber-300 to-orange-500',
    tagline: 'Two or more disciplines. One career-ready profile.',
    description:
      'Premium bundled programmes that combine complementary courses — design with UI/UX, marketing with SEO and ads, full-stack with UI/UX, analytics with BI tools and video with AI production.',
    isBundle: true,
    whoCanJoin: [
      'Students who want a broader, more employable skill set',
      'Graduates preparing for multi-skilled roles',
      'Freelancers who want to offer end-to-end services',
      'Career switchers looking for a complete pathway',
    ],
    courses: [
      {
        slug: 'graphic-design-ui-ux',
        name: 'Graphic Design + UI/UX',
        icon: PenTool,
        short: 'Combine visual design with product design — from brand creatives to user-centred digital products.',
        overview:
          'Designers who understand both visual communication and user experience are in high demand. This bundle combines the Graphic Design and UI/UX Design courses into one pathway, so you can design brand assets, marketing creatives and complete digital products.',
        topics: [],
        skills: ['Visual design and typography', 'Brand and marketing creatives', 'UX research and wireframing', 'Prototyping in Figma', 'Design systems'],
        projects: ['Brand creative campaign', 'End-to-end app design case study', 'Combined visual and product design portfolio'],
        includes: ['graphic-design', 'ui-ux-design'],
        fees: { advanced: 49999, premium: 74999 },
      },
      {
        slug: 'digital-marketing-seo-ads',
        name: 'Digital Marketing + SEO + Ads',
        icon: Megaphone,
        short: 'A complete performance marketing pathway — strategy, SEO and paid advertising on Google and Meta.',
        overview:
          'This bundle combines Digital Marketing, SEO & Search Marketing, and Meta & Google Ads into one pathway — covering organic and paid growth in depth, so you can plan, run and measure complete marketing campaigns.',
        topics: [],
        skills: ['Marketing strategy', 'Technical and content SEO', 'Paid campaign management', 'Conversion tracking', 'Performance reporting'],
        projects: ['Integrated organic and paid campaign plan', 'SEO audit and fixes', 'Live ad campaign build and report'],
        includes: ['digital-marketing', 'seo-search-marketing', 'meta-google-ads'],
        fees: { advanced: 49999, premium: 79999 },
      },
      {
        slug: 'full-stack-development-ui-ux',
        name: 'Full-Stack Development + UI/UX',
        icon: Boxes,
        short: 'Design and build complete digital products — user experience, interface design, frontend, backend and databases.',
        overview:
          'Developers who can design, and designers who can build, stand out. This bundle combines Full-Stack Development and UI/UX Design so you can take a product from user research and prototypes all the way to a deployed web application.',
        topics: [],
        skills: ['UX research and prototyping', 'React frontend development', 'Node.js backend and APIs', 'Databases', 'Shipping complete products'],
        projects: ['Designed and built web product', 'Design system implemented in code', 'Full-stack capstone with case study'],
        includes: ['full-stack-development', 'ui-ux-design'],
        fees: { advanced: 69999, premium: 99999 },
      },
      {
        slug: 'data-analytics-power-bi-excel',
        name: 'Data Analytics + Power BI + Excel',
        icon: LineChart,
        short: 'A complete analyst pathway — Excel, data analytics and Power BI dashboards for business decision-making.',
        overview:
          'This bundle combines Data Analytics, Power BI and Advanced Excel into one pathway for analyst roles — from spreadsheet analysis and SQL/Python to interactive BI dashboards and business storytelling.',
        topics: [],
        skills: ['Advanced Excel analysis', 'SQL and Python for data', 'Data modelling and DAX', 'Dashboard design', 'Business storytelling'],
        projects: ['Excel analysis and dashboard', 'Power BI business report', 'End-to-end analytics capstone'],
        includes: ['data-analytics', 'power-bi', 'advanced-excel'],
        fees: { advanced: 49999, premium: 74999 },
      },
      {
        slug: 'video-editing-ai-video-production',
        name: 'Video Editing + AI Video Production',
        icon: Film,
        short: 'Master professional editing and AI-powered video creation — the complete modern video creator skill set.',
        overview:
          'This bundle combines Video Editing and AI Video Production, giving you both the craft of professional editing and the speed of AI-powered production — ideal for content creators, agencies and brand video roles.',
        topics: [],
        skills: ['Professional editing and colour', 'Motion graphics', 'AI video generation', 'AI voice and dubbing', 'Hybrid production workflows'],
        projects: ['Brand video edited professionally', 'AI-assisted video series', 'Combined video showreel'],
        includes: ['video-editing', 'ai-video-production'],
        fees: { advanced: 44999, premium: 69999 },
      },
    ],
  },
];

/* ---------- Helpers ---------- */

export type CourseEntry = { course: Course; category: Category };

export function visibleCourses(category: Category) {
  return category.courses.filter((c) => c.available !== false);
}

export const visibleCategories = categories.filter((c) => visibleCourses(c).length > 0);
export const subjectCategories = visibleCategories.filter((c) => !c.isBundle);
export const bundleCategory = visibleCategories.find((c) => c.isBundle);

export const allCourses: CourseEntry[] = visibleCategories.flatMap((category) => visibleCourses(category).map((course) => ({ course, category })));

export function getCategory(slug: string | undefined) {
  return visibleCategories.find((c) => c.slug === slug);
}

export function getCourse(categorySlug: string | undefined, courseSlug: string | undefined): CourseEntry | undefined {
  return allCourses.find((e) => e.category.slug === categorySlug && e.course.slug === courseSlug);
}

/** Finds a course by its own slug alone (used to resolve old or short links). */
export function findCourse(courseSlug: string | null | undefined): CourseEntry | undefined {
  return allCourses.find((e) => !e.category.isBundle && e.course.slug === courseSlug) ?? allCourses.find((e) => e.course.slug === courseSlug);
}

export function coursePath({ course, category }: CourseEntry) {
  return `/courses/${category.slug}/${course.slug}`;
}

export function categoryPath(category: Category) {
  return `/courses/${category.slug}`;
}

/** Courses included in a bundle. */
export function bundleIncludes(course: Course): CourseEntry[] {
  return (course.includes ?? []).map((slug) => findCourse(slug)).filter((e): e is CourseEntry => !!e && !e.category.isBundle);
}

/** Topics for a course, or for a bundle the combined headline topics of its courses. */
export function courseTopics(course: Course) {
  if (course.topics.length) return course.topics;
  return bundleIncludes(course).flatMap((e) => e.course.topics.slice(0, 4));
}

/** Earlier course URLs and where they now live (handled in the app and as static redirects). */
export const legacyPaths: Record<string, string> = {
  '/courses/ui-ux-design': '/courses/design-creative/ui-ux-design',
  '/courses/full-stack-development': '/courses/programming-development/full-stack-development',
  '/courses/ai-powered-learning': '/courses/ai-emerging-technologies',
  '/courses/career-development': '/career-development',
};

export type Category = 'Graphic' | 'Product' | 'Software' | 'Illustration';

export interface MetaItem {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  categories: Category[];
  meta: MetaItem[];
}

export const projects: Project[] = [
  {
    slug: 'raia',
    title: 'RAIA: Rapid Adaptive Intelligent Agent',
    subtitle: 'Autonomous Charging EV Designed for Singapore in 2040',
    thumbnail: '/images/project1.png',
    categories: ['Product', 'Graphic', 'Software'],
    meta: [
      { label: 'Company', value: 'SUTD: 60.003 Product Design Studio in collaboration with SUTD FabLab and EV Club' },
      { label: 'Strategies', value: 'CAD, Design, Prototyping, Rendering' },
      { label: 'Timeline', value: 'Jan 2025 – Apr 2025' },
      { label: 'Tools Used', value: 'Fusion 360, Python, Canva, Vizcomm, KeyShot, PremierePro, Procreate' },
    ],
  },
  {
    slug: 'luva',
    title: 'LUVA: AI-Powered Louver Specification Tool',
    subtitle: 'Intelligent Platform to Streamline Louvers Supply in Construction',
    thumbnail: '/images/project13.png',
    categories: ['Graphic', 'Software'],
    meta: [
      { label: 'Company', value: 'Fameline APSG, 60.004 Service Design Studio' },
      { label: 'Strategies', value: 'User Research, UI/UX Development, Rendering, Video Editing' },
      { label: 'Timeline', value: 'May 2025 – August 2025' },
      { label: 'Tools Used', value: 'Figma, CSS, HTML, JavaScript, APIs, AfterEffects' },
    ],
  },
  {
    slug: 'midwhere',
    title: 'MidWhereAh',
    subtitle: 'AI-assisted mobile app to plan fair, accessible, and satisfying meetups',
    thumbnail: '/images/project14.png',
    categories: ['Graphic', 'Software'],
    meta: [
      { label: 'Company', value: '60.005 HCI and AI' },
      { label: 'Strategies', value: 'Design, UI/UX, Coding, User Research' },
      { label: 'Timeline', value: 'May 2025 – Present' },
      { label: 'Tools Used', value: 'Canva, Figma, Visual Studio Code, APIs' },
    ],
  },
  {
    slug: 'erasmuszorg',
    title: 'ErasmusZorg',
    subtitle: 'AI & Robotics for Nurses at ErasmusMC',
    thumbnail: '/images/project_2.png',
    categories: ['Software', 'Product', 'Graphic'],
    meta: [
      { label: 'Company', value: 'ErasmusMC' },
      { label: 'Strategies', value: 'CAD, Generative AI, UI/UX Design, User Research, Robotics, Prototyping' },
      { label: 'Timeline', value: 'Nov 2025 – Jan 2026' },
      { label: 'Tools Used', value: 'Fusion 360, AfterEffects, Canva, Vizcomm, 3D Printing' },
    ],
  },
  {
    slug: 'ai-data-analytics',
    title: 'AI Data Analytics',
    subtitle: 'UX Analysis for Gaming Chair Design',
    thumbnail: '/images/project3.png',
    categories: ['Software'],
    meta: [
      { label: 'Company', value: 'SUTD: 60.002 AI Applications in Design' },
      { label: 'Strategies', value: 'Natural Language Processing (NLP), Prompt Engineering, Web Scraping, RAG, Data Processing & Collection' },
      { label: 'Timeline', value: 'Mar 2025 – Apr 2025' },
      { label: 'Tools Used', value: 'Python, OpenAI GPT-3.5/4o, LangChain, ChromaDB, Tavily & Youtube Data API, BeautifulSoup, Pandas & Pydantic' },
    ],
  },
  {
    slug: 'clarion',
    title: 'Clarion',
    subtitle: 'Designing confidence for softer voices',
    thumbnail: '/images/project_4.png',
    categories: ['Product', 'Graphic'],
    meta: [
      { label: 'Course', value: 'TU Delft: Prototyping with Digital Fabrication' },
      { label: 'Strategies', value: 'Prototyping, 3D printing, CAD, Laser Cutting, Resin Printing' },
      { label: 'Timeline', value: 'Feb 2024 – Apr 2024' },
      { label: 'Tools Used', value: 'Rhino, Fusion360, Vizcomm, Canva, Formlabs, PrusaSlicer' },
    ],
  },
  {
    slug: 'fcsutd',
    title: 'FCSUTD Graphic Designs',
    subtitle: 'Branding and Visual Identity for Sports Club',
    thumbnail: '/images/project5.png',
    categories: ['Graphic'],
    meta: [
      { label: 'Client', value: 'SUTD Football Club (FCSUTD)' },
      { label: 'Strategies', value: 'Branding, Sports Identity, Apparel Design, Social Media, Photography' },
      { label: 'Timeline', value: 'Feb 2024 – Present' },
      { label: 'Tools Used', value: 'Canva, Adobe Photoshop, Afterlight' },
    ],
  },
  {
    slug: 'eastern-thunder',
    title: 'Eastern Thunder FC Instagram Posts',
    subtitle: 'Social Media Content and Brand Consistency',
    thumbnail: '/images/project6.png',
    categories: ['Graphic'],
    meta: [
      { label: 'Client', value: 'Eastern Thunder Football Club' },
      { label: 'Strategies', value: 'Social Media, Visual Design, Brand Cohesion' },
      { label: 'Timeline', value: 'Aug 2024 – Nov 2024' },
      { label: 'Tools Used', value: 'Canva, Photoshop, Afterlight' },
    ],
  },
  {
    slug: 'oriental-enlightenment',
    title: 'Oriental Enlightenment',
    subtitle: 'Design, IoT, and Context-Aware Smart Systems',
    thumbnail: '/images/project7.png',
    categories: ['Product', 'Graphic'],
    meta: [
      { label: 'Course', value: 'SUTD: 03.007 Design Thinking and Innovation' },
      { label: 'Strategies', value: 'IoT, Context Awareness, UX Design, Prototyping' },
      { label: 'Timeline', value: 'Jan 2023 – Apr 2023' },
      { label: 'Tools Used', value: 'Arduino, Fusion 360, SketchUp, TwinMotion, Canva' },
    ],
  },
  {
    slug: 'eyevpham',
    title: 'Personal Art Account: @eyevpham',
    subtitle: 'Digital Art, Illustration & Personal Expression',
    thumbnail: '/images/project8.png',
    categories: ['Illustration'],
    meta: [],
  },
  {
    slug: 'portraits',
    title: 'Portraits of Youth Activists',
    subtitle: 'Illustration Series & Social Commentary',
    thumbnail: '/images/project9.png',
    categories: ['Illustration'],
    meta: [
      { label: 'Course / Platform', value: 'Independent Art Series' },
      { label: 'Strategies', value: 'Portraiture, Primary Research, Political Commentary, Cultural Representation' },
      { label: 'Timeline', value: 'Aug 2020 – Jan 2021' },
      { label: 'Tools Used', value: 'Paper & Graphite Pencils' },
    ],
  },
  {
    slug: 'ai-bus-seat',
    title: 'Generative AI Bus Seat',
    subtitle: 'Optimizing Bus Seat Design for Comfort, Cost, and Sustainability',
    thumbnail: '/images/project_10.png',
    categories: ['Software', 'Product'],
    meta: [
      { label: 'Company', value: 'SUTD: 60.002 AI Applications in Design' },
      { label: 'Strategies', value: 'CAD, Generative AI, FEA Simulation, Design' },
      { label: 'Timeline', value: 'Jan 2025 – Feb 2025' },
      { label: 'Tools Used', value: 'Fusion 360, Python, Canva, Vizcomm' },
    ],
  },
  {
    slug: 'research-illustrations',
    title: 'Research Paper Illustrations',
    subtitle: 'Creative Communication of Scientific Research Papers',
    thumbnail: '/images/project11cover.png',
    categories: ['Illustration'],
    meta: [
      { label: 'Company', value: 'Singapore University of Technology and Design (SUTD)' },
      { label: 'Strategies', value: 'Research Illustration, Science Communication, Illustration' },
      { label: 'Timeline', value: 'May 2025 – Present' },
      { label: 'Tools Used', value: 'Procreate' },
    ],
  },
  {
    slug: 'ib-art',
    title: 'IB Art Exhibition: Interpreting Childhood',
    subtitle: 'An Artistic Exploration of Growing Up: Childhood Memories, Identity, and Vietnamese Heritage',
    thumbnail: '/images/ex2.png',
    categories: ['Illustration'],
    meta: [
      { label: 'Institution', value: 'International Baccalaureate Higher Level Visual Arts' },
      { label: 'Strategies', value: 'Narrative Curation, Conceptual Development, Cultural Storytelling' },
      { label: 'Timeline', value: 'Aug 2022 – Apr 2023' },
      { label: 'Tools', value: 'Fine Arts Media, Digital Media, Found Objects' },
    ],
  },
];

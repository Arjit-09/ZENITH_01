export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'aiml' | 'chatbot' | 'fullstack' | 'ecommerce' | 'blockchain' | 'iot';
  categoryLabel: string;
  image: string;
  tags: string[];
  linkUrl: string;
  linkText: string;
  isExternal: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'brain' | 'bot' | 'code' | 'cart' | 'cubes' | 'cpu';
}

export interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
}

export const STATS: StatItem[] = [
  { id: 'delivered', target: 50, suffix: '+', label: 'Projects Delivered' },
  { id: 'clients', target: 30, suffix: '+', label: 'Happy Clients' },
  { id: 'experience', target: 5, suffix: '+', label: 'Years Experience' },
  { id: 'engineers', target: 15, suffix: '+', label: 'Expert Engineers' }
];

export const SERVICES: Service[] = [
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    description: 'Custom AI solutions including computer vision, NLP, predictive analytics, and deep learning models that transform raw data into actionable insights.',
    iconName: 'brain'
  },
  {
    id: 'chatbot',
    title: 'Chatbot Integration',
    description: 'Intelligent conversational AI chatbots seamlessly integrated into your website for customer support, lead generation, and automated engagement.',
    iconName: 'bot'
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    description: 'Scalable, high-performance web applications built with modern frameworks — from responsive frontends to robust backend architectures and APIs.',
    iconName: 'code'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platforms',
    description: 'Feature-rich online stores with payment gateway integration, inventory management, and conversion-optimized designs that drive revenue growth.',
    iconName: 'cart'
  },
  {
    id: 'blockchain',
    title: 'Blockchain Solutions',
    description: 'Decentralized applications, smart contracts, NFT marketplaces, and supply chain solutions built on Ethereum, Polygon, and Solana ecosystems.',
    iconName: 'cubes'
  },
  {
    id: 'iot',
    title: 'IoT Projects',
    description: 'Connected device ecosystems with real-time monitoring dashboards, sensor integration, edge computing, and automated control systems.',
    iconName: 'cpu'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'mantronix',
    title: 'Mantronix Solutions',
    description: "Automation & robotics integrator website with product catalog, project gallery, and lead generation system for India's leading welding automation firm.",
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    image: '/images/project-mantronix.jpg',
    tags: ['Next.js', 'React', 'SEO'],
    linkUrl: 'https://www.mantronixsolutions.com/',
    linkText: 'View Live →',
    isExternal: true
  },
  {
    id: 'ddelice',
    title: 'DDelice Bakery',
    description: 'Premium eggless bakery website with 3D artisan product showcase, dark chocolate aesthetic, product catalog, and ordering system.',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    image: '/images/project-ddelice.jpg',
    tags: ['Next.js', 'CSS Modules', 'Animations'],
    linkUrl: 'https://ddelice-love-at-first-bite.vercel.app',
    linkText: 'View Live →',
    isExternal: true
  },
  {
    id: 'newlifemedz',
    title: 'NewLifeMedz',
    description: 'Licensed online pharmacy platform with product catalog, cart system, user authentication, and health blog — HIPAA compliant with SSL encryption.',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    image: '/images/project-newlifemedz.jpg',
    tags: ['Next.js', 'Payment Gateway', 'HIPAA'],
    linkUrl: 'https://www.newlifemedz.com/',
    linkText: 'View Live →',
    isExternal: true
  },
  {
    id: 'neuralvision',
    title: 'NeuralVision AI',
    description: 'AI-powered image recognition platform for industrial quality control with real-time defect detection, CNN-based models, and production analytics.',
    category: 'aiml',
    categoryLabel: 'AI / ML',
    image: '/images/project-neuralvision.jpg',
    tags: ['TensorFlow', 'Computer Vision', 'Python'],
    linkUrl: '#contact',
    linkText: 'Case Study →',
    isExternal: false
  },
  {
    id: 'smartassist',
    title: 'SmartAssist Bot',
    description: 'AI chatbot integrated with e-commerce platforms for customer support, order tracking, product recommendations, and automated engagement flows.',
    category: 'chatbot',
    categoryLabel: 'Chatbot',
    image: '/images/project-smartassist.jpg',
    tags: ['Dialogflow', 'Node.js', 'NLP'],
    linkUrl: '#contact',
    linkText: 'Case Study →',
    isExternal: false
  },
  {
    id: 'chainvault',
    title: 'ChainVault',
    description: 'Decentralized supply chain management platform with smart contracts, real-time asset tracking on world map, and immutable transaction ledger.',
    category: 'blockchain',
    categoryLabel: 'Blockchain',
    image: '/images/project-chainvault.jpg',
    tags: ['Solidity', 'Ethereum', 'Web3.js'],
    linkUrl: '#contact',
    linkText: 'Case Study →',
    isExternal: false
  },
  {
    id: 'agrisense',
    title: 'AgriSense IoT',
    description: 'Smart agriculture monitoring system with real-time sensor dashboards, weather integration, automated irrigation controls, and crop health analytics.',
    category: 'iot',
    categoryLabel: 'IoT',
    image: '/images/project-agrisense.jpg',
    tags: ['Raspberry Pi', 'MQTT', 'React'],
    linkUrl: '#contact',
    linkText: 'Case Study →',
    isExternal: false
  },
  {
    id: 'medibot',
    title: 'MediBot Health',
    description: 'Healthcare chatbot with intelligent symptom checker, appointment scheduling, telemedicine integration, and medical knowledge base powered by LLMs.',
    category: 'chatbot',
    categoryLabel: 'Chatbot',
    image: '/images/project-medibot.jpg',
    tags: ['OpenAI', 'FastAPI', 'React'],
    linkUrl: '#contact',
    linkText: 'Case Study →',
    isExternal: false
  },
  {
    id: 'tokenforge',
    title: 'TokenForge',
    description: 'NFT marketplace with minting, trading, and royalty management on Ethereum/Polygon. Features gasless minting, auction system, and creator profiles.',
    category: 'blockchain',
    categoryLabel: 'Blockchain',
    image: '/images/project-tokenforge.jpg',
    tags: ['Solidity', 'Polygon', 'IPFS'],
    linkUrl: '#contact',
    linkText: 'Case Study →',
    isExternal: false
  },
  {
    id: 'predictflow',
    title: 'PredictFlow',
    description: 'Predictive analytics dashboard for retail businesses with demand forecasting, inventory optimization, and automated reporting using time-series ML models.',
    category: 'aiml',
    categoryLabel: 'AI / ML',
    image: '/images/project-predictflow.jpg',
    tags: ['Python', 'Prophet', 'Dashboard'],
    linkUrl: '#contact',
    linkText: 'Case Study →',
    isExternal: false
  }
];

export const COMPANY_INFO = {
  name: 'Zenith',
  tagline: 'Engineering Intelligent Digital Solutions',
  phone: '+91 8920856958',
  phoneRaw: '+918920856958',
  email: 'sharmaarjit813@gmail.com',
  hours: 'Mon – Sat: 10:00 AM – 7:00 PM IST',
  whatsappUrl: 'https://wa.me/918920856958',
  formspreeEndpoint: 'https://formspree.io/f/xpwzgqbl'
};

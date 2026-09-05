// ─────────────────────────────────────────────────────────────────────────────
// DELYN — Central Brand Configuration
// Edit this file to update brand content, contact details, and social links
// without touching individual components.
// ─────────────────────────────────────────────────────────────────────────────

export const brand = {
  name: 'DELYN',
  tagline: 'Dream. Dare. Discover.',
  subTagline: 'Discover yourself with Delyn.',
  description:
    "A modern beauty and personal care destination born in the UAE, bringing the world's most inspiring beauty discoveries together.",

  location: {
    city: 'Sharjah',
    country: 'UAE',
    address: '[Store Address — Sharjah, UAE]',
    mapsLink: '#',
  },

  contact: {
    email: 'brands.delyn@gmail.com',
    phone: '+971502108803',
    whatsapp: '',
  },

  social: {
    instagram: '[https://instagram.com/delyn]',
    tiktok: '[https://tiktok.com/@delyn]',
    whatsapp: '[https://wa.me/971XXXXXXXX]',
  },

  seo: {
    title: 'Delyn — Discover Yourself',
    description:
      'Delyn is a modern beauty and personal care destination in the UAE, bringing together inspiring beauty discoveries across makeup, skincare, haircare, body care and personal care.',
  },
} as const;

export const brandStory = {
  intro:
    'At Delyn, we believe beauty is a journey of discovering who you are, how you want to express yourself, and what makes you feel truly confident.',
  body: [
    'Born in the UAE, Delyn is a modern beauty and personal care destination bringing together carefully curated brands across makeup, skincare, haircare, body care, and personal care.',
    'But we\'re not just here to sell beauty products.',
    'We\'re here to create a space where you can dream beyond expectations, dare to step outside your comfort zone, and discover yourself along the way.',
    'Whether it\'s trying a new makeup look, finding a skincare routine that works for you, exploring haircare, or simply learning something new about your beauty and personal style—we believe every discovery is a step towards greater confidence and self-expression.',
    'Our vision is to build more than a retail brand. Delyn is a beauty community and destination for discovery, bringing together inspiring brands while encouraging everyone to explore their individuality.',
  ],
  closing: [
    'Because beauty isn\'t about becoming someone else.',
    'It\'s about discovering more of yourself.',
  ],
};

export const visionMission = {
  vision:
    'To transform the global beauty industry by bringing world-class retail, beauty education, and premium lifestyle experiences together in one trusted brand.',
  mission:
    'To make beauty accessible to everyone through quality products, education, and exceptional experiences.',
};

export const categories = [
  {
    id: 'makeup',
    name: 'MAKEUP',
    tagline: 'Express yourself.',
    description: 'Find the looks that speak your language — from everyday essentials to statement-making artistry.',
    accent: '#C8A882',
  },
  {
    id: 'skincare',
    name: 'SKINCARE',
    tagline: 'Discover what works for you.',
    description: 'Science-backed, carefully chosen formulas for every skin type and every concern.',
    accent: '#B8C4B0',
  },
  {
    id: 'haircare',
    name: 'HAIRCARE',
    tagline: 'Find your ritual.',
    description: 'From scalp to tip — routines worth remembering, rituals worth keeping.',
    accent: '#C4A882',
  },
  {
    id: 'bodycare',
    name: 'BODY CARE',
    tagline: 'Care beyond the surface.',
    description: 'Luxurious textures and thoughtful formulas that turn daily care into something extraordinary.',
    accent: '#D4B896',
  },
  {
    id: 'personalcare',
    name: 'PERSONAL CARE',
    tagline: 'Everyday confidence.',
    description: 'The foundations of your daily ritual — elevated.',
    accent: '#A89880',
  },
  {
    id: 'viral',
    name: 'VIRAL BEAUTY',
    tagline: 'Discover what\'s next.',
    description: 'The products everyone is talking about — curated and brought to you before the trend moves on.',
    accent: '#C8B4A0',
  },
];

export const ecosystemPillars = [
  {
    id: 'retail',
    label: 'RETAIL',
    headline: 'Curated beauty discoveries.',
    description: 'A carefully assembled world of beauty products, brands, and discoveries from around the globe.',
    status: 'Now Open',
  },
  {
    id: 'academy',
    label: 'ACADEMY',
    headline: 'Learn. Experiment. Master your craft.',
    description: 'Specialized beauty education — workshops, masterclasses and expert-led experiences.',
    status: 'Coming Soon',
  },
  {
    id: 'lifestyle',
    label: 'LIFESTYLE',
    headline: 'A world beyond beauty products.',
    description: 'Beauty as a way of living — events, community, editorial content and curated experiences.',
    status: 'Coming Soon',
  },
];

export const discoveryProducts = [
  {
    id: 1,
    name: 'Discovery Product 01',
    category: 'Skincare',
    origin: 'Japan',
    trending: true,
    tag: 'New Arrival',
  },
  {
    id: 2,
    name: 'Discovery Product 02',
    category: 'Makeup',
    origin: 'USA',
    trending: true,
    tag: 'Trending',
  },
  {
    id: 3,
    name: 'Discovery Product 03',
    category: 'Haircare',
    origin: 'India',
    trending: false,
    tag: 'Cult Favourite',
  },
  {
    id: 4,
    name: 'Discovery Product 04',
    category: 'Body Care',
    origin: 'UAE',
    trending: true,
    tag: 'Trending',
  },
  {
    id: 5,
    name: 'Discovery Product 05',
    category: 'Skincare',
    origin: 'Korea',
    trending: true,
    tag: 'Viral',
  },
  {
    id: 6,
    name: 'Discovery Product 06',
    category: 'Makeup',
    origin: 'International',
    trending: false,
    tag: 'Editor\'s Pick',
  },
];

export const globalMarkets = ['UAE', 'Japan', 'India', 'USA', 'Korea', 'International'];

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Vision', href: '#vision' },
  { label: 'Contact', href: '#contact' },
];

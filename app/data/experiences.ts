export interface Experience {
  id: string;
  category: 'Discovery' | 'Signature' | 'Body Ritual';
  title: string;
  subtitle: string;
  duration: string;
  maxGuests: number;
  pricePerGuest: number;
  minBookingValue: number;
  description: string;
  bullets: string[];
  image: string;
}

export const experiencesB2C: Experience[] = [
  {
    id: 'seasonal-tea-ritual',
    category: 'Discovery',
    title: 'Seasonal Tea Ritual',
    subtitle: 'A Private Cultural Introduction',
    duration: '1h',
    maxGuests: 8,
    pricePerGuest: 700,
    minBookingValue: 3500,
    description: 'Tea in its seasonal expression, experienced in the present moment. Each session follows the rhythm of the season. The tea selection is intentionally curated and prepared for you. Through successive infusions, we explore character, texture, and subtle variation as they unfold in the cup. No fixed menu — only what the season offers now.',
    bullets: [
      '2 premium seasonal Chinese teas',
      'Each brewed in a specific ritual',
      'Floor seating',
      'Available in English, Chinese, and French (ENG/CN/FR)'
    ],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'story-of-chinese-tea',
    category: 'Discovery',
    title: 'The Story of Chinese Tea',
    subtitle: 'A Private Cultural Journey',
    duration: '1h30',
    maxGuests: 7,
    pricePerGuest: 780,
    minBookingValue: 4000,
    description: 'Four eras of Chinese tea, approached through taste, aroma, and narrative. A gradual passage into tea culture, where history is experienced through infusion and story. Learn about the evolution of tea from medicinal herb to royal tribute and social ritual.',
    bullets: [
      '4 premium Chinese teas',
      'Each brewed in a specific ritual',
      'Floor seating',
      'Available in English, Chinese, and French (ENG/CN/FR)'
    ],
    image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'tea-live-pipa',
    category: 'Signature',
    title: 'Tea & Live Pipa',
    subtitle: 'An Intimate Cultural Performance',
    duration: '1h30',
    maxGuests: 7,
    pricePerGuest: 900,
    minBookingValue: 4500,
    description: 'A suspended moment where tea and live pipa music intertwine. Journey through the great eras of Chinese tea as sound, story, and flavor unfold together in a refined and immersive setting. Feel the acoustic vibrations of the traditional string instrument alongside the olfactory development of the infusions.',
    bullets: [
      '4 premium Chinese teas',
      'Live Pipa performance by a professional musician',
      'Floor seating',
      'Available in English, Chinese, and French (ENG/CN/FR)'
    ],
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'seasonal-tasting',
    category: 'Signature',
    title: 'Seasonal Tasting',
    subtitle: 'A Deeper Exploration of Chinese Seasonality',
    duration: '2h',
    maxGuests: 8,
    pricePerGuest: 780,
    minBookingValue: 4500,
    description: 'An extended sensory exploration of seasonal Chinese teas, where each infusion reflects the season we are in. The tea selection is intentionally curated and prepared for you, offering a structured journey through seasonal expression and variation.',
    bullets: [
      '4 premium seasonal Chinese teas',
      'Deeper analysis of terroirs and oxidation methods',
      'Floor seating',
      'Available in English, Chinese, and French (ENG/CN/FR)'
    ],
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'tea-cheese-pairing',
    category: 'Signature',
    title: 'Tea & Cheese Pairing',
    subtitle: 'A Cross-Cultural Tasting',
    duration: '1h30',
    maxGuests: 7,
    pricePerGuest: 700,
    minBookingValue: 3500,
    description: 'Chinese tea and French cheese in direct dialogue. Textures, contrasts, and aromas meet without interpretation - revealing unexpected resonances between two ancient traditions. A bridge built by our Franco-Chinese origin.',
    bullets: [
      '3 tea and artisan French cheese pairings',
      'Guided dialogue on flavor profiles and textures',
      'Floor seating',
      'Available in English, Chinese, and French (ENG/CN/FR)'
    ],
    image: 'https://images.unsplash.com/photo-1486299267070-8382e214434b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'entering-the-breath',
    category: 'Body Ritual',
    title: 'Entering the Breath',
    subtitle: 'Taichi & Tea Meditation',
    duration: '2h',
    maxGuests: 12,
    pricePerGuest: 900,
    minBookingValue: 5000,
    description: 'Fully immersive, embodied experience where movement, breath, and tea merge into a single continuous practice. A practice of relaxation through body, breath, and attention, where Taichi and guided tea meditation flow as a sequence exploring the concept of Fangsong (release, letting go).',
    bullets: [
      '2 premium seasonal Chinese teas',
      'Guided Taichi movement and breathing class',
      'Floor seating',
      'Available in English, Chinese, and French (ENG/CN/FR)'
    ],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop'
  }
];

export interface B2BExperience {
  id: string;
  title: string;
  subtitle: string;
  focus: string;
  description: string;
  highlights: string[];
  image: string;
}

export const experiencesB2B: B2BExperience[] = [
  {
    id: 'corporate-team-alignment',
    title: 'Corporate Tea Rituals',
    subtitle: 'Cultural Team Integration',
    focus: 'Team Bonding & Presence',
    description: 'Transform your corporate events into genuine cultural journeys. Designed to slow down the pace of corporate life, our sessions build mindfulness and deep listening. Ideal for international executive teams, board meetings, or client hosting.',
    highlights: [
      'Hosted at our signature Shanghai location or off-site corporate venues',
      'Curated pairings tailored to company goals',
      'Bilingual execution (English/Chinese/French)',
      'Custom corporate gifting options with heritage tea sets'
    ],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'heritage-keynotes',
    title: 'Chinese Tea Heritage & Philosophy',
    subtitle: 'Executive Masterclasses',
    focus: 'Cross-Cultural Leadership',
    description: 'Ophélie Hu shares insights into the philosophy of patience, dedication, and precision embedded in Chinese tea craft. Connect ancient principles of tea cultivation and mastery with modern project management, supply chain resilience, and thoughtful business expansion.',
    highlights: [
      'Keynote speech combined with high-end tea tasting',
      'Exploration of traditional Chinese concepts (Gongfu, Fangsong, and seasonal rhythms)',
      'Highly engaging, storytelling-driven structure',
      'Ideal for international organizations operating in cross-cultural markets'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop'
  }
];

export const bookingPolicy = {
  confirmation: [
    'Confirmed date and time',
    'Number of guests',
    'Selected experience type',
    'Bookings are considered confirmed only upon full payment.'
  ],
  modification: [
    'You may reschedule your session to a new date within 30 days after the original session date.',
    'Requests must be made at least 14 working days before the original session date.',
    'Rescheduling is subject to availability. No fee applies, but only one modification is allowed.',
    'If you cancel after rescheduling, the original cancellation policy applies based on the new session date.'
  ],
  cancellation: [
    { range: 'More than 10 days before', refund: '60% refund' },
    { range: 'Between 5 and 10 days before (5 days included)', refund: '50% refund' },
    { range: 'Between 2 and 5 days before (2 days included)', refund: '30% refund' },
    { range: 'Less than 2 days but at least 24 hours before', refund: '10% refund' },
    { range: 'Less than 24 hours before the start', refund: '0% refund' }
  ],
  forceMajeure: 'Force majeure means any event beyond reasonable human control that is unavoidable and makes performance impossible, including but not limited to natural disasters, government-ordered lockdowns, epidemics, or pandemics. If a force majeure event occurs, you may choose either: Reschedule to a new date (subject to availability), or a full refund of all amounts paid.'
};

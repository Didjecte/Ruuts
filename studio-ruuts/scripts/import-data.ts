import * as cliPkg from 'sanity/cli'

const getCliClient = (cliPkg as any).getCliClient || (cliPkg as any).default?.getCliClient
const client = getCliClient({ apiVersion: '2026-07-10' })

// 1. Experiences (Private Experiences - B2C)
const experiencesB2C = [
  {
    id: 'seasonal-tea-ritual',
    order: 1,
    title: 'Seasonal Tea Ritual',
    subtitle: 'A Private Cultural Introduction',
    duration: '1h',
    maxGuests: 8,
    description: 'Tea in its seasonal expression, experienced in the present moment. Each session follows the rhythm of the season. The tea selection is intentionally curated and prepared for you. Through successive infusions, we explore character, texture, and subtle variation as they unfold in the cup. No fixed menu — only what the season offers now.',
    bullets: [
      '2 premium seasonal Chinese teas',
      'Each brewed in a specific ritual',
      'Floor seating',
      'Available in English, Chinese, and French (ENG/CN/FR)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'story-of-chinese-tea',
    order: 2,
    title: 'The Story of Chinese Tea',
    subtitle: 'A Private Cultural Journey',
    duration: '1h30',
    maxGuests: 7,
    description: 'Four eras of Chinese tea, approached through taste, aroma, and narrative. A gradual passage into tea culture, where history is experienced through infusion and story. Learn about the evolution of tea from medicinal herb to royal tribute and social ritual.',
    bullets: [
      '4 premium Chinese teas',
      'Each brewed in a specific ritual',
      'Floor seating',
      'Available in English, Chinese, and French (ENG/CN/FR)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'tea-live-pipa',
    order: 3,
    title: 'Tea & Live Pipa',
    subtitle: 'An Intimate Cultural Performance',
    duration: '1h30',
    maxGuests: 7,
    description: 'A suspended moment where tea and live pipa music intertwine. Journey through the great eras of Chinese tea as sound, story, and flavor unfold together in a refined and immersive setting. Feel the acoustic vibrations of the traditional string instrument alongside the olfactory development of the infusions.',
    bullets: [
      '4 premium Chinese teas',
      'Live Pipa performance by a professional musician',
      'Floor seating',
      'Available in English, Chinese, and French (ENG/CN/FR)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'seasonal-tasting',
    order: 4,
    title: 'Seasonal Tasting',
    subtitle: 'A Deeper Exploration of Chinese Seasonality',
    duration: '2h',
    maxGuests: 8,
    description: 'An extended sensory exploration of seasonal Chinese teas, where each infusion reflects the season we are in. The tea selection is intentionally curated and prepared for you, offering a structured journey through seasonal expression and variation.',
    bullets: [
      '4 premium seasonal Chinese teas',
      'Deeper analysis of terroirs and oxidation methods',
      'Floor seating',
      'Available in English, Chinese, and French (ENG/CN/FR)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'tea-cheese-pairing',
    order: 5,
    title: 'Tea & Cheese Pairing',
    subtitle: 'A Cross-Cultural Tasting',
    duration: '1h30',
    maxGuests: 7,
    description: 'Chinese tea and French cheese in direct dialogue. Textures, contrasts, and aromas meet without interpretation - revealing unexpected resonances between two ancient traditions. A bridge built by our Franco-Chinese origin.',
    bullets: [
      '3 tea and artisan French cheese pairings',
      'Guided dialogue on flavor profiles and textures',
      'Floor seating',
      'Available in English, Chinese, and French (ENG/CN/FR)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1486299267070-8382e214434b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'entering-the-breath',
    order: 6,
    title: 'Entering the Breath',
    subtitle: 'Taichi & Tea Meditation',
    duration: '2h',
    maxGuests: 12,
    description: 'Fully immersive, embodied experience where movement, breath, and tea merge into a single continuous practice. A practice of relaxation through body, breath, and attention, where Taichi and guided tea meditation flow as a sequence exploring the concept of Fangsong (release, letting go).',
    bullets: [
      '2 premium seasonal Chinese teas',
      'Guided Taichi movement and breathing class',
      'Floor seating',
      'Available in English, Chinese, and French (ENG/CN/FR)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop'
  }
]

// 2. Experiences (Tea Anywhere - B2B)
const experiencesB2B = [
  {
    id: 'corporate-team-alignment',
    order: 1,
    title: 'Blind Tea Tasting Experiences',
    subtitle: 'Interactive Tea Experiences',
    description: 'Interactive tea experiences designed to spark curiosity, conversation and connection.\n\nOpen Format · Tea Bar Experience\nGuests join freely throughout the event and take part in short blind tasting rounds, sensory challenges and tea discovery moments.\n\nPrivate Format · Hosted Group Experience\nA guided experience for private groups where guests explore tea through storytelling, tasting and interactive activities together',
    highlights: [],
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'heritage-keynotes',
    order: 2,
    title: 'Cultural Tea Experiences',
    subtitle: 'Immersive Journeys',
    description: 'Immersive tea journeys combining Chinese tea culture with traditional arts and mindful practices.\n\nFormats include curated tea rituals paired with live pipa performances, Taichi sessions, storytelling and sensory exploration — designed for hospitality, brand activations and private events.',
    highlights: [],
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop'
  }
]

// 3. Testimonials
const testimonials = [
  {
    id: '1',
    slug: 'the-art-of-slowing-down-tea-philosophy',
    title: 'The Art of Slowing Down: Ancient Tea Philosophy',
    type: 'article',
    publishedAt: '2026-05-15',
    mediaUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
    description: 'Explore the concept of Fangsong (release and letting go) through traditional Chinese tea rituals and mindful brewing methods.',
    body: `<p>In our modern, fast-paced world, speed is often celebrated. Yet, the ancient Chinese tea masters believed that true depth and connection can only be found when we slow down. This philosophy of deliberate presence is embedded in every step of the Gongfu tea ceremony.</p><h3>The Concept of Fangsong</h3><p>Fangsong (放松) translates loosely to "release" or "letting go." In a tea meditation, this represents relaxing the body and centering the mind. As you heat the water, warm the clay teapot, and watch the tea leaves slowly unfurl, the external noise begins to fade. Each action is performed with intention and quiet grace, transforming a simple beverage preparation into a ritual of presence.</p><blockquote>"Taking one’s time is the best way for not wasting it." — Nicolas Bouvier</blockquote><h3>Rhythms of the Clay and Water</h3><p>Traditional Yixing purple clay teapots are prized for their ability to absorb the essential oils of the tea over decades of use. They are porous, breathing vessels. Brewing tea in Yixing clay is a dialogue between the minerals of the earth, the temperature of the water, and the patience of the host. By aligning with these natural materials, we learn to align with our own internal rhythms.</p><h3>How to Practice at Home</h3><p>To integrate a minor tea ritual into your daily routine:</p><ul><li>Choose a quiet corner of your room, free from digital screens.</li><li>Focus entirely on the sensory qualities of the water heating: the sound of the bubbles (referred to as "shrimp eyes" or "dragon whispers" as the temperature changes).</li><li>Observe the aroma of the dry leaves in a pre-warmed cup before adding water.</li><li>Sip slowly, feeling the texture and temperature move down your throat.</li></ul><p>By dedicating even fifteen minutes to this practice, we ground ourselves and reconnect with our own origin.</p>`
  },
  {
    id: '2',
    slug: 'harvesting-pre-rain-longjing-zhejiang',
    title: 'Harvesting Pre-Rain Longjing in Zhejiang',
    type: 'photo',
    publishedAt: '2026-04-22',
    mediaUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800&auto=format&fit=crop',
    description: 'A visual journal capturing the early spring harvest of Longjing (Dragon Well) tea leaves in Hangzhou, prior to the Qingming festival.',
    galleryUrls: [
      'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: '3',
    slug: 'soundscapes-of-pipa-and-guzheng-sessions',
    title: 'Soundscapes of Pipa & Guzheng: A Live Session',
    type: 'video',
    publishedAt: '2026-04-05',
    mediaUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
    description: 'Listen to the delicate harmonics of the Pipa string instrument recorded live during our Signature Tea session in Cité Bourgogne.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    duration: '0:15'
  },
  {
    id: '4',
    slug: 'cross-cultural-pairings-oolong-and-comte',
    title: 'Cross-Cultural Dialogues: Aged Oolong & French Comté',
    type: 'article',
    publishedAt: '2026-03-18',
    mediaUrl: 'https://images.unsplash.com/photo-1486299267070-8382e214434b?q=80&w=800&auto=format&fit=crop',
    description: 'How contrasting culinary traditions find unexpected harmony. An exploration of structural similarities between roasted oolongs and aged Alpine cheeses.',
    body: `<p>Pairing tea with food is an ancient art, but pairing Chinese tea with French artisan cheeses opens up a new realm of sensory dialogue. Our signature "Tea & Cheese Pairing" experience was born from this cross-cultural curiosity.</p><h3>The Chemistry of Contrast</h3><p>When high-tannin roasted oolongs (like Da Hong Pao from the Wuyi mountains) meet the rich, nutty fats of an 18-month aged Comté cheese, something extraordinary happens. The heat of the tea melts the crystalline fats of the cheese, releasing sweet notes of dried apricot and hazelnut. Meanwhile, the astringency of the tea cleanses the palate, leaving a clean, lingering finish.</p><h3>Three Rules of Tea & Cheese Pairing</h3><p>When curating your own tasting, keep these principles in mind:</p><ol><li><strong>Match Intensity:</strong> Light white teas go well with delicate goat cheeses. Heavy, roasted teas require aged, firm cheeses.</li><li><strong>Control Temperature:</strong> The tea must be served hot (between 85°C and 95°C) to interact chemically with the milk lipids.</li><li><strong>Avoid Sweeteners:</strong> Keep both elements pure and unadulterated to appreciate the natural earthiness of both cultures.</li></ol><p>Through pairings like these, we discover that different cultures are not barriers, but invitations to dialogue and new discoveries.</p>`
  },
  {
    id: '5',
    slug: 'morning-gong-guzheng-instrument-details',
    title: 'The Resonance of Wood: Guzheng Details',
    type: 'photo',
    publishedAt: '2026-03-01',
    mediaUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    description: 'A study of the carved paulownia wood and movable bridges of the Guzheng zither, photographed in morning sunlight.',
    galleryUrls: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: '6',
    slug: 'guzheng-and-tea-pouring-cinematic-flow',
    title: 'The Flow of Tea: Immersive Pouring Rituals',
    type: 'video',
    publishedAt: '2026-02-14',
    mediaUrl: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=800&auto=format&fit=crop',
    description: 'Watch a short cinematic flow displaying the movements of the Gongfu tea ceremony, accompanied by meditation bowls.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    duration: '0:15'
  }
]

function randomKey(): string {
  return Math.random().toString(36).substring(2, 12)
}

function htmlToBlocks(html?: string): any[] {
  if (!html) return []
  const blocks: any[] = []
  const regex = /<(p|h3|blockquote|li)[^>]*>([\s\S]*?)<\/\1>/g
  let match
  while ((match = regex.exec(html)) !== null) {
    const tag = match[1]
    const content = match[2].replace(/<[^>]+>/g, '').trim()
    if (!content) continue

    const blockKey = randomKey()
    const childKey = randomKey()

    if (tag === 'li') {
      blocks.push({
        _key: blockKey,
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _key: childKey, _type: 'span', text: content }]
      })
    } else if (tag === 'h3') {
      blocks.push({
        _key: blockKey,
        _type: 'block',
        style: 'h3',
        children: [{ _key: childKey, _type: 'span', text: content }]
      })
    } else if (tag === 'blockquote') {
      blocks.push({
        _key: blockKey,
        _type: 'block',
        style: 'blockquote',
        children: [{ _key: childKey, _type: 'span', text: content }]
      })
    } else {
      blocks.push({
        _key: blockKey,
        _type: 'block',
        style: 'normal',
        children: [{ _key: childKey, _type: 'span', text: content }]
      })
    }
  }
  return blocks
}

function stringToBlocks(text?: string): any[] {
  if (!text) return []
  if (text.includes('<p>') || text.includes('<h3>')) {
    return htmlToBlocks(text)
  }
  return [
    {
      _key: randomKey(),
      _type: 'block',
      style: 'normal',
      children: [
        {
          _key: randomKey(),
          _type: 'span',
          text: text
        }
      ]
    }
  ]
}

async function importData() {
  console.log('Starting Sanity data import...')

  // Import Private Experiences (B2C)
  for (const exp of experiencesB2C) {
    const doc = {
      _id: `exp-b2c-${exp.id}`,
      _type: 'experience',
      title: exp.title,
      slug: { _type: 'slug', current: exp.id },
      subtitle: exp.subtitle,
      type: 'b2c',
      order: exp.order,
      duration: exp.duration,
      maxGuests: exp.maxGuests,
      description: exp.description,
      bullets: exp.bullets,
      imageUrl: exp.imageUrl
    }
    console.log(`Importing B2C Experience: ${exp.title}`)
    await client.createOrReplace(doc)
  }

  // Import Tea Anywhere (B2B)
  for (const exp of experiencesB2B) {
    const doc = {
      _id: `exp-b2b-${exp.id}`,
      _type: 'experience',
      title: exp.title,
      slug: { _type: 'slug', current: exp.id },
      subtitle: exp.subtitle,
      type: 'b2b',
      order: exp.order,
      description: exp.description,
      highlights: exp.highlights,
      imageUrl: exp.imageUrl
    }
    console.log(`Importing B2B Experience: ${exp.title}`)
    await client.createOrReplace(doc)
  }

  // Import Testimonials
  for (const item of testimonials) {
    const doc: any = {
      _id: `testimonial-${item.id}`,
      _type: 'testimonial',
      title: item.title,
      slug: { _type: 'slug', current: item.slug },
      type: item.type,
      publishedAt: item.publishedAt,
      description: stringToBlocks(item.description),
      mediaUrl: item.mediaUrl
    }

    if (item.galleryUrls) {
      doc.galleryUrls = item.galleryUrls
    }
    if (item.videoUrl) {
      doc.videoUrl = item.videoUrl
      doc.duration = item.duration
    }
    if (item.body) {
      doc.body = htmlToBlocks(item.body)
    }

    console.log(`Importing Testimonial: ${item.title}`)
    await client.createOrReplace(doc)
  }

  console.log('✅ All data successfully imported to Sanity!')
}

importData().catch(err => {
  console.error('Import failed:', err)
  process.exit(1)
})

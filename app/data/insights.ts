export interface InsightPost {
  id: string;
  slug: string;
  title: string;
  type: 'photo' | 'video' | 'article';
  publishedAt: string;
  mediaUrl: string;
  description: string;
  body?: string;
  readTime?: string;
}

export const insightsMockData: InsightPost[] = [
  {
    id: '1',
    slug: 'the-art-of-slowing-down-tea-philosophy',
    title: 'The Art of Slowing Down: Ancient Tea Philosophy',
    type: 'article',
    publishedAt: '2026-05-15T10:00:00Z',
    mediaUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
    description: 'Explore the concept of Fangsong (release and letting go) through traditional Chinese tea rituals and mindful brewing methods.',
    readTime: '5 min read',
    body: `
      <p>In our modern, fast-paced world, speed is often celebrated. Yet, the ancient Chinese tea masters believed that true depth and connection can only be found when we slow down. This philosophy of deliberate presence is embedded in every step of the Gongfu tea ceremony.</p>
      
      <h3>The Concept of Fangsong</h3>
      <p>Fangsong (放松) translates loosely to "release" or "letting go." In a tea meditation, this represents relaxing the body and centering the mind. As you heat the water, warm the clay teapot, and watch the tea leaves slowly unfurl, the external noise begins to fade. Each action is performed with intention and quiet grace, transforming a simple beverage preparation into a ritual of presence.</p>
      
      <blockquote>"Taking one’s time is the best way for not wasting it." &mdash; Nicolas Bouvier</blockquote>

      <h3>Rhythms of the Clay and Water</h3>
      <p>Traditional Yixing purple clay teapots are prized for their ability to absorb the essential oils of the tea over decades of use. They are porous, breathing vessels. Brewing tea in Yixing clay is a dialogue between the minerals of the earth, the temperature of the water, and the patience of the host. By aligning with these natural materials, we learn to align with our own internal rhythms.</p>

      <h3>How to Practice at Home</h3>
      <p>To integrate a minor tea ritual into your daily routine:</p>
      <ul>
        <li>Choose a quiet corner of your room, free from digital screens.</li>
        <li>Focus entirely on the sensory qualities of the water heating: the sound of the bubbles (referred to as "shrimp eyes" or "dragon whispers" as the temperature changes).</li>
        <li>Observe the aroma of the dry leaves in a pre-warmed cup before adding water.</li>
        <li>Sip slowly, feeling the texture and temperature move down your throat.</li>
      </ul>
      <p>By dedicating even fifteen minutes to this practice, we ground ourselves and reconnect with our own origin.</p>
    `
  },
  {
    id: '2',
    slug: 'harvesting-pre-rain-longjing-zhejiang',
    title: 'Harvesting Pre-Rain Longjing in Zhejiang',
    type: 'photo',
    publishedAt: '2026-04-22T08:30:00Z',
    mediaUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800&auto=format&fit=crop',
    description: 'A visual journal capturing the early spring harvest of Longjing (Dragon Well) tea leaves in Hangzhou, prior to the Qingming festival.'
  },
  {
    id: '3',
    slug: 'soundscapes-of-pipa-and-guzheng-sessions',
    title: 'Soundscapes of Pipa & Guzheng: A Live Session',
    type: 'video',
    publishedAt: '2026-04-05T14:15:00Z',
    mediaUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
    description: 'Listen to the delicate harmonics of the Pipa string instrument recorded live during our Signature Tea session in Cité Bourgogne.'
  },
  {
    id: '4',
    slug: 'cross-cultural-pairings-oolong-and-comte',
    title: 'Cross-Cultural Dialogues: Aged Oolong & French Comté',
    type: 'article',
    publishedAt: '2026-03-18T11:00:00Z',
    mediaUrl: 'https://images.unsplash.com/photo-1486299267070-8382e214434b?q=80&w=800&auto=format&fit=crop',
    description: 'How contrasting culinary traditions find unexpected harmony. An exploration of structural similarities between roasted oolongs and aged Alpine cheeses.',
    readTime: '4 min read',
    body: `
      <p>Pairing tea with food is an ancient art, but pairing Chinese tea with French artisan cheeses opens up a new realm of sensory dialogue. Our signature "Tea & Cheese Pairing" experience was born from this cross-cultural curiosity.</p>
      
      <h3>The Chemistry of Contrast</h3>
      <p>When high-tannin roasted oolongs (like Da Hong Pao from the Wuyi mountains) meet the rich, nutty fats of an 18-month aged Comté cheese, something extraordinary happens. The heat of the tea melts the crystalline fats of the cheese, releasing sweet notes of dried apricot and hazelnut. Meanwhile, the astringency of the tea cleanses the palate, leaving a clean, lingering finish.</p>

      <h3>Three Rules of Tea & Cheese Pairing</h3>
      <p>When curating your own tasting, keep these principles in mind:</p>
      <ol>
        <li><strong>Match Intensity:</strong> Light white teas go well with delicate goat cheeses. Heavy, roasted teas require aged, firm cheeses.</li>
        <li><strong>Control Temperature:</strong> The tea must be served hot (between 85°C and 95°C) to interact chemically with the milk lipids.</li>
        <li><strong>Avoid Sweeteners:</strong> Keep both elements pure and unadulterated to appreciate the natural earthiness of both cultures.</li>
      </ol>
      <p>Through pairings like these, we discover that different cultures are not barriers, but invitations to dialogue and new discoveries.</p>
    `
  },
  {
    id: '5',
    slug: 'morning-gong-guzheng-instrument-details',
    title: 'The Resonance of Wood: Guzheng Details',
    type: 'photo',
    publishedAt: '2026-03-01T09:00:00Z',
    mediaUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    description: 'A study of the carved paulownia wood and movable bridges of the Guzheng zither, photographed in morning sunlight.'
  },
  {
    id: '6',
    slug: 'guzheng-and-tea-pouring-cinematic-flow',
    title: 'The Flow of Tea: Immersive Pouring Rituals',
    type: 'video',
    publishedAt: '2026-02-14T16:40:00Z',
    mediaUrl: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=800&auto=format&fit=crop',
    description: 'Watch a short cinematic flow displaying the movements of the Gongfu tea ceremony, accompanied by meditation bowls.'
  }
];

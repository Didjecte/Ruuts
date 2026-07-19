import * as cliPkg from 'sanity/cli'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getCliClient = (cliPkg as any).getCliClient || (cliPkg as any).default?.getCliClient
const client = getCliClient({ apiVersion: '2026-07-14' })

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

function stringsToBlocks(strings: string[]): any[] {
  return strings.map(text => ({
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
  }))
}

async function uploadImageIfPossible(filename: string): Promise<any | null> {
  const imagesDir = path.resolve(__dirname, '../../app/assets/images')
  const filePath = path.join(imagesDir, filename)
  if (fs.existsSync(filePath)) {
    console.log(`📤 Uploading image asset: ${filename}...`)
    try {
      const asset = await client.assets.upload('image', fs.createReadStream(filePath), {
        filename: filename
      })
      console.log(`✅ Uploaded ${filename} successfully (_id: ${asset._id})`)
      return {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: asset._id
        }
      }
    } catch (err) {
      console.error(`❌ Failed to upload image ${filename}:`, err)
      return null
    }
  } else {
    console.warn(`⚠️ Image file not found at ${filePath}, skipping asset upload.`)
    return null
  }
}

async function importSiteContent() {
  console.log('🚀 Starting import of current local info into Sanity...')

  // 1. Upload local images as Sanity assets
  const homeImgRef = await uploadImageIfPossible('home.jpg')
  const founderImgRef = await uploadImageIfPossible('founder.jpg')
  const originImgRef = await uploadImageIfPossible('origin.jpg')
  const missionImgRef = await uploadImageIfPossible('mission.jpg')

  // 2. Create Global Site Settings singleton
  console.log('\n📝 Creating/Updating Global Site Settings (siteSettings)...')
  const siteSettingsDoc: any = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    title: 'Global Site Settings',
    defaultSeoTitle: 'RUUTS | Chinese Tea Experiences & Corporate Events',
    titlePrefix: 'Ruuts - ',
    defaultSeoDescription: 'Reconnecting with roots through authentic Chinese tea experiences, private cultural introductions, seasonal tastings, and custom corporate events.',
    siteName: 'RUUTS 丝络嘉木',
    founderName: 'Ophélie Hu',
    location: 'Shanghai & Hangzhou, China',
    contactEmail: 'contact@theruuts.com',
    contactPhone: '+86 18217180655'
  }
  if (homeImgRef) {
    siteSettingsDoc.defaultSeoImage = homeImgRef
  }
  await client.createIfNotExists(siteSettingsDoc)
  await client.patch('siteSettings').setIfMissing(siteSettingsDoc).commit()
  console.log('✅ Global Site Settings imported!')

  // 3. Create Homepage Content singleton
  console.log('\n📝 Creating/Updating Homepage Content (homepageContent)...')
  const homepageContentDoc: any = {
    _id: 'homepageContent',
    _type: 'homepageContent',
    title: 'Homepage Content Settings',
    
    // SEO Overrides
    seoTitle: 'RUUTS | Chinese Tea Experiences & Corporate Events',
    seoDescription: 'Reconnecting with roots through authentic Chinese tea experiences, private cultural introductions, seasonal tastings, and custom corporate events in China and beyond.',

    // Hero Section
    heroTitle: 'Reconnect with your roots',
    heroSubtext: 'Through the ancient art and living culture of Chinese tea.',
    ...(homeImgRef ? { heroImage: homeImgRef } : {}),

    // Intro Section
    introTitle: 'Ancient Traditions, Modern Presence',
    introParagraphs: stringsToBlocks([
      'Where heritage meets contemporary living through mindfulness and taste.',
      'Chinese tea is not merely a beverage — it is a living philosophy, a quiet meditation, and a bridge between cultures. Originating thousands of years ago, tea rituals were cultivated by monks, poets, and emperors as a means to harmonize with nature and cultivate inner clarity.',
      'At RUUTS, we invite you to experience the profound depth of Chinese tea culture. Whether through intimate seasonal gatherings, guided sensory tastings, or custom corporate events, each session is crafted to slow down time and awaken the senses.'
    ]),
    ...(founderImgRef ? { introImage: founderImgRef } : {}),

    // Testimonials Section
    testimonialsTitle: 'Voices of Our Guests',
    testimonialsSubtext: 'Read stories, insights, and moments shared by those who have journeyed with us through tea.',
    testimonialsMetaTitle: '',
    testimonialsMetaDescription: '',

    // Tea Anywhere Section
    b2bTitle: 'Tea Anywhere',
    b2bDescription: 'Elevate your corporate events, team retreats, and brand activations with our tailored tea experiences. Whether interactive sensory challenges or mindful cultural keynotes, we bring the art of Chinese tea directly to your venue.',
    teaAnywhereMetaTitle: '',
    teaAnywhereMetaDescription: '',

    // Private Experiences Section
    b2cTitle: 'Private Experiences',
    b2cDescription: 'Explore the profound world of Chinese tea through our curated private sessions. From seasonal tastings to live Pipa music pairings and Taichi meditations, each session invites you to slow down and savor the present.',
    privateExperiencesMetaTitle: '',
    privateExperiencesMetaDescription: '',
    b2cPolicyTitle: 'Private Session Policies',
    b2cPolicyDescription: 'To preserve the quality of each experience and the integrity of the hosting space, the following guidelines govern all bookings.',
    b2cPolicyConfirmation: [
      'Confirmed date and time',
      'Number of guests',
      'Selected experience type',
      'Bookings are considered confirmed only upon full payment.'
    ],
    b2cPolicyModification: [
      'You may reschedule your session to a new date within 30 days after the original session date.',
      'Requests must be made at least 14 working days before the original session date.',
      'Rescheduling is subject to availability. No fee applies, but only one modification is allowed.',
      'If you cancel after rescheduling, the original cancellation policy applies based on the new session date.'
    ],
    b2cPolicyCancellation: [
      { _key: randomKey(), range: 'More than 10 days before', refund: '60% refund' },
      { _key: randomKey(), range: 'Between 5 and 10 days before (5 days included)', refund: '50% refund' },
      { _key: randomKey(), range: 'Between 2 and 5 days before (2 days included)', refund: '30% refund' },
      { _key: randomKey(), range: 'Less than 2 days but at least 24 hours before', refund: '10% refund' },
      { _key: randomKey(), range: 'Less than 24 hours before the start', refund: '0% refund' }
    ],
    b2cPolicyForceMajeure: 'Force majeure means any event beyond reasonable human control that is unavoidable and makes performance impossible, including but not limited to natural disasters, government-ordered lockdowns, epidemics, or pandemics. If a force majeure event occurs, you may choose either: Reschedule to a new date (subject to availability), or a full refund of all amounts paid.',

    // About Section
    aboutStoryTitle: 'Our Story',
    aboutStorySubtitle: "RUUTS was born from a simple wish: to reconnect with ones' roots.",
    aboutStoryText: stringsToBlocks([
      'Through exploring the world of Chinese tea, our Franco-Chinese founder rediscovered the true meaning of roots.',
      'Invisible yet essential, roots are what all beings share. They hold our stories, our strength, our sense of belonging. The deeper we understand them, the more grounded we become. RUUTS is a journey back to the origin.',
      'From Guangdong to Yunnan, from Fujian to Anhui, from Zhejiang to Jiangsu, Chinese tea culture shifts from one province to another, from one village to the next — yet everywhere, the same spirit endures: passion, patience, and the quiet belief that mastery is born of time and dedication.'
    ]),
    ...(originImgRef ? { aboutStoryImage: originImgRef } : {}),

    aboutFounderTitle: 'The Founder',
    aboutFounderSubtitle: 'Ophélie Hu',
    aboutFounderText: stringsToBlocks([
      'Franco-Chinese and driven by her curiosity for China and her own roots, Ophélie earned a Master’s degree in Supply Chain Management from a French business school before moving to Shanghai in 2018. She began her professional journey in supply chain project management, procurement, and business development — yet her heart was quietly drawn to tea.',
      'By 2021, she began splitting her time between the bustling city and China’s tea-growing regions, learning from master artisans and uncovering the rituals, aromas, and stories behind every leaf. In 2022, she created Chabutu 茶不土, a WeChat page devoted to sharing these discoveries with a wider audience. Her journey of mastery continued in 2024, when she earned her first Chinese tea tasting certification in Hangzhou.',
      'Today, Ophélie blends her cross-cultural expertise with her creative spirit to craft tea experiences that go beyond delighting the senses — experiences that tell stories, connect people, and transform corporate events into genuine cultural journeys.'
    ]),
    ...(founderImgRef ? { aboutFounderImage: founderImgRef } : {}),

    aboutMissionTitle: 'Our Mission',
    ...(missionImgRef ? { aboutMissionImage: missionImgRef } : {}),
    aboutMissionQuote: 'Taking one’s time is the best way for not wasting it.',
    aboutMissionQuoteAuthor: 'Nicolas Bouvier',
    aboutMissions: [
      {
        _key: randomKey(),
        title: 'Create Community',
        description: 'Where we can exchange, share, and explore the world of tea through a fun and thoughtful perspective.'
      },
      {
        _key: randomKey(),
        title: 'Celebrate Intercultural Connections',
        description: 'Celebrating the fusion of Eastern and Western heritage to unlock a unique dimension of Chinese culture.'
      },
      {
        _key: randomKey(),
        title: 'Collect Emotions',
        description: 'Gathering laughter, presence, and crafting unforgettable moments together.'
      },
      {
        _key: randomKey(),
        title: 'Connect with Farmers',
        description: 'Bridging the gap between guests and the tea farmers, honoring the soil and land they cultivate.'
      }
    ],
    aboutMetaTitle: '',
    aboutMetaDescription: '',

    // Contact Section
    contactMetaTitle: '',
    contactMetaDescription: '',
    contactTitle: "Let's craft your event together",
    contactDescription: 'We organize private sessions for tea lovers and corporate events. Contact us to learn more about our partner rates and custom packages.',
    ...(founderImgRef ? { contactImage: founderImgRef } : {}),
    contactEmail: 'contact@theruuts.com',
    contactPhone: '+86 18217180655',
    contactWhatsappLink: 'https://wa.me/8618217180655',
    contactInstagramLink: 'https://instagram.com/ruuts_tea',
    contactWechatLink: 'weixin://',
    contactLinkedinLink: 'https://linkedin.com/'
  }

  await client.createIfNotExists(homepageContentDoc)
  await client.patch('homepageContent')
    .setIfMissing(homepageContentDoc)
    .setIfMissing({
      b2cPolicyTitle: homepageContentDoc.b2cPolicyTitle,
      b2cPolicyDescription: homepageContentDoc.b2cPolicyDescription,
      b2cPolicyConfirmation: homepageContentDoc.b2cPolicyConfirmation,
      b2cPolicyModification: homepageContentDoc.b2cPolicyModification,
      b2cPolicyCancellation: homepageContentDoc.b2cPolicyCancellation,
      b2cPolicyForceMajeure: homepageContentDoc.b2cPolicyForceMajeure
    })
    .commit()
  console.log('✅ Homepage Content imported!')

  console.log('\n🎉 All local site info successfully imported into Sanity Studio!')
}

importSiteContent().catch(err => {
  console.error('❌ Import failed:', err)
  process.exit(1)
})

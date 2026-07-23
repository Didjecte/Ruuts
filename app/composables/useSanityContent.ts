import { computed } from 'vue'

export function useSanityExperiences(catalogType: string) {
  const query = `*[_type == "experience" && type == $catalogType] | order(order asc, _createdAt asc) {
    "id": slug.current,
    title,
    subtitle,
    duration,
    maxGuests,
    description,
    bullets,
    highlights,
    "imageUrl": imageUrl,
    "imageAsset": image.asset._ref
  }`

  const { data, pending, error } = useAsyncData(
    `experiences-${catalogType}`,
    () => useSanity().fetch(query, { catalogType }),
    {
      getCachedData(key, nuxtApp) {
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
      }
    }
  )

  const normalizedData = computed(() => {
    if (!data.value || !Array.isArray(data.value)) return []
    return data.value.map((item: any) => ({
      id: item.id || '',
      title: item.title || '',
      subtitle: item.subtitle || '',
      duration: item.duration || '',
      maxGuests: item.maxGuests || 0,
      description: blocksToHtml(item.description),
      bullets: item.bullets || [],
      highlights: item.highlights || [],
      image: item.imageAsset || item.imageUrl || ''
    }))
  })

  return {
    data: normalizedData,
    pending,
    error
  }
}

export function useSanityTestimonials() {
  const query = `*[_type == "testimonial"] | order(publishedAt desc) {
    _id,
    "slug": slug.current,
    title,
    type,
    publishedAt,
    description,
    "mediaUrl": mediaUrl,
    "mediaImageAsset": mediaImage.asset._ref,
    galleryUrls,
    "galleryImageAssets": galleryImages[].asset._ref,
    videoUrl,
    "videoFileAsset": videoFile.asset->url,
    duration,
    body
  }`

  const { data, pending, error } = useAsyncData(
    'testimonials-list',
    () => useSanity().fetch(query),
    {
      getCachedData(key, nuxtApp) {
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
      }
    }
  )

  const normalizedData = computed(() => {
    if (!data.value || !Array.isArray(data.value)) return []
    return data.value.map((item: any) => {
      const gallery = [
        ...(item.galleryUrls || []),
        ...(item.galleryImageAssets || [])
      ]
      return {
        id: item._id,
        slug: item.slug || '',
        title: item.title || '',
        type: item.type || 'article',
        publishedAt: item.publishedAt || '',
        description: blocksToHtml(item.description),
        mediaUrl: item.mediaImageAsset || item.mediaUrl || '',
        gallery: gallery.length > 0 ? gallery : undefined,
        videoUrl: item.videoFileAsset || item.videoUrl || '',
        duration: item.duration || '',
        body: blocksToHtml(item.body)
      }
    })
  })

  return {
    data: normalizedData,
    pending,
    error
  }
}

function blocksToHtml(blocks: any[] | string | undefined | null): string {
  if (!blocks) return ''
  if (typeof blocks === 'string') return blocks
  if (!Array.isArray(blocks)) return ''

  const htmlParts: string[] = []
  let currentListType: string | null = null
  let listBuffer: string[] = []

  const flushList = () => {
    if (currentListType && listBuffer.length > 0) {
      const tag = currentListType === 'number' ? 'ol' : 'ul'
      htmlParts.push(`<${tag}>${listBuffer.join('')}</${tag}>`)
      listBuffer = []
      currentListType = null
    }
  }

  for (const block of blocks) {
    if (block._type !== 'block' || !block.children) continue
    
    const text = block.children.map((child: any) => {
      let chunk = child.text || ''
      chunk = chunk.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      if (child.marks && Array.isArray(child.marks)) {
        if (child.marks.includes('strong')) chunk = `<strong>${chunk}</strong>`
        if (child.marks.includes('em')) chunk = `<em>${chunk}</em>`
        if (child.marks.includes('underline')) chunk = `<u>${chunk}</u>`
        if (child.marks.includes('strike-through')) chunk = `<del>${chunk}</del>`
      }
      return chunk
    }).join('')

    if (block.listItem) {
      const type = block.listItem === 'number' ? 'number' : 'bullet'
      if (currentListType && currentListType !== type) {
        flushList()
      }
      currentListType = type
      listBuffer.push(`<li>${text}</li>`)
    } else {
      flushList()
      if (block.style === 'h3') {
        htmlParts.push(`<h3>${text}</h3>`)
      } else if (block.style === 'blockquote') {
        htmlParts.push(`<blockquote>${text}</blockquote>`)
      } else {
        htmlParts.push(`<p>${text}</p>`)
      }
    }
  }
  flushList()

  return htmlParts.join('')
}

export function useSanitySiteSettings() {
  const query = `*[_type == "siteSettings" && _id == "siteSettings"][0] {
    defaultSeoTitle,
    titlePrefix,
    defaultSeoDescription,
    "defaultSeoImage": defaultSeoImage.asset->url,
    siteName,
    founderName,
    contactEmail,
    contactPhone,
    location,
    errorPageMessage
  }`

  const { data, pending, error } = useAsyncData(
    'siteSettings',
    () => useSanity().fetch(query),
    {
      getCachedData(key, nuxtApp) {
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
      }
    }
  )

  return {
    data,
    pending,
    error
  }
}

export function useSanityHomepageContent() {
  const query = `*[_type == "homepageContent" && _id == "homepageContent"][0] {
    seoTitle,
    seoDescription,
    heroTitle,
    heroSubtext,
    "heroImage": heroImage.asset->url,
    introTitle,
    introParagraphs,
    "introImage": introImage.asset._ref,
    testimonialsTitle,
    testimonialsSubtext,
    testimonialsMetaTitle,
    testimonialsMetaDescription,
    b2bTitle,
    b2bDescription,
    b2cTitle,
    b2cDescription,
    b2cPolicyTitle,
    b2cPolicyDescription,
    b2cPolicyConfirmation,
    b2cPolicyModification,
    b2cPolicyCancellation,
    b2cPolicyForceMajeure,
    teaAnywhereMetaTitle,
    teaAnywhereMetaDescription,
    privateExperiencesMetaTitle,
    privateExperiencesMetaDescription,
    aboutStoryTitle,
    aboutStorySubtitle,
    aboutStoryText,
    "aboutStoryImage": aboutStoryImage.asset._ref,
    aboutFounderTitle,
    aboutFounderSubtitle,
    aboutFounderText,
    "aboutFounderImage": aboutFounderImage.asset._ref,
    aboutMissionTitle,
    "aboutMissionImage": aboutMissionImage.asset._ref,
    aboutMissionQuote,
    aboutMissionQuoteAuthor,
    aboutMissions,
    aboutMetaTitle,
    aboutMetaDescription,
    contactTitle,
    contactDescription,
    contactSuccessMessage,
    contactErrorMessage,
    "contactImage": contactImage.asset._ref,
    contactEmail,
    contactPhone,
    "contactWechatQR": contactWechatQR.asset._ref,
    contactWechatLink,
    "contactWhatsappQR": contactWhatsappQR.asset._ref,
    contactWhatsappLink,
    "contactInstagramQR": contactInstagramQR.asset._ref,
    contactInstagramLink,
    "contactLinkedinQR": contactLinkedinQR.asset._ref,
    contactMetaTitle,
    contactMetaDescription,
    footerExplorerTitle,
    footerServicesTitle,
    footerServicesItem1,
    footerServicesItem2
  }`

  const { data, pending, error } = useAsyncData(
    'homepageContent',
    () => useSanity().fetch(query),
    {
      getCachedData(key, nuxtApp) {
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
      }
    }
  )

  const normalizedData = computed(() => {
    if (!data.value) return null
    return {
      ...data.value,
      heroImage: data.value.heroImage ? `${data.value.heroImage}?auto=format` : '',
      introHtml: blocksToHtml(data.value.introParagraphs),
      aboutStoryHtml: blocksToHtml(data.value.aboutStoryText),
      aboutFounderHtml: blocksToHtml(data.value.aboutFounderText)
    }
  })

  return {
    data: normalizedData,
    raw: data,
    pending,
    error
  }
}

export function useSanitySeo(pageSeo?: any) {
  const { data: siteSettings } = useSanitySiteSettings()
  const route = useRoute()

  const resolvedSeo = computed(() => {
    const settings = siteSettings.value || {}
    const page = pageSeo && (pageSeo.value || pageSeo) ? (pageSeo.value || pageSeo) : {}

    const prefix = settings.titlePrefix || 'Ruuts - '
    const baseTitle = page.seoTitle 
      ? `${prefix}${page.seoTitle}` 
      : (settings.defaultSeoTitle || 'Ruuts - Premium Group Experiences & Tea Rituals')

    const description = page.seoDescription || settings.defaultSeoDescription || 'Reconnect with your roots through Chinese tea culture. We design signature tea ceremonies, body rituals, and premium group experiences.'
    const image = page.seoImage || settings.defaultSeoImage || ''
    const canonicalPath = route.path ? (route.path.endsWith('/') && route.path !== '/' ? route.path.slice(0, -1) : route.path) : ''
    const canonicalUrl = `https://theruuts.com${canonicalPath}`

    return {
      title: baseTitle,
      description,
      image,
      canonicalUrl,
      siteName: settings.siteName || 'RUUTS',
      founderName: settings.founderName || 'Ophélie Hu',
      contactEmail: settings.contactEmail || 'contact@theruuts.com',
      contactPhone: settings.contactPhone || '+86 18217180655',
      location: settings.location || 'Shanghai, China'
    }
  })

  // Set standard meta tags and canonical link
  useSeoMeta({
    title: () => resolvedSeo.value.title,
    ogTitle: () => resolvedSeo.value.title,
    description: () => resolvedSeo.value.description,
    ogDescription: () => resolvedSeo.value.description,
    ogImage: () => resolvedSeo.value.image,
    ogUrl: () => resolvedSeo.value.canonicalUrl,
    twitterCard: 'summary_large_image',
    twitterTitle: () => resolvedSeo.value.title,
    twitterDescription: () => resolvedSeo.value.description,
    twitterImage: () => resolvedSeo.value.image,
  })

  // Inject Organization, LocalBusiness & BreadcrumbList JSON-LD structured data for AI search engines (GEO)
  useHead({
    link: [
      { rel: 'canonical', href: computed(() => resolvedSeo.value.canonicalUrl) }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: computed(() => {
          const pathSegments = route.path.split('/').filter(Boolean)
          const breadcrumbItems: any[] = [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://theruuts.com'
            }
          ]

          pathSegments.forEach((segment, idx) => {
            const segmentName = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
            breadcrumbItems.push({
              '@type': 'ListItem',
              'position': idx + 2,
              'name': segmentName,
              'item': `https://theruuts.com/${pathSegments.slice(0, idx + 1).join('/')}`
            })
          })

          return JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                '@id': `https://theruuts.com${route.path}#breadcrumbs`,
                'itemListElement': breadcrumbItems
              },
              {
                '@type': 'Organization',
                '@id': 'https://theruuts.com/#organization',
                'name': resolvedSeo.value.siteName,
                'url': 'https://theruuts.com',
                'logo': resolvedSeo.value.image || 'https://theruuts.com/logo.png',
                'founder': {
                  '@type': 'Person',
                  'name': resolvedSeo.value.founderName
                },
                'contactPoint': {
                  '@type': 'ContactPoint',
                  'telephone': resolvedSeo.value.contactPhone,
                  'contactType': 'customer service',
                  'email': resolvedSeo.value.contactEmail
                }
              },
              {
                '@type': 'LocalBusiness',
                '@id': 'https://theruuts.com/#localbusiness',
                'name': resolvedSeo.value.siteName,
                'image': resolvedSeo.value.image || 'https://theruuts.com/logo.png',
                'telephone': resolvedSeo.value.contactPhone,
                'email': resolvedSeo.value.contactEmail,
                'address': {
                  '@type': 'PostalAddress',
                  'addressLocality': resolvedSeo.value.location,
                  'addressCountry': 'CN'
                },
                'url': 'https://theruuts.com'
              }
            ]
          })
        })
      }
    ]
  })
}



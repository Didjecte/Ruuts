import { computed } from 'vue'

export function useSanityExperiences(catalogType: string) {
  const query = `*[_type == "experience" && type == $catalogType] | order(order asc, _createdAt asc) {
    "id": slug.current,
    title,
    subtitle,
    duration,
    maxGuests,
    "pricePerGuest": price,
    "minBookingValue": minValue,
    description,
    bullets,
    highlights,
    "imageUrl": imageUrl,
    "imageAsset": image.asset->url
  }`

  const { data, pending, error } = useLazyAsyncData(
    `experiences-${catalogType}`,
    () => useSanity().fetch(query, { catalogType })
  )

  const normalizedData = computed(() => {
    if (!data.value || !Array.isArray(data.value)) return []
    return data.value.map((item: any) => ({
      id: item.id || '',
      title: item.title || '',
      subtitle: item.subtitle || '',
      duration: item.duration || '',
      maxGuests: item.maxGuests || 0,
      pricePerGuest: item.pricePerGuest || 0,
      minBookingValue: item.minBookingValue || 0,
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
    "mediaImageAsset": mediaImage.asset->url,
    galleryUrls,
    "galleryImageAssets": galleryImages[].asset->url,
    videoUrl,
    duration,
    body
  }`

  const { data, pending, error } = useLazyAsyncData(
    'testimonials-list',
    () => useSanity().fetch(query)
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
        videoUrl: item.videoUrl || '',
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


import { computed } from 'vue'

export async function useSanityExperiences(catalogType: string) {
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

  const { data, pending, error } = await useLazyAsyncData(
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
      description: item.description || '',
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

export async function useSanityTestimonials() {
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

  const { data, pending, error } = await useLazyAsyncData(
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
        description: item.description || '',
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

function blocksToHtml(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return ''
  return blocks.map(block => {
    if (block._type !== 'block' || !block.children) return ''
    
    const text = block.children.map((child: any) => {
      let chunk = child.text || ''
      chunk = chunk.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      return chunk
    }).join('')

    if (block.listItem) {
      return `<li>${text}</li>`
    }
    if (block.style === 'h3') {
      return `<h3>${text}</h3>`
    }
    if (block.style === 'blockquote') {
      return `<blockquote>${text}</blockquote>`
    }
    return `<p>${text}</p>`
  }).join('')
}

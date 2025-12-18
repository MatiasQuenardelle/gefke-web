import { getMetadata, createMetadataGenerator } from '@/lib/metadata'

describe('getMetadata', () => {
  const baseUrl = 'https://www.buxtongefke.es'

  it('returns metadata object with required properties', () => {
    const metadata = getMetadata('about', '/about', 'da')

    expect(metadata).toHaveProperty('title')
    expect(metadata).toHaveProperty('description')
    expect(metadata).toHaveProperty('openGraph')
    expect(metadata).toHaveProperty('twitter')
    expect(metadata).toHaveProperty('alternates')
    expect(metadata).toHaveProperty('robots')
  })

  it('sets correct canonical URL based on path', () => {
    const metadata = getMetadata('about', '/about', 'da')

    expect(metadata.alternates.canonical).toBe(`${baseUrl}/about`)
    expect(metadata.openGraph.url).toBe(`${baseUrl}/about`)
  })

  it('includes all language alternates', () => {
    const metadata = getMetadata('about', '/about', 'da')

    expect(metadata.alternates.languages).toHaveProperty('da')
    expect(metadata.alternates.languages).toHaveProperty('en')
    expect(metadata.alternates.languages).toHaveProperty('es')
    expect(metadata.alternates.languages).toHaveProperty('x-default')
  })

  it('sets correct locale based on language', () => {
    const metadataDa = getMetadata('about', '/about', 'da')
    const metadataEn = getMetadata('about', '/about', 'en')
    const metadataEs = getMetadata('about', '/about', 'es')

    expect(metadataDa.openGraph.locale).toBe('da_DK')
    expect(metadataEn.openGraph.locale).toBe('en_US')
    expect(metadataEs.openGraph.locale).toBe('es_ES')
  })

  it('defaults to Danish when invalid language provided', () => {
    const metadata = getMetadata('about', '/about', 'invalid')

    expect(metadata).toHaveProperty('title')
    expect(metadata).toHaveProperty('description')
  })

  it('includes author information', () => {
    const metadata = getMetadata('about', '/about', 'da')

    expect(metadata.authors).toEqual([{ name: 'Christian Gefke' }])
    expect(metadata.creator).toBe('Christian Gefke')
    expect(metadata.publisher).toBe('Christian Gefke Law Office')
  })

  it('sets correct OpenGraph image', () => {
    const metadata = getMetadata('about', '/about', 'da')

    expect(metadata.openGraph.images).toHaveLength(1)
    expect(metadata.openGraph.images[0].url).toBe(`${baseUrl}/images/CristianGefke.png`)
    expect(metadata.openGraph.images[0].width).toBe(1200)
    expect(metadata.openGraph.images[0].height).toBe(630)
  })

  it('sets correct robots configuration', () => {
    const metadata = getMetadata('about', '/about', 'da')

    expect(metadata.robots.index).toBe(true)
    expect(metadata.robots.follow).toBe(true)
    expect(metadata.robots.googleBot.index).toBe(true)
    expect(metadata.robots.googleBot.follow).toBe(true)
  })
})

describe('createMetadataGenerator', () => {
  it('returns an async function', () => {
    const generator = createMetadataGenerator('about', '/about')

    expect(typeof generator).toBe('function')
  })

  it('generates metadata with default language when no params', async () => {
    const generator = createMetadataGenerator('about', '/about')
    const metadata = await generator({})

    expect(metadata).toHaveProperty('title')
    expect(metadata).toHaveProperty('description')
  })

  it('respects language parameter from params', async () => {
    const generator = createMetadataGenerator('about', '/about')
    const metadata = await generator({ params: { lang: 'es' } })

    expect(metadata.openGraph.locale).toBe('es_ES')
  })
})

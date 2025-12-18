import {
  getLegalServiceSchema,
  getPersonSchema,
  getArticleSchema,
  getFAQPageSchema,
  schemaToScript
} from '@/lib/structuredData'

describe('getLegalServiceSchema', () => {
  it('returns valid LegalService schema', () => {
    const schema = getLegalServiceSchema()

    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toBe('LegalService')
    expect(schema.name).toBe('Christian Gefke - Spansk Advokat')
  })

  it('includes both Spain and Denmark addresses', () => {
    const schema = getLegalServiceSchema()

    expect(schema.address).toHaveLength(2)
    expect(schema.address[0].addressCountry).toBe('ES')
    expect(schema.address[1].addressCountry).toBe('DK')
  })

  it('includes correct service types', () => {
    const schema = getLegalServiceSchema()

    expect(schema.serviceType).toContain('Real Estate Law')
    expect(schema.serviceType).toContain('Business Law')
    expect(schema.serviceType).toContain('Family Law')
    expect(schema.serviceType).toContain('Immigration Law')
  })

  it('includes contact point with available languages', () => {
    const schema = getLegalServiceSchema()

    expect(schema.contactPoint.availableLanguage).toContain('Danish')
    expect(schema.contactPoint.availableLanguage).toContain('English')
    expect(schema.contactPoint.availableLanguage).toContain('Spanish')
  })

  it('includes bar membership information', () => {
    const schema = getLegalServiceSchema()

    expect(schema.memberOf.name).toBe('Colegio de Abogados de Lanzarote')
    expect(schema.memberOf.member.identifier).toBe('635')
  })
})

describe('getPersonSchema', () => {
  it('returns valid Person schema', () => {
    const schema = getPersonSchema()

    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toBe('Person')
    expect(schema.name).toBe('Christian Gefke')
  })

  it('includes job title', () => {
    const schema = getPersonSchema()

    expect(schema.jobTitle).toBe('Spanish Lawyer (Abogado)')
  })

  it('includes educational background', () => {
    const schema = getPersonSchema()

    expect(schema.alumniOf).toHaveLength(2)
    expect(schema.alumniOf[0].name).toBe('University of Las Palmas de Gran Canaria')
  })

  it('includes areas of expertise', () => {
    const schema = getPersonSchema()

    expect(schema.knowsAbout).toContain('Spanish Law')
    expect(schema.knowsAbout).toContain('Real Estate Law')
  })
})

describe('getArticleSchema', () => {
  it('returns valid Article schema', () => {
    const schema = getArticleSchema({
      title: 'Test Article',
      description: 'Test description',
      path: '/test-article',
      datePublished: '2024-01-01',
      dateModified: '2024-06-01'
    })

    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toBe('Article')
    expect(schema.headline).toBe('Test Article')
  })

  it('uses default author when not specified', () => {
    const schema = getArticleSchema({
      title: 'Test',
      description: 'Test',
      path: '/test'
    })

    expect(schema.author.name).toBe('Christian Gefke')
  })

  it('constructs correct URL from path', () => {
    const schema = getArticleSchema({
      title: 'Test',
      description: 'Test',
      path: '/real-estate-spain'
    })

    expect(schema.url).toBe('https://www.buxtongefke.es/real-estate-spain')
  })

  it('includes publisher information', () => {
    const schema = getArticleSchema({
      title: 'Test',
      description: 'Test',
      path: '/test'
    })

    expect(schema.publisher['@type']).toBe('LegalService')
    expect(schema.publisher.name).toBe('Christian Gefke - Spansk Advokat')
  })
})

describe('getFAQPageSchema', () => {
  const testFaqs = [
    { question: 'What is this?', answer: 'This is a test.' },
    { question: 'How does it work?', answer: 'It works like this.' }
  ]

  it('returns valid FAQPage schema', () => {
    const schema = getFAQPageSchema(testFaqs)

    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toBe('FAQPage')
  })

  it('maps FAQs to Question entities', () => {
    const schema = getFAQPageSchema(testFaqs)

    expect(schema.mainEntity).toHaveLength(2)
    expect(schema.mainEntity[0]['@type']).toBe('Question')
    expect(schema.mainEntity[0].name).toBe('What is this?')
  })

  it('includes Answer entities', () => {
    const schema = getFAQPageSchema(testFaqs)

    expect(schema.mainEntity[0].acceptedAnswer['@type']).toBe('Answer')
    expect(schema.mainEntity[0].acceptedAnswer.text).toBe('This is a test.')
  })

  it('handles empty FAQ array', () => {
    const schema = getFAQPageSchema([])

    expect(schema.mainEntity).toHaveLength(0)
  })
})

describe('schemaToScript', () => {
  it('returns object with __html property', () => {
    const schema = { '@type': 'Test' }
    const result = schemaToScript(schema)

    expect(result).toHaveProperty('__html')
  })

  it('stringifies schema to JSON', () => {
    const schema = { '@type': 'Test', name: 'Example' }
    const result = schemaToScript(schema)
    const parsed = JSON.parse(result.__html)

    expect(parsed['@type']).toBe('Test')
    expect(parsed.name).toBe('Example')
  })
})

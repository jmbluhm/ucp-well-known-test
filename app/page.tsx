export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://jordans-tomato-store.vercel.app',
    name: "Jordan's Tomato Store",
    description: 'Family-owned farm specializing in premium, locally-grown organic tomatoes',
    url: 'https://jordans-tomato-store.vercel.app',
    telephone: '+1-555-TOMATO-1',
    email: 'hello@jordanstomatoes.com',
    foundingDate: '2020',
    priceRange: '$$',
    image: 'https://jordans-tomato-store.vercel.app/og-image.jpg',
    potentialAction: {
      '@type': 'OrderAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://jordans-tomato-store.vercel.app/.well-known/ucp',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform'
        ]
      }
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Metro Area',
      addressRegion: 'State',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7128',
      longitude: '-74.0060',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    currenciesAccepted: 'USD',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '40.7128',
        longitude: '-74.0060',
      },
      geoRadius: '50 miles',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tomato Products',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Heritage Beefsteak Tomatoes',
            description: 'Large, meaty tomatoes perfect for slicing. Rich, complex flavor.',
            offers: {
              '@type': 'Offer',
              price: '6.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '6.99',
                priceCurrency: 'USD',
                unitCode: 'LBR',
              },
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Cherry Tomatoes',
            description: 'Sweet and juicy. Perfect for salads and snacking.',
            offers: {
              '@type': 'Offer',
              price: '4.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Roma Tomatoes',
            description: 'Ideal for sauces and canning. Low moisture, intense flavor.',
            offers: {
              '@type': 'Offer',
              price: '5.49',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '5.49',
                priceCurrency: 'USD',
                unitCode: 'LBR',
              },
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Heirloom Mix Tomatoes',
            description: 'Colorful assortment of unique heirloom varieties.',
            offers: {
              '@type': 'Offer',
              price: '7.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '7.99',
                priceCurrency: 'USD',
                unitCode: 'LBR',
              },
            },
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
    },
  };

  return (
    <main itemScope itemType="https://schema.org/LocalBusiness">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 itemProp="name" style={{ fontSize: '3rem', color: '#c73e1d', marginBottom: '0.5rem' }}>Jordan&apos;s Tomato Store</h1>
        <p itemProp="slogan" style={{ fontSize: '1.2rem', color: '#666' }}>Fresh, Locally Grown Tomatoes Since 2020</p>
      </header>

      <section itemProp="description" style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#c73e1d' }}>Welcome to Our Farm</h2>
        <p>
          At Jordan&apos;s Tomato Store, we take pride in growing the finest, most flavorful tomatoes in the region.
          Our family-owned farm has been cultivating premium tomatoes for over four years, using sustainable
          farming practices and time-tested techniques passed down through generations.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Located in the heart of the metro area, we serve fresh tomatoes to families throughout the region.
          Every tomato is hand-picked at peak ripeness to ensure you receive the best flavor and nutrition.
          Our commitment to organic, pesticide-free farming means you can trust the quality of every tomato that
          leaves our farm.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#c73e1d' }}>Our Tomato Varieties</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <article itemScope itemType="https://schema.org/Product" style={{ border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '8px' }}>
            <h3 itemProp="name">Heritage Beefsteak</h3>
            <p itemProp="description" style={{ color: '#666', fontSize: '0.9rem' }}>Large, meaty tomatoes perfect for slicing. Rich, complex flavor.</p>
            <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>
              <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="priceCurrency" content="USD" />
                $<span itemProp="price">6.99</span>/lb
              </span>
            </p>
          </article>
          <article itemScope itemType="https://schema.org/Product" style={{ border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '8px' }}>
            <h3 itemProp="name">Cherry Tomatoes</h3>
            <p itemProp="description" style={{ color: '#666', fontSize: '0.9rem' }}>Sweet and juicy. Perfect for salads and snacking.</p>
            <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>
              <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="priceCurrency" content="USD" />
                $<span itemProp="price">4.99</span>/pint
              </span>
            </p>
          </article>
          <article itemScope itemType="https://schema.org/Product" style={{ border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '8px' }}>
            <h3 itemProp="name">Roma Tomatoes</h3>
            <p itemProp="description" style={{ color: '#666', fontSize: '0.9rem' }}>Ideal for sauces and canning. Low moisture, intense flavor.</p>
            <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>
              <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="priceCurrency" content="USD" />
                $<span itemProp="price">5.49</span>/lb
              </span>
            </p>
          </article>
          <article itemScope itemType="https://schema.org/Product" style={{ border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '8px' }}>
            <h3 itemProp="name">Heirloom Mix</h3>
            <p itemProp="description" style={{ color: '#666', fontSize: '0.9rem' }}>Colorful assortment of unique heirloom varieties.</p>
            <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>
              <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="priceCurrency" content="USD" />
                $<span itemProp="price">7.99</span>/lb
              </span>
            </p>
          </article>
        </div>
      </section>

      <section style={{ marginBottom: '3rem', background: '#f9f9f9', padding: '2rem', borderRadius: '8px' }}>
        <h2 style={{ color: '#c73e1d' }}>Why Choose Our Tomatoes?</h2>
        <ul style={{ fontSize: '1.05rem' }}>
          <li>🌱 100% organic, pesticide-free growing methods</li>
          <li>🚜 Harvested fresh daily at peak ripeness</li>
          <li>📦 Same-day delivery available in the local area</li>
          <li>👨‍🌾 Family-owned and operated with care</li>
          <li>🌍 Sustainable farming practices that protect our land</li>
        </ul>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#c73e1d' }}>Order Information</h2>
        <p>
          We offer convenient delivery options throughout the week. Place your order by 6 PM for next-day delivery.
          All tomatoes are hand-picked the morning of delivery to ensure maximum freshness.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Delivery Areas:</strong> Currently serving the greater metro area and surrounding counties within a 50-mile radius.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Minimum Order:</strong> $15
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Contact Us:</strong>{' '}
          <a href="tel:+1-555-TOMATO-1" itemProp="telephone">+1-555-TOMATO-1</a>
          {' | '}
          <a href="mailto:hello@jordanstomatoes.com" itemProp="email">hello@jordanstomatoes.com</a>
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Hours:</strong> Monday-Saturday, 8:00 AM - 6:00 PM
        </p>
      </section>

      <footer style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e0e0e0', color: '#666', textAlign: 'center' }}>
        <p style={{ marginBottom: '0.5rem' }}>
          <strong>Jordan&apos;s Tomato Store</strong>
        </p>
        <p style={{ fontSize: '0.9rem' }}>
          Fresh tomatoes delivered with care | Family-owned since 2020
        </p>
      </footer>
    </main>
  );
}

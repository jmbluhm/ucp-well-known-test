export default function Home() {
  return (
    <main>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#c73e1d', marginBottom: '0.5rem' }}>Jordan&apos;s Tomato Store</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>Fresh, Locally Grown Tomatoes Since 2020</p>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#c73e1d' }}>Welcome to Our Farm</h2>
        <p>
          At Jordan&apos;s Tomato Store, we take pride in growing the finest, most flavorful tomatoes in the region.
          Our family-owned farm has been cultivating premium tomatoes for over four years, using sustainable
          farming practices and time-tested techniques passed down through generations.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#c73e1d' }}>Our Tomato Varieties</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div style={{ border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '8px' }}>
            <h3>Heritage Beefsteak</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Large, meaty tomatoes perfect for slicing. Rich, complex flavor.</p>
            <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>$6.99/lb</p>
          </div>
          <div style={{ border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '8px' }}>
            <h3>Cherry Tomatoes</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Sweet and juicy. Perfect for salads and snacking.</p>
            <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>$4.99/pint</p>
          </div>
          <div style={{ border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '8px' }}>
            <h3>Roma Tomatoes</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Ideal for sauces and canning. Low moisture, intense flavor.</p>
            <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>$5.49/lb</p>
          </div>
          <div style={{ border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '8px' }}>
            <h3>Heirloom Mix</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Colorful assortment of unique heirloom varieties.</p>
            <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>$7.99/lb</p>
          </div>
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
          <strong>Delivery Areas:</strong> Currently serving the greater metro area and surrounding counties.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Minimum Order:</strong> $15
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

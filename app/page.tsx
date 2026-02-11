export default function Home() {
  return (
    <main>
      <h1>UCP Discovery Test App</h1>

      <section>
        <h2>What is this?</h2>
        <p>
          This is a minimal Next.js application deployed on Vercel to test UCP (Universal Commerce Protocol)
          discovery. It serves a UCP manifest at the standard discovery endpoint and logs every request.
        </p>
      </section>

      <section>
        <h2>Discovery Endpoint</h2>
        <p>
          The UCP manifest is available at:
        </p>
        <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
          <code>GET /.well-known/ucp</code>
        </pre>
        <p>
          Every request to this endpoint is logged to stdout in JSON format for debugging.
        </p>
      </section>

      <section>
        <h2>Try it yourself</h2>
        <p>Test the discovery endpoint with curl:</p>
        <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
          <code>{`curl -i https://YOUR-DEPLOYMENT-URL/.well-known/ucp`}</code>
        </pre>
        <p>Or try the ping endpoint:</p>
        <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
          <code>{`curl -i https://YOUR-DEPLOYMENT-URL/api/ping`}</code>
        </pre>
      </section>

      <section>
        <h2>What to look for in Vercel logs</h2>
        <p>After making a request, check your Vercel deployment logs. You should see structured JSON output like:</p>
        <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '4px', overflow: 'auto', fontSize: '0.85rem' }}>
          <code>{`{
  "timestamp": "2026-02-11T10:30:45.123Z",
  "method": "GET",
  "path": "/.well-known/ucp",
  "status": 200,
  "host": "your-app.vercel.app",
  "proto": "https",
  "ip": "1.2.3.4",
  "userAgent": "curl/7.79.1",
  "accept": "*/*",
  "requestId": "xyz123"
}`}</code>
        </pre>
      </section>

      <section>
        <h2>Features</h2>
        <ul>
          <li>✓ Next.js App Router with Node.js runtime</li>
          <li>✓ Standard <code>/.well-known/ucp</code> discovery path</li>
          <li>✓ Proper Content-Type and Cache-Control headers</li>
          <li>✓ Dynamic host/protocol detection from request headers</li>
          <li>✓ Environment variable override via <code>UCP_ENDPOINT_OVERRIDE</code></li>
          <li>✓ Structured JSON logging to stdout</li>
          <li>✓ No external dependencies or databases</li>
        </ul>
      </section>

      <section>
        <h2>Environment Variables</h2>
        <p>
          Optional: Set <code>UCP_ENDPOINT_OVERRIDE</code> to override the auto-detected endpoint URL
          in the manifest (useful for testing or custom domain configurations).
        </p>
      </section>

      <footer style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e0e0e0', color: '#666' }}>
        <p>
          <a href="/.well-known/ucp" style={{ marginRight: '1rem' }}>View UCP Manifest</a>
          <a href="/api/ping">Test Ping Endpoint</a>
        </p>
      </footer>
    </main>
  );
}

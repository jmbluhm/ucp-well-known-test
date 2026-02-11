# UCP Discovery Test App

A minimal Next.js application for testing UCP (Universal Commerce Protocol) discovery on Vercel with comprehensive request logging.

## Features

- ✅ Next.js App Router with Node.js runtime
- ✅ Standard `/.well-known/ucp` discovery endpoint
- ✅ Dynamic host/protocol detection from request headers
- ✅ Structured JSON logging to stdout for every request
- ✅ Optional endpoint URL override via environment variable
- ✅ No external dependencies, databases, or telemetry SDKs
- ✅ Proper HTTP headers (Content-Type, Cache-Control)

## Quick Start

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Test the UCP discovery endpoint:**
   ```bash
   curl -i http://localhost:3000/.well-known/ucp
   ```

5. **Test the ping endpoint:**
   ```bash
   curl -i http://localhost:3000/api/ping
   ```

### Build and Test Production Build

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1: Using Vercel CLI

1. **Install Vercel CLI (if not already installed):**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

   Follow the prompts to link/create a project.

3. **Deploy to production:**
   ```bash
   vercel --prod
   ```

### Option 2: Using Vercel Dashboard

1. Push this code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the repository in [Vercel Dashboard](https://vercel.com/new)
3. Deploy with default settings

## Verify Deployment

After deployment, you'll receive a URL like `https://your-app.vercel.app`.

### Test the UCP discovery endpoint:

```bash
curl -i https://your-app.vercel.app/.well-known/ucp
```

**Expected response:**
```http
HTTP/2 200
content-type: application/json; charset=utf-8
cache-control: no-store

{
  "ucp": {
    "version": "2026-01-11",
    "services": {
      "dev.ucp.shopping": {
        "version": "2026-01-11",
        "spec": "https://ucp.dev/specs/shopping",
        "rest": {
          "schema": "https://ucp.dev/services/shopping/openapi.json",
          "endpoint": "https://your-app.vercel.app/"
        }
      }
    },
    "capabilities": [
      {
        "name": "dev.ucp.shopping.checkout",
        "version": "2026-01-11",
        "spec": "https://ucp.dev/specs/shopping/checkout",
        "schema": "https://ucp.dev/schemas/shopping/checkout.json"
      }
    ]
  }
}
```

### Check Vercel Logs

After making requests, check your deployment logs in the Vercel Dashboard or via CLI:

```bash
vercel logs
```

**Sample log line:**
```json
{
  "timestamp": "2026-02-11T10:30:45.123Z",
  "method": "GET",
  "path": "/.well-known/ucp",
  "status": 200,
  "host": "your-app.vercel.app",
  "proto": "https",
  "ip": "203.0.113.42",
  "userAgent": "curl/7.79.1",
  "accept": "*/*",
  "requestId": "sfo1::abcd-1234-efgh-5678"
}
```

## Environment Variables

### UCP_ENDPOINT_OVERRIDE (Optional)

Override the auto-detected endpoint URL in the UCP manifest. Useful for custom domains or testing.

**Set in Vercel Dashboard:**
1. Go to Project Settings → Environment Variables
2. Add `UCP_ENDPOINT_OVERRIDE` with value like `https://shop.example.com`

**Set in Vercel CLI:**
```bash
vercel env add UCP_ENDPOINT_OVERRIDE
```

**Local development (.env.local):**
```bash
UCP_ENDPOINT_OVERRIDE=https://custom-domain.com
```

## Endpoints

### `GET /.well-known/ucp`
Returns the UCP discovery manifest with dynamic host replacement.

### `GET /api/ping`
Health check endpoint that returns a simple JSON response.

### `GET /`
Landing page with instructions and examples.

## Project Structure

```
ucp-test/
├── app/
│   ├── .well-known/
│   │   └── ucp/
│   │       └── route.ts          # UCP discovery endpoint
│   ├── api/
│   │   └── ping/
│   │       └── route.ts          # Ping endpoint
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page
├── lib/
│   ├── logger.ts                 # Structured logging utility
│   └── manifest.ts               # UCP manifest generation
├── .env.example                  # Environment variable template
├── .gitignore
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## Logging Details

Every request to `/.well-known/ucp` and `/api/ping` generates a structured JSON log line containing:

- `timestamp`: ISO 8601 timestamp
- `method`: HTTP method (GET, POST, etc.)
- `path`: Request path
- `status`: HTTP status code
- `host`: Hostname from headers
- `proto`: Protocol (http/https) from `x-forwarded-proto`
- `ip`: Client IP from `x-forwarded-for` or `x-real-ip`
- `userAgent`: User-Agent header
- `accept`: Accept header
- `requestId`: Request ID from `x-vercel-id`, `x-request-id`, or `cf-ray`

## Troubleshooting

### The `/.well-known/ucp` path returns 404

- Ensure you've deployed the latest code
- Check that the `app/.well-known/ucp/route.ts` file exists
- Verify the build succeeded without errors
- Try a hard refresh or clear CDN cache in Vercel

### Logs aren't appearing in Vercel

- Make sure you're checking the correct deployment
- Function logs may take a few seconds to appear
- Use `vercel logs --follow` to stream logs in real-time

### The endpoint URL is wrong in the manifest

- Check the `x-forwarded-proto` and `host` headers are being sent correctly
- Set `UCP_ENDPOINT_OVERRIDE` environment variable to manually specify the URL

## License

MIT

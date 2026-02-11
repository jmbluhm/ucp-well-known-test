# Jordan's Tomato Store

The website for Jordan's Tomato Store, a family-owned farm specializing in premium, locally-grown tomatoes.

## About

Jordan's Tomato Store has been serving the local community since 2020 with fresh, organic tomatoes grown using sustainable farming practices. This website provides information about our varieties, pricing, and delivery options.

## Tech Stack

- **Framework:** Next.js 15 with React 19
- **Language:** TypeScript
- **Hosting:** Vercel
- **Styling:** Inline styles (keeping it simple)

## Local Development

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

### Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

### Using Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

### Using Vercel Dashboard

1. Push this code to a Git repository
2. Import the repository in [Vercel Dashboard](https://vercel.com/new)
3. Deploy with default settings

## Project Structure

```
jordans-tomato-store/
├── app/
│   ├── .well-known/
│   │   └── ucp/              # Commerce integration endpoint
│   ├── api/
│   │   └── ping/             # Health check endpoint
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── lib/
│   ├── logger.ts             # Logging utility
│   └── manifest.ts           # Commerce manifest
├── .env.example
├── package.json
└── tsconfig.json
```

## Features

- Product catalog with tomato varieties
- Pricing information
- Delivery area details
- Contact information
- Mobile-responsive design

## License

MIT

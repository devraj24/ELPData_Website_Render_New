# ELP Data Website - Render Deployment

This is the ELP Data website migrated from Replit to Render.

## Architecture

- **Frontend**: React with TypeScript and Vite
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL (Neon)
- **Styling**: Tailwind CSS with Radix UI components

## Deployment on Render

### Prerequisites

1. **Database**: Set up a PostgreSQL database on Render or use Neon
2. **Environment Variables**: Configure the following in Render dashboard:
   - `DATABASE_URL`
   - `OPENAI_API_KEY`
   - `SENDGRID_API_KEY`
   - `ANTHROPIC_API_KEY`
   - `NODE_ENV=production`

### Deployment Steps

1. **Connect Repository**: Connect your GitHub repository to Render
2. **Create Web Service**: 
   - Build Command: `npm run render-build`
   - Start Command: `npm start`
   - Environment: Node
3. **Configure Environment Variables**: Add all required environment variables
4. **Deploy**: Trigger the first deployment

### Local Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

### Database Setup

Run database migrations:

```bash
npm run db:push
```

## Domain Configuration

After successful deployment on Render:

1. **Get Render URL**: Note your Render app URL (e.g., `https://your-app.onrender.com`)
2. **Configure GoDaddy DNS**:
   - Log into GoDaddy DNS management
   - Update A record or CNAME to point to Render
   - Follow Render's custom domain documentation

## Features

- Google site verification
- SEO optimized with sitemap and robots.txt
- CORS enabled for external access
- Security headers configured
- SSL/HTTPS redirects
- Custom 404 handling

## Support

For deployment issues, refer to Render's documentation or contact support.


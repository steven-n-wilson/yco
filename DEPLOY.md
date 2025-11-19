# Manual Deployment Guide for Netlify

This guide explains how to manually deploy the YCO website to Netlify using manual deploys (no automatic Git integration).

## Prerequisites

- Netlify CLI installed (✓ already installed on your system)
- Netlify account
- A Netlify site created for this project

## First Time Setup

1. **Login to Netlify** (if not already logged in):
   ```bash
   netlify login
   ```
   This will open your browser to authenticate.

2. **Create or link to your Netlify site**:
   ```bash
   netlify init
   ```
   - Choose "Create & configure a new site" or "Link this directory to an existing site"
   - Follow the prompts to set up your site

## Deployment Steps

### Quick Deploy (Recommended)

Simply run:
```bash
npm run deploy
```

This will:
1. Build the Next.js application
2. Deploy to Netlify production

### Manual Step-by-Step

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Deploy to production**:
   ```bash
   netlify deploy --prod
   ```

3. **For preview/draft deployment** (to test before going live):
   ```bash
   netlify deploy
   ```

## Configuration

- The `netlify.toml` file is configured for Next.js
- Build command: `npm run build`
- Publish directory: `.next` (handled by Next.js plugin)
- Node.js version: 18

## Notes

- Each time you want to update the site, run `npm run deploy` or the manual steps above
- The site will be deployed to your Netlify URL
- Make sure to run `npm install` if you've added new dependencies

## Troubleshooting

- **Build fails**: Make sure all dependencies are installed (`npm install`)
- **Deploy fails**: Check that you're logged in (`netlify status`)
- **Site not updating**: Make sure you're deploying to the correct site (`netlify status` to check)


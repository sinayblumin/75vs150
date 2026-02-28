# מודל יבוא אישי - 75$ לעומת 150$ (Personal Import Model)

This is a Next.js 15+ application that models the economic impact of raising the personal import VAT-exemption threshold in Israel from $75 to $150. Based on public open data, OECD insights, and generalized assumptions, this model visualizes the trade-offs affecting Israeli consumers, government revenue, and local businesses.

## Features

- **Built with Next.js 15+ (App Router)** and TypeScript.
- **Styling with Tailwind CSS** for a responsive, clean Hebrew UI.
- **Charts using Recharts**.
- **Build-time Data Fetching**: Retrieves sample import data from data.gov.il at build time and writes it to `/data/imports_sample.json`.
- **Methodology Page**: Complete transparency and citations on how numbers are derived.

## Prerequisites

- **Node.js 18.18.0 or later** (Required by Next.js 15+)

## Getting Started Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server (Note: The `predev` or `prebuild` scripts will run the data scraper from data.gov.il):
   ```bash
   npm run prebuild # To seed data/imports_sample.json
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

## Vercel Deployment

This project is fully ready for deployment on the Vercel (Hobby) Free Tier.

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and click **"Add New" > "Project"**.
3. Import your GitHub repository.
4. Leave the default settings (Next.js framework preset). **No special environment variables or build commands are required**.
5. Click **"Deploy"**.

**Note on initial deploy:** During the Vercel build step (`npm run build`), the `prebuild` script automatically runs `node scripts/fetch-data.mjs`, pulling the latest subset of data from the Israeli open API (data.gov.il) and generating the sample file. This is standard configuration and Vercel will handle it seamlessly.

## About the Data

- All explicit assumptions (model weights, average basket sizes, tax rules) are documented inside `data/assumptions.json` and `data/tax_rules.json`.
- Historical price level assertions are sourced from the *OECD Economic Survey: Israel 2025* and documented in `data/oecd_context.json`.
- No database is required for this dashboard.

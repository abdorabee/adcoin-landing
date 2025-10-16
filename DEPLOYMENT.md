# 🚀 AdCoin Landing Page - Deployment Guide

## ✅ What's Been Built

Your complete AdCoin landing page is ready! Here's what we've created:

### 🎯 Core Features
- **Hero Section**: Compelling "Watch Ads. Earn AdCoin." headline with waitlist signup
- **Tokenomics Section**: Animated cards showing 50% User Rewards, 25% Advertiser Incentives, 15% Development Fund, 10% Treasury
- **Roadmap Section**: Timeline from Q4 2025 MVP to Q3 2026 Global Expansion
- **Footer**: Social links (Twitter, Discord, GitHub) with branding
- **Responsive Design**: Optimized for all devices
- **Framer Motion Animations**: Smooth, professional animations throughout

### 🛠️ Tech Stack Implemented
- ✅ Next.js 15 with TypeScript
- ✅ Tailwind CSS v4 with custom styling
- ✅ Framer Motion for animations
- ✅ Supabase integration for email collection
- ✅ Modern UI with glass morphism effects
- ✅ Custom favicon and metadata

## 🚀 Quick Start

### 1. Set Up Supabase
1. Go to [supabase.com](https://supabase.com) and create a new project
2. In the SQL Editor, run this query to create the waitlist table:
```sql
CREATE TABLE waitlist (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```
3. Get your project URL and anon key from Settings > API

### 2. Configure Environment Variables
Update `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Run Locally
```bash
cd adcoin-landing
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

## 🌐 Deploy to Vercel (Recommended)

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Option 3: Manual Upload
1. Run `npm run build`
2. Upload the `.next` folder to your hosting provider

## 🎨 Customization

### Update Content
- **Hero**: Edit `src/app/page.tsx`
- **Tokenomics**: Modify `src/components/TokenomicsSection.tsx`
- **Roadmap**: Update `src/components/RoadmapSection.tsx`
- **Footer**: Change social links in `src/components/Footer.tsx`

### Change Colors
Update CSS variables in `src/app/globals.css`:
```css
:root {
  --primary: #8b5cf6;      /* Purple */
  --secondary: #06b6d4;    /* Cyan */
  --accent: #f59e0b;       /* Amber */
}
```

### Add Analytics
Add Google Analytics or other tracking in `src/app/layout.tsx`

## 📱 Features Included

### ✅ Hero Section
- Gradient background with floating animations
- Compelling headline and subheadline
- Waitlist form with Supabase integration
- Feature highlight cards
- Scroll indicator

### ✅ Tokenomics Section
- Animated distribution cards
- Hover effects and transitions
- Polygon network information
- Glass morphism design

### ✅ Roadmap Section
- Timeline with animated milestones
- Feature lists for each quarter
- Responsive design
- Call-to-action section

### ✅ Footer
- Social media links
- Branding and tagline
- Additional information sections
- Responsive layout

## 🔧 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📊 Performance Features

- **Optimized Images**: Next.js Image optimization
- **Code Splitting**: Automatic route-based splitting
- **CSS Optimization**: Tailwind CSS purging
- **Bundle Analysis**: Built-in Next.js analyzer
- **SEO Ready**: Meta tags, Open Graph, Twitter cards

## 🎯 Next Steps

1. **Set up Supabase** and configure environment variables
2. **Test the waitlist form** to ensure emails are being collected
3. **Customize content** to match your brand
4. **Deploy to Vercel** for production
5. **Add analytics** to track user engagement
6. **Set up domain** and SSL certificate

## 🆘 Troubleshooting

### Common Issues
- **Supabase connection**: Check environment variables
- **Build errors**: Run `npm run lint` to check for issues
- **Styling issues**: Ensure Tailwind CSS is properly configured
- **Animation issues**: Check Framer Motion imports

### Support
- Check the README.md for detailed setup instructions
- Review component files for customization options
- Test locally before deploying

---

**🎉 Your AdCoin landing page is ready to launch!**

The landing page is production-ready and includes all the features you requested. Simply configure Supabase, customize the content, and deploy to start collecting emails for your Web3 advertising platform.

# AdCoin Landing Page

A modern, production-ready landing page for AdCoin - a Web3 platform that rewards users with crypto for watching ads.

## 🚀 Features

- **Hero Section** with compelling headline and waitlist signup
- **Tokenomics Section** with animated distribution cards
- **Roadmap Section** with timeline and milestones
- **Responsive Design** optimized for all devices
- **Framer Motion Animations** for smooth user experience
- **Supabase Integration** for email collection
- **Modern UI** with glass morphism and gradient effects

## 🛠️ Tech Stack

- **Next.js 15** with TypeScript
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **Supabase** for backend services
- **Vercel** for deployment

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd adcoin-landing
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Set up Supabase:
   - Create a new Supabase project
   - Create a `waitlist` table with the following columns:
     - `id` (int8, primary key, auto-increment)
     - `email` (text, unique)
     - `created_at` (timestamptz, default: now())

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 🎨 Customization

### Colors
The color scheme is defined in `src/app/globals.css` using CSS custom properties:
- Primary: Purple (`#8b5cf6`)
- Secondary: Cyan (`#06b6d4`)
- Accent: Amber (`#f59e0b`)

### Content
- Update the hero section content in `src/app/page.tsx`
- Modify tokenomics data in `src/components/TokenomicsSection.tsx`
- Edit roadmap milestones in `src/components/RoadmapSection.tsx`
- Update social links in `src/components/Footer.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

```bash
npm run build
npm start
```

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🔧 Development

### Project Structure
```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind config
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── components/
│   ├── Footer.tsx       # Footer component
│   ├── RoadmapSection.tsx # Roadmap timeline
│   ├── TokenomicsSection.tsx # Token distribution
│   └── WaitlistForm.tsx # Email signup form
└── lib/
    └── supabase.ts      # Supabase client configuration
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact the AdCoin team or open an issue on GitHub.

---

**Built with ❤️ for the future of digital advertising**
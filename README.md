#  Quantum Arc Labs - Official Website

<div align="center">
  <img src="frontend/public/images/company-logo-2.png" alt="Quantum Arc Labs Logo" width="200"/>
  
  <p align="center">
    Building the Future of Software
  </p>

  <p align="center">
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#deployment">Deployment</a> •
    <a href="#legal">Legal</a> •
    <a href="#contact">Contact</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
    <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React"/>
    <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript"/>
    <img src="https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css" alt="Tailwind"/>
  </p>
</div>

---

## 📋 About

The official website for Quantum Arc Labs - a cutting-edge software development company specializing in innovative digital solutions. This modern, responsive website showcases our services, portfolio, and provides an easy way for clients to get in touch.

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful gradient designs with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Next.js 14 for optimal speed
- 📧 **Contact Form** - Integrated email system with auto-replies
- 🎯 **SEO Optimized** - Meta tags and structured data for better visibility
- 🌙 **Smooth Animations** - Engaging user experience with CSS animations
- 🔒 **Type Safe** - Built with TypeScript for reliability
- 🎭 **Component Library** - shadcn/ui for consistent design
- ⚖️ **Legal Compliance** - Comprehensive legal documentation included

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** CSS Animations & Transitions

### Backend
- **API Routes:** Next.js API Routes
- **Email Service:** Nodemailer
- **Email Provider:** Gmail SMTP

### Deployment
- **Hosting:** Vercel
- **Domain:** GoDaddy
- **Version Control:** Git & GitHub

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Gmail account for email functionality

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/quantum-arc-labs-website.git
   cd quantum-arc-labs-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

   **How to get Gmail App Password:**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Factor Authentication
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Generate a new app password for "Mail"
   - Copy the 16-character password

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
quantum-arc-labs-website/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── api/
│   │   └── contact/
│   │       └── route.js      # Contact form API
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── privacy-policy/
│   │   └── page.tsx          # Privacy Policy
│   ├── terms-of-service/
│   │   └── page.tsx          # Terms of Service
│   ├── cookie-policy/
│   │   └── page.tsx          # Cookie Policy
│   ├── copyright-policy/
│   │   └── page.tsx          # Copyright Notice
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── ui/                   # shadcn/ui components
│   └── Footer.tsx            # Footer with legal links
├── public/
│   ├── images/               # Static images
│   └── logo.png              # Company logo
├── .env.local                # Environment variables (not in repo)
├── .gitignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── PRIVACY_POLICY.md
├── TERMS_OF_SERVICE.md
├── COPYRIGHT.md
└── COOKIE_POLICY.md
```

## 🎨 Key Pages

### Main Pages
- **Home** (`/`) - Hero section, services overview, CTA
- **About** (`/about`) - Company story, mission, vision, values, team culture
- **Services** (`/services`) - Detailed service offerings
- **Contact** (`/contact`) - Contact form with email integration

### Legal Pages
- **Privacy Policy** (`/privacy`) - GDPR-compliant data protection practices
- **Terms of Service** (`/terms`) - User agreements and service terms
- **Cookie Policy** (`/cookies`) - Transparent cookie usage disclosure
- **Copyright Notice** (`/copyright`) - Intellectual property protection and trademark usage

## 📧 Contact Form Features

- Real-time form validation
- Loading states during submission
- Success/error notifications
- Email sent to company
- Auto-reply confirmation email to user
- Beautiful HTML email templates
- Mobile-responsive form design

## ⚖️ Legal & Compliance

The website includes comprehensive legal documentation:

### Privacy Policy
- GDPR-compliant data protection
- Information collection transparency
- User rights and data management
- Cookie usage disclosure
- Contact information for data requests

### Terms of Service
- User agreements and responsibilities
- Intellectual property rights
- Service usage guidelines
- Liability limitations
- Modification rights

### Cookie Policy
- Detailed cookie usage explanation
- Types of cookies used
- Third-party cookies disclosure
- Cookie management instructions
- Browser-specific settings guide

### Copyright Notice
- **Logo and trademark protection**
- Clear prohibited uses with enforcement
- Permission request process
- DMCA takedown procedures
- International protection coverage
- Violation reporting system

All legal pages feature:
- ✅ Professional design matching brand identity
- ✅ Mobile-responsive layouts
- ✅ Easy footer access on every page
- ✅ Automatic date updates
- ✅ Clear contact information

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard:
     - `EMAIL_USER`
     - `EMAIL_PASS`

3. **Deploy**
   - Vercel will automatically build and deploy
   - Your site will be live in ~2 minutes

### Custom Domain (GoDaddy)

1. Go to Vercel → Project Settings → Domains
2. Add your custom domain
3. Update DNS records in GoDaddy as instructed by Vercel

## 🔧 Configuration

### Email Configuration

Edit `app/api/contact/route.js` to customize:
- Email templates
- Sender/receiver addresses
- Auto-reply content

### Styling

- Tailwind config: `tailwind.config.js`
- Global styles: `app/globals.css`
- Component styles: Inline with Tailwind classes

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and development process.

## 📄 License

**Copyright © 2024 Quantum Arc Labs. All Rights Reserved.**

This is proprietary software. The code in this repository is the exclusive property of Quantum Arc Labs and is protected by United States and international copyright laws.

**This is NOT open source software.** Unauthorized copying, modification, distribution, or use of this code is strictly prohibited and may result in:
- Cease and desist notices
- Legal action for copyright infringement
- Monetary damages and recovery of legal fees

The display of this code is for portfolio and demonstration purposes only and does not grant any license to use, copy, modify, or distribute.

For licensing inquiries or permission requests, contact: **quantumarc.labs@gmail.com**

See [COPYRIGHT.md](COPYRIGHT.md) for complete details on intellectual property protection and trademark usage.

## 👥 Team

**Quantum Arc Labs**
- Website: [quantumarclabs.com](https://quantumarclabs.com)
- Email: quantumarc.labs@gmail.com
- Location: Miami, FL, USA

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide](https://lucide.dev/) - Icon library
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Email us at quantumarc.labs@gmail.com
- Visit our [website](https://quantumarclabs.com)

## 📚 Additional Documentation

- [Privacy Policy](PRIVACY_POLICY.md)
- [Terms of Service](TERMS_OF_SERVICE.md)
- [Cookie Policy](COOKIE_POLICY.md)
- [Copyright Notice](COPYRIGHT.md)
- [Contributing Guidelines](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)

---

<div align="center">
  <p>© 2025 Quantum Arc Labs. All Rights Reserved.</p>
  <p><em>Unauthorized use is strictly prohibited.</em></p>
</div>

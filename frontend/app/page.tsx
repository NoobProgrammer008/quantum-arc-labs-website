// This file defines your main homepage.
// Every Next.js app must have an "app/page.tsx" — it’s the root route (“/”).
// This page brings together all the main sections: Hero, About, Services, Projects, and Contact.
// Import each section component from the components folder.
// These are modular pieces of your page that make the layout cleaner and reusable.
import { Metadata } from 'next';
import Home from "@/components/Home";

export const metadata: Metadata = {
  title: 'Quantum Arc Labs - Building the Future of Software',
  description: 'Leading software development company specializing in web development, mobile apps, and AI solutions. Transform your business with innovative technology.',
  keywords: 'software development, web development, mobile apps, AI solutions, custom software',
  openGraph: {
    title: 'Quantum Arc Labs - Building the Future of Software',
    description: 'Leading software development company specializing in innovative digital solutions',
    url: 'https://quantumarclabs.com',
    siteName: 'Quantum Arc Labs',
    images: ['/images/logo2-white-bg.png'],
    type: 'website',
  },
};

// This is the default function that Next.js will render when a user visits your homepage.
export default function HomePage() {
  return (
    // <main> is the semantic HTML tag that represents the main content of a page.
    // We keep all our sections inside it.
    <main>
      <Home/>
    </main>
  );
}

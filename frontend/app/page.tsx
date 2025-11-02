// This file defines your main homepage.
// Every Next.js app must have an "app/page.tsx" — it’s the root route (“/”).
// This page brings together all the main sections: Hero, About, Services, Projects, and Contact.

// Import each section component from the components folder.
// These are modular pieces of your page that make the layout cleaner and reusable.
import Home from "@/components/Home";
// import Hero from "@/components/Hero";
// import AboutSection from "@/components/AboutSection";
// import Services from "@/components/Services";
// import Projects from "@/components/Projects";
// import ContactForm from "@/components/ContactForm";

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

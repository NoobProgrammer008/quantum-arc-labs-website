// "use client";
// import "./globals.css";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import {
//   Menu,
//   X,
//   Code2,
//   ArrowRight,
//   Linkedin,
//   Twitter,
//   Github,
//   Mail,
//   Phone,
//   MapPin,
//   MailIcon,
// } from "lucide-react";
// import { Button } from "../components/ui/button";

// const navigationItems = [
//   { name: "Home", path: "/" },
//   { name: "Services", path: "/services" },
//   { name: "About", path: "/about" },
//   { name: "Contact", path: "/contact" },
// ];

// export default function Layout({ children }: { children: React.ReactNode }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu and scroll to top when route changes
//   useEffect(() => {
//     // Use a microtask to defer the state update
//     const closeMobileMenu = () => {
//       setMobileMenuOpen(false);
//     };
    
//     closeMobileMenu();
//     window.scrollTo(0, 0);
//   }, [pathname]);

//     const navigationItems = [
//     { name: "Home", path: "/" },
//     { name: "Services", path: "/services" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];
//   return (
//     <html lang="en">
//       <body className="bg-white text-gray-900 antialiased">
//       {/* Navigation or Navbar */}
//       <nav
//         className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//           scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             {/* Logo */}
//             <Link
//              href="/"
//               className={`flex items-center transition-all duration-300 ${
//                 scrolled ? "gap-1 scale-95 opacity-90" : "gap-2 scale-100 opacity-100"
//               }`}
//               >
//               <Image
//                 src="/images/logo2-white-bg.png"// put your image name here (must be in /public folder)
//                 alt="Quantum Arc Labs Logo"
//                 width={45}
//                 height={45}
//                 className="rounded-xl shadow-lg transform group-hover:scale-110 transition-all duration-300" 
//               />
//               <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
//                 Quantum Arc Labs
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center gap-10">
//               {navigationItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.path}
//                   className={`text-sm font-semibold transition-all duration-200 relative group ${
//                     pathname === item.path
//                       ? "text-purple-600"
//                       : scrolled
//                       ? "text-gray-700 hover:text-purple-600"
//                       : "text-white hover:text-purple-300"
//                   }`}
//                 >
//                   {item.name}
//                   <span
//                     className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300 ${
//                       pathname === item.path ? "w-full" : ""
//                     }`}
//                   ></span>
//                 </Link>
//               ))}
//               <Link href="/contact">
//                 <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
//                   Get Started
//                   <ArrowRight className="w-4 h-4 ml-2" />
//                 </Button>
//               </Link>
//             </div>
//             {/* Mobile Menu Button */}
//             <button
//               className={`md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors ${
//                 !scrolled && "hover:bg-white/20"
//               }`}
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? (
//                 <X className={`w-6 h-6 ${scrolled ? "text-gray-700" : "text-white"}`} />
//               ) : (
//                 <Menu className={`w-6 h-6 ${scrolled ? "text-gray-700" : "text-white"}`} />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl">
//             <div className="px-4 py-6 space-y-4">
//               {navigationItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.path}
//                   className={`block text-base font-semibold transition-colors py-2 ${
//                     pathname === item.path ? "text-purple-600" : "text-gray-700"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <Link href="/contact" className="block">
//                 <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg">
//                   Get Started
//                   <ArrowRight className="w-4 h-4 ml-2" />
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Page Content */}
//       <main>{children}</main>

//       {/* Footer */}
//       <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-20">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 18c0-9.94-8.06-18-18-18' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`,
//             }}
//           ></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
//             {/* Company Info */}
//             <div className="col-span-1 md:col-span-2">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
//                   <Code2 className="w-7 h-7 text-white" />
//                 </div>
//                 <span className="text-2xl font-black">Quantum Arc Labs</span>
//               </div>
//               <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
//                 Empowering businesses with cutting-edge software solutions.
//                 Transform your ideas into reality with our expert team of innovators.
//               </p>
//               <div className="flex gap-4">
//                 {[
//                   { icon: Linkedin, link: "#" },
//                   { icon: Twitter, link: "#" },
//                   { icon: Github, link: "#" },
//                   { icon: Mail, link: "#" },
//                 ].map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.link}
//                     className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
//                   >
//                     <social.icon className="w-5 h-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h3 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
//                 <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
//                 Quick Links
//               </h3>
//               <ul className="space-y-3">
//                 {navigationItems.map((item, index) => (
//                   <li key={index}>
//                     <Link
//                       href={item.path}
//                       className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
//                     >
//                       <span className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.7)] group-hover:shadow-[0_0_12px_rgba(236,72,153,0.9)] animate-pulse transition-all duration-300"></span>
//                       <span className="relative inline-block">
//                         {item.name}
//                         <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(236,72,153,0.8)] transition-all duration-500 ease-out"></span>
//                       </span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//                           {/* Contact */}
//               <div>
//                 <h3 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
//                   <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
//                   Contact
//                 </h3>
//                 <ul className="space-y-4 text-gray-300">
//                   <li>
//                     <a href="mailto:quantumarc.labs@gmail.com" className="flex items-center gap-3">
//                       <Mail className="w-5 h-5 text-purple-500" /> quantumarc.labs@gmail.com
//                     </a>
//                   </li>
//                   <li>
//                     <a href="tel:+92-3130255401" className="flex items-center gap-3">
//                       <Phone className="w-5 h-5 text-purple-500" /> +92-3130255401
//                     </a>
//                   </li>
//                   <li className="flex items-center gap-3">
//                     <MapPin className="w-5 h-5 text-purple-500" /> Karachi, PK
//                   </li>
//                 </ul>
//               </div>
//             </div>

//           <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-400 text-sm">
//               © {new Date().getFullYear()} Quantum Arc Labs. All rights reserved.
//             </p>
//             <div className="flex gap-6 text-sm">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 Terms of Service
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//       </body>
//     </html>
//   );
// }
"use client";
import "./globals.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Code2,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on the homepage
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and scroll to top when route changes
  useEffect(() => {
    const closeMobileMenu = () => {
      setMobileMenuOpen(false);
    };
    
    closeMobileMenu();
    window.scrollTo(0, 0);
  }, [pathname]);

  // Determine navbar background and text colors based on page and scroll
  const getNavbarClasses = () => {
    if (scrolled) {
      return "bg-white/95 backdrop-blur-lg shadow-lg";
    }
    if (isHomePage) {
      return "bg-transparent";
    }
    return "bg-white/95 backdrop-blur-lg shadow-lg";
  };

  const getTextColor = () => {
    if (scrolled) {
      return "text-gray-700";
    }
    if (isHomePage) {
      return "text-white";
    }
    return "text-gray-700";
  };

  const navbarClasses = getNavbarClasses();
  const textColor = getTextColor();

  return (
    <html lang="en">
    <body className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarClasses}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              href="/"
              className={`flex items-center transition-all duration-300 ${
                scrolled || !isHomePage ? "gap-1 scale-95 opacity-90" : "gap-2 scale-100 opacity-100"
              }`}
            >
              <Image
                src="/images/logo2-white-bg.png"// put your image name here (must be in /public folder)
                alt="Quantum Arc Labs Logo"
                width={45}
                height={45}
                className="rounded-xl shadow-lg transform group-hover:scale-110 transition-all duration-300" 
              />
              <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
                Quantum Arc Labs
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-semibold transition-all duration-200 relative group ${
                    pathname === item.path
                      ? "text-purple-600"
                      : `${textColor} hover:text-purple-600`
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300 ${
                      pathname === item.path ? "w-full" : ""
                    }`}
                  ></span>
                </Link>
              ))}
              <Link href="/contact">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors ${
                !scrolled && isHomePage && "hover:bg-white/20"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${textColor}`} />
              ) : (
                <Menu className={`w-6 h-6 ${textColor}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block text-base font-semibold transition-colors py-2 ${
                    pathname === item.path ? "text-purple-600" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" className="block">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 18c0-9.94-8.06-18-18-18' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-white via-white to-white rounded-xl flex items-center justify-center shadow-lg">
                        <Image
                        src="/images/company-logo-2.png" // path to your logo
                         alt="Quantum Arc Labs Logo"
                         width={48} // same as w-12
                         height={48} // same as h-12
                         className="object-contain"
                         />
                </div>
                <span className="text-2xl font-black">Quantum Arc Labs</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Empowering businesses with cutting-edge software solutions.
                Transform your ideas into reality with our expert team of innovators.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, link: "#" },
                  { icon: Twitter, link: "#" },
                  { icon: Github, link: "#" },
                  { icon: Mail, link: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.7)] group-hover:shadow-[0_0_12px_rgba(236,72,153,0.9)] animate-pulse transition-all duration-300"></span>
                      <span className="relative inline-block">
                        {item.name}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(236,72,153,0.8)] transition-all duration-500 ease-out"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                Contact
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <a href="mailto:quantumarc.labs@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Mail className="w-5 h-5 text-purple-500" /> quantumarc.labs@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+92-3130255401" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Phone className="w-5 h-5 text-purple-500" /> +92-3130255401
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-500" /> Karachi, PK
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Quantum Arc Labs. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </body>
    </html>
  );
}
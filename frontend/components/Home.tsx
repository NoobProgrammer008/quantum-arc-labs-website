"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  ArrowRight,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Sparkles,
  Code2,
  Smartphone,
  Cloud,
  Rocket,
  Star,
  Globe,
  BrainCircuit,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized performance that keeps your business running at peak efficiency.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security measures to protect your valuable data.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Seasoned professionals dedicated to bringing your vision to life.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description:
        "Built to grow with your business, from startup to enterprise.",
      color: "from-green-400 to-emerald-500",
    },
  ];

  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description:
        "Tailored solutions built specifically for your business needs with cutting-edge technologies.",
      gradient: "from-blue-500 via-blue-600 to-cyan-500",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform apps that users love with stunning interfaces.",
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    },
    {
      icon: BrainCircuit,
      title: "RAG CHATBOTS",
      description:
        "Scalable cloud infrastructure and migration services for modern businesses.",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white">
               Get what you ask!
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="block text-white mb-2">Build The Future</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              With Software
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge software solutions.
            We turn complex challenges into elegant, scalable applications that drive real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-7 text-lg group shadow-2xl shadow-purple-500/50 border-0"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="px-10 py-7 text-lg border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm"
              >
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
           {[
              { value: "New", label: "Startup on the Rise", icon: Rocket },
              { value: "100%", label: "Passion & Dedication", icon: Star },
              { value: "Team", label: "Skilled Developers", icon: Users },
             { value: "24/7", label: "Open for Collaboration", icon: Globe },

            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-3 flex justify-center">
                  <stat.icon className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600">Why Choose Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Quantum Arc Labs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine innovation, expertise, and dedication to deliver
              exceptional results that transform businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white group overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <CardContent className="p-8 relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-white">What We Offer</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions tailored to accelerate your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden group cursor-pointer bg-white/5 backdrop-blur-sm hover:bg-white/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                </div>
                <CardContent className="p-8">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className=" text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  {/* <div className="flex items-center text-purple-400 font-semibold group-hover:translate-y-2 transition-transform duration-300">
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-2xl shadow-purple-500/50"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Rocket className="w-20 h-20 mx-auto mb-8 opacity-90" />
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-2xl mb-12 opacity-90 leading-relaxed">
            Let&apos;s discuss how we can help you achieve your goals with innovative
            software solutions that drive real growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className=" text-white hover:bg-blue px-10 py-7 text-lg font-bold shadow-2xl">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-lg font-bold backdrop-blur-sm"
              >
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

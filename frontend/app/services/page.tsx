//"use client";
import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Code2,
  Smartphone,
  Cloud,
  Database,
  Palette,
  Settings,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Bot,
  Brain,
  Workflow,
  Laptop,
  Laptop2,
} from "lucide-react";


export const metadata: Metadata = {
  title: 'Our Services - Software Development | Quantum Arc Labs',
  description: 'Explore our software development services: custom web applications, mobile apps, AI solutions, and cloud services. Get your free consultation today.',
};

export default function ServicesPage() {
 const services = [
  {
    icon: Brain,
    title: "AI Chatbot Development",
    description:
      "Design and build intelligent chatbots powered by OpenAI and modern NLP models to automate customer support and engagement.",
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Custom-trained AI assistants",
      "Website & WhatsApp chatbot integration",
      "ChatGPT & LangChain powered bots",
      "Lead capture & automation workflows",
    ],
  },
  {
    icon: Workflow,
    title: "n8n Workflow Automation",
    description:
      "Automate repetitive tasks and integrate your favorite tools using n8n - boosting productivity with no-code workflows.",
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "No-code automation setup",
      "CRM, email & database integrations",
      "AI-enhanced workflow triggers",
      "Custom API & webhook connections",
    ],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Build scalable, custom-tailored software solutions designed to optimize operations and fuel business growth.",
    gradient: "from-indigo-500 to-blue-500",
    features: [
      "Full-stack application development",
      "Secure API & backend systems",
      "Cloud deployment & DevOps",
      "Continuous updates & maintenance",
    ],
  },
  {
    icon: Laptop,
    title: "Web Development",
    description:
      "Craft high-performance, responsive websites that blend design and technology for maximum impact.",
    gradient: "from-green-500 to-emerald-500",
    features: [
      "Modern Next.js & React apps",
      "Responsive & SEO-ready design",
      "Fast, secure hosting",
      "CMS & API integration",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Deliver seamless, modern mobile experiences with apps built for both Android and iOS.",
    gradient: "from-orange-500 to-rose-500",
    features: [
      "React Native & hybrid app development",
      "Offline-first architecture",
      "Push notifications & analytics",
      "Play Store & App Store publishing",
    ],
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description:
      "Create a powerful visual identity that reflects your vision, values, and voice across every digital touchpoint.",
    gradient: "from-pink-500 to-red-500",
    features: [
      "Logo & brand identity design",
      "UI/UX for web & mobile",
      "Design systems & prototyping",
      "Marketing visuals & social branding",
    ],
  },
];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We learn about your business, goals, and challenges.",
    },
    {
      number: "02",
      title: "Planning",
      description: "We create a detailed roadmap and technical architecture.",
    },
    {
      number: "03",
      title: "Development",
      description: "Our team builds your solution with agile methodology.",
    },
    {
      number: "04",
      title: "Launch",
      description: "We deploy and provide ongoing support for your success.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">
              Comprehensive Software Services
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Services That Drive
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Digital Success
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end software solutions
            that help your business thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="text-6xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 opacity-20">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lets Build Something Amazing Together
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Ready to start your project? Get in touch and lets discuss how we
            can help you achieve your goals.
          </p>
          <Link href="/contact">
          <Button
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-cyan-600 hover:to-blue-600 
           text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-md 
           hover:shadow-lg transition-all duration-300 flex items-center gap-2"
           >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
            </Button>
            </Link>
        </div>
      </section>
    </div>
  );
}
"use client";
import React from "react";
import Link from "next/link";
//import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description:
        "Your success is our success. We prioritize understanding and exceeding your expectations.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in code quality, design, and project delivery.",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description:
        "We believe in transparent communication and working closely with our clients as true partners.",
    },
  ];
  // --------------------------------
  // WILL ADD THIS LATER
  // --------------------------------
  // const team = [
  //   {
  //     name: "Annas Khan",
  //     role: "Lead Developer",
  //     image: "/team-images/mem1.jpg",
  //   },
  //   {
  //     name: "Maqbool Ahmed",
  //     role: "Lead Developer",
  //     image: "/team-images/mem2.png",
  //   },
  //   {
  //     name: "Rahim Khan",
  //     role: "Head of Sales",
  //     image: "/team-images/mem3.jpg",
  //   },
  //   {
  //     name: "Ismail Bajwa",
  //     role: "MERN Developer",
  //     image: "/team-images/mem4.jpg",
  //   },
  // ];

  const stats = [
      { icon: Users, value: "15+", label: "Team Members" },
      { icon: Award, value: "10+", label: "Local Projects Delivered" },
      { icon: TrendingUp, value: "1", label: "Year in Operation" },
      { icon: Target, value: "100%", label: "Dedication to Quality" },
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
              About Quantum Arc Labs
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            We&apos;re Building The
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Future of Software
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Quantum Arc Labs has been at the forefront of software
            innovation, helping businesses transform their ideas into powerful
            digital solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Quantum Arc Labs began with a simple mission — to bridge the gap between
                  ambitious ideas and powerful digital reality. What started as a small
                  vision among a few curious minds has evolved into a growing tech startup
                  building next-generation software for the modern world.
                  </p>

                  <p>
                    Our team brings together developers, designers, and problem-solvers who
                    believe technology should feel seamless, smart, and scalable. We
                    specialize in crafting digital products that automate workflows, enhance
                    user experiences, and help businesses move faster.
                    </p>

                    <p>
                      As we continue to grow, our focus remains clear — creating solutions that
                      inspire innovation and empower teams to do their best work with the help
                      of intelligent technology.
                      </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg">
                  To empower businesses with innovative software solutions that
                  drive growth, efficiency, and competitive advantage in an
                  increasingly digital world.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg">
                  To be the most trusted software partner for businesses seeking
                  to innovate and transform, recognized for our excellence,
                  integrity, and client success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  {/* // --------------------------------
  // WILL ADD THIS LATER
  // -------------------------------- */}
      {/* Team Section
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented people behind our success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}.
      {/* Join Our Team Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">
              We&apos;re Growing Fast
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Quantum Arc Labs
            </span>{" "}
            Journey
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            We&apos;re a passionate group of innovators, developers, and designers
            shaping the future of digital technology. If you love creating,
            experimenting, and building meaningful solutions — we’d love to hear
            from you.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition-all"
          >
            Let&apos;s Collaborate
          </Link>
        </div>
      </section>
    </div>
  );
}
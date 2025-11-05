//"use client";
import React from "react";
import { Metadata } from "next";
import { Card, CardContent } from "../../components/ui/card";
import { Copyright, AlertTriangle, Shield, Sparkles } from "lucide-react";


export const metadata: Metadata = {
  title: 'Copyright Notice | Quantum Arc Labs',
  description: 'Copyright and trademark information for Quantum Arc Labs. Learn about our intellectual property protection and usage restrictions.',
};

export default function CopyrightNotice() {
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
            <Copyright className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">
              Intellectual Property Protection
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Copyright Notice
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            © 2025 Quantum Arc Labs. All Rights Reserved.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                
                {/* Copyright Protection */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-xl mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8" />
                    <h2 className="text-3xl font-bold m-0">Copyright Protection</h2>
                  </div>
                  <p className="text-xl mb-0">
                    All content, materials, and intellectual property on this website are the exclusive property of Quantum Arc Labs and are protected by United States and international copyright laws.
                  </p>
                </div>

                {/* Protected Materials */}
                <h2 className="text-3xl font-bold mb-4">Protected Materials</h2>
                <p className="text-gray-600 mb-4">The following are protected by copyright and trademark laws:</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">1. Brand Identity</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                  <li><strong>Quantum Arc Labs</strong> name and logo</li>
                  <li>All variations of company logos and branding</li>
                  <li>Company taglines and slogans</li>
                  <li>Brand colors, typography, and design elements</li>
                  <li>Visual identity and brand guidelines</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-8">2. Website Content</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                  <li>All text, copy, and written content</li>
                  <li>Images, photographs, and graphics</li>
                  <li>Videos, animations, and multimedia</li>
                  <li>Website design and layout</li>
                  <li>User interface and user experience design</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-8">3. Code and Software</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                  <li>Source code and compiled code</li>
                  <li>Software architecture and design</li>
                  <li>Algorithms and methodologies</li>
                  <li>API documentation and specifications</li>
                </ul>

                {/* Prohibited Uses */}
                <h2 className="text-3xl font-bold mb-4 mt-12">Prohibited Uses</h2>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-red-900 m-0">Strictly Forbidden:</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>❌ <strong>Copying or reproducing</strong> any logos, trademarks, or branding materials</li>
                    <li>❌ <strong>Using the Quantum Arc Labs name or logo</strong> without written permission</li>
                    <li>❌ <strong>Creating derivative works</strong> based on our designs or content</li>
                    <li>❌ <strong>Distributing or selling</strong> any materials from this website</li>
                    <li>❌ <strong>Modifying or altering</strong> our logos or branding in any way</li>
                    <li>❌ <strong>Claiming ownership</strong> of our intellectual property</li>
                    <li>❌ <strong>Using our content</strong> for commercial purposes</li>
                    <li>❌ <strong>Scraping or harvesting</strong> data from our website</li>
                    <li>❌ <strong>Reverse engineering</strong> our software or code</li>
                    <li>❌ <strong>Removing copyright notices</strong> or attributions</li>
                  </ul>
                </div>

                {/* Permitted Uses */}
                <h2 className="text-3xl font-bold mb-4 mt-12">Permitted Uses</h2>
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-green-900 mb-4">Allowed with Restrictions:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ <strong>Linking to our website</strong> with proper attribution</li>
                    <li>✅ <strong>Brief quotations</strong> for commentary or criticism (with attribution)</li>
                    <li>✅ <strong>Academic or educational use</strong> (limited, with permission)</li>
                    <li>✅ <strong>Personal, non-commercial viewing</strong> of website content</li>
                  </ul>
                </div>

                {/* Trademark Usage */}
                <h2 className="text-3xl font-bold mb-4 mt-12">Trademark Usage - Logo Protection</h2>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
                  <p className="text-gray-700 mb-4 font-medium text-lg">
                    The Quantum Arc Labs name, logo, and all related marks are registered trademarks. Any use requires explicit written permission.
                  </p>
                  
                  <h4 className="font-bold text-gray-900 mb-3">To request permission:</h4>
                  <ol className="list-decimal pl-6 text-gray-600 space-y-2 mb-6">
                    <li>Send a formal request to: <strong>quantumarc.labs@gmail.com</strong></li>
                    <li>Include:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Intended use and purpose</li>
                        <li>Duration of use</li>
                        <li>Where and how it will be displayed</li>
                        <li>Target audience and reach</li>
                      </ul>
                    </li>
                    <li>Wait for written approval before any use</li>
                  </ol>

                  <div className="bg-red-100 border border-red-300 rounded p-4">
                    <p className="text-red-900 font-semibold mb-2">Unauthorized use will result in:</p>
                    <ul className="list-disc pl-6 text-red-800 space-y-1">
                      <li>Cease and desist notices</li>
                      <li>Legal action for trademark infringement</li>
                      <li>Monetary damages and recovery of legal fees</li>
                    </ul>
                  </div>
                </div>

                {/* Enforcement */}
                <h2 className="text-3xl font-bold mb-4 mt-12">Enforcement</h2>
                <p className="text-gray-600 mb-4">
                  Quantum Arc Labs actively monitors and enforces its intellectual property rights.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg mb-8">
                  <p className="text-gray-700 font-medium mb-3">Violations will be pursued through:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Cease and desist letters</li>
                    <li>DMCA takedown notices</li>
                    <li>Civil litigation</li>
                    <li>Criminal prosecution (where applicable)</li>
                    <li>Recovery of damages and legal fees</li>
                  </ul>
                </div>

                {/* Reporting Violations */}
                <h2 className="text-3xl font-bold mb-4 mt-12">Reporting Violations</h2>
                <p className="text-gray-600 mb-4">
                  If you discover unauthorized use of Quantum Arc Labs intellectual property:
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
                  <p className="font-semibold text-gray-900 mb-2">Report to: quantumarc.labs@gmail.com</p>
                  <p className="text-gray-600 mb-2">Subject: &quot;Copyright Violation Report&quot;</p>
                  <p className="text-gray-600 mb-2">Include:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>URL or location of violation</li>
                    <li>Description of unauthorized use</li>
                    <li>Screenshots or evidence</li>
                    <li>Your contact information</li>
                  </ul>
                </div>

                {/* Contact */}
                <h2 className="text-3xl font-bold mb-4 mt-12">Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  For permission requests, licensing inquiries, or questions:
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
                  <p className="font-semibold text-gray-900 mb-2">Quantum Arc Labs</p>
                  <p className="text-gray-600">Email: quantumarc.labs@gmail.com</p>
                  <p className="text-gray-600">Address: 12955 BISCAYNE BLVD STE 200, PMB 531, MIAMI, FL 33181, USA</p>
                  <p className="text-gray-600">Website: https://quantumarclabs.com</p>
                </div>

                {/* Legal Warning */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">⚖️ Legal Notice</h3>
                  <p className="text-lg">
                    THIS NOTICE SERVES AS FORMAL LEGAL NOTIFICATION OF QUANTUM ARC LABS&apos; INTELLECTUAL PROPERTY RIGHTS. VIOLATION OF THESE RIGHTS MAY RESULT IN CIVIL AND CRIMINAL PENALTIES UNDER FEDERAL AND STATE LAW.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
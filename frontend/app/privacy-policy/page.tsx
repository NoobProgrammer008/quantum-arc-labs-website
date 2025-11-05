"use client";
import React from "react";
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Quantum Arc Labs. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our website 
                and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We may collect, use, store and transfer different kinds of personal data about you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Identity Data:</strong> Name, username or similar identifier</li>
                <li><strong>Contact Data:</strong> Email address, telephone numbers, and physical address</li>
                <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform</li>
                <li><strong>Usage Data:</strong> Information about how you use our website and services</li>
                <li><strong>Marketing Data:</strong> Your preferences in receiving marketing from us and your communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We use your personal data for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our services</li>
                <li>To monitor the usage of our services</li>
                <li>To detect, prevent and address technical issues</li>
                <li>To send you marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We have implemented appropriate security measures to prevent your personal data from being accidentally lost, 
                used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, 
                contractors, and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
                including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Legal Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links 
                or enabling those connections may allow third parties to collect or share data about you. We do not control 
                these third-party websites and are not responsible for their privacy statements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> quantumarc.labs@gmail.com</p>

              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
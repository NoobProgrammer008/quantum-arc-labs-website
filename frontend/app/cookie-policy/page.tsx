//"use client";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Cookie Policy | Quantum Arc Labs',
  description: 'Learn how Quantum Arc Labs uses cookies to improve your browsing experience and website performance.',
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide information to the owners of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Quantum Arc Labs uses cookies to improve your experience on our website and to help us understand how 
                visitors use our site. We use cookies for various purposes explained in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic functions like 
                    page navigation and access to secure areas of the website. The website cannot function properly 
                    without these cookies.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting and reporting 
                    information anonymously. This helps us improve the way our website works, for example, by ensuring 
                    that users are finding what they are looking for easily.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Functionality Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies allow the website to remember choices you make (such as your language or region) and 
                    provide enhanced, more personal features. They may also be used to provide services you have asked 
                    for such as watching a video or commenting on a blog.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the 
                    performance of our site. They help us to know which pages are the most and least popular and see 
                    how visitors move around the site.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                In some cases, we may use cookies provided by trusted third parties. Our site may use the following 
                third-party cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Google Analytics:</strong> We use Google Analytics to help us understand how you use the site and ways that we can improve your experience</li>
                <li><strong>Social Media Plugins:</strong> Our site may include social media features, such as sharing buttons. These features may collect your IP address and set a cookie to enable the feature to function properly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your 
                computer and you can set most browsers to prevent them from being placed. However, if you do this, you 
                may have to manually adjust some preferences every time you visit a site and some services and 
                functionalities may not work.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                To manage cookies in your browser:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookie Duration</h2>
              <p className="text-gray-700 leading-relaxed">
                Some cookies are deleted when you close your browser (session cookies), while others remain on your 
                device until they expire or you delete them (persistent cookies). The duration of cookies depends on 
                their purpose:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain for a predetermined period (ranging from minutes to years)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Consent</h2>
              <p className="text-gray-700 leading-relaxed">
                By using our website, you consent to our use of cookies in accordance with this Cookie Policy. If you 
                do not agree to our use of cookies, you should change your browser settings accordingly or not use our 
                website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, our 
                business operations, or for other reasons. We will notify you of any material changes by posting the new 
                Cookie Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. More Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                For more information about cookies and how to manage them, visit:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">www.allaboutcookies.org</a></li>
                <li><a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">www.aboutcookies.org</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about our use of cookies, please contact us:
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
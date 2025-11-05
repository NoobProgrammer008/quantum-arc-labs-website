export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Quantum Arc Labs",
    "url": "https://quantumarclabs.com",
    "logo": "https://quantumarclabs.com/images/company-logo-2.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "quantumarc.labs@gmail.com",
      "contactType": "Customer Service"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12955 BISCAYNE BLVD STE 200, PMB 531",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "postalCode": "33181",
      "addressCountry": "US"
    }
    // No sameAs field - it's optional
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
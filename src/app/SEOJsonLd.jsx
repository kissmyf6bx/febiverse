// components/SEOJsonLd.jsx
import React from 'react';

export default function SEOJsonLd() {
  const SITE = 'https://febiverse.tech';
  const PERSON_ID = `${SITE}#person`;
  const ORG_ID = `${SITE}#organization`;
  const WEBSITE_ID = `${SITE}#website`;

  const HEADSHOT = `${SITE}/images/febin-sebastian.jpg`; // square ≥1200px, /public/images/
  const LOGO = `${SITE}/icons/logo-512.png`;             // /public/icons/

  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE,
      name: 'Febiverse',
      inLanguage: 'en',
      publisher: { '@id': ORG_ID },
      creator: { '@id': PERSON_ID },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Febiverse',
      url: SITE,
      logo: {
        '@type': 'ImageObject',
        url: LOGO,
        width: 512,
        height: 512,
      },
      brand: 'Febiverse',
      founder: { '@id': PERSON_ID },
      sameAs: [
        'https://www.instagram.com/febiverse',
        'https://www.linkedin.com/in/febin-sebastian-3a589a337/',
        'https://github.com/Febinseb',
        'https://youtube.com/@febinnnnn_n',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Febin Sebastian',
      alternateName: ['Febin', 'Febin S', 'Febin Febiverse', 'Febiverse Febin'],
      url: SITE,
      image: {
        '@type': 'ImageObject',
        url: HEADSHOT,
        width: 1200,
        height: 1200,
      },
      description:
        'Video Editor, Frontend Developer, and Musician. Creator of Febiverse.',
      jobTitle: ['Video Editor', 'Frontend Developer', 'Musician'],
      email: 'mailto:febiverse@gmail.com',
      worksFor: { '@id': ORG_ID },
      mainEntityOfPage: SITE,
      knowsAbout: [
        'Video Editing',
        'Frontend Development',
        'React',
        'Next.js',
        'Tailwind CSS',
        'Music Production',
      ],
      sameAs: [
        'https://www.instagram.com/febiverse',
        'https://www.linkedin.com/in/febin-sebastian-3a589a337/',
        'https://github.com/Febinseb',
        'https://youtube.com/@febinnnnn_n',
      ],
      nationality: 'IN',
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
}

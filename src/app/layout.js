// app/layout.js
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOJsonLd from '@/components/SEOJsonLd';

const SITE = 'https://febiverse.tech';
const SITE_NAME = 'Febiverse';
const AUTHOR = 'Febin Sebastian';

export const metadata = {
  metadataBase: new URL(SITE),
  title: { default: `${SITE_NAME} — ${AUTHOR}`, template: `%s | ${SITE_NAME}` },
  description:
    'Febin Sebastian - Video Editor, Frontend Developer, and Musician. Creator of Febiverse - a universe of creativity, visuals, and technology.',
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  openGraph: {
    type: 'website',
    url: SITE,
    title: `${SITE_NAME} — ${AUTHOR}`,
    description:
      'Febin Sebastian is a video editor, web developer, and musician - creator of Febiverse, where creativity meets technology.',
    siteName: SITE_NAME,
    images: [{ url: `${SITE}/images/febin-sebastian.jpg`, width: 1200, height: 1200, alt: 'Febin Sebastian portrait' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — ${AUTHOR}`,
    description:
      'Teenage creator, video editor, developer, and musician. Explore Febiverse - a universe of creativity, visuals, and code.',
    images: [`${SITE}/images/febin-sebastian.jpg`],
    creator: '@febiverse',
  },
  alternates: { canonical: SITE },
  verification: { google: 'vSVkTE7zazlAYnMct99F17dlaeyo1WFdJKY4egIT41Y' },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
};

// app/layout.js (only the RootLayout changed)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {/* JSON-LD Schema */}
        <SEOJsonLd />

        {/* Site chrome + page content */}
        <Header />
        {children}
        <Footer />

        {/* 🔥 GLOBAL GLOWS — force on top of all page layers */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none fixed inset-0
            z-[60]  /* higher than any page overlay (your home uses z-[1]) */
            mix-blend-screen
          "
        >
          {/* left glow */}
          <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-cyan-500/25 blur-3xl" />
          {/* right glow */}
          <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-blue-500/25 blur-3xl" />
        </div>
      </body>
    </html>
  );
}
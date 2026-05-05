// app/colaborate/page.js
'use client';

import { useForm } from '@formspree/react';
import Link from 'next/link';
import { TiTick } from 'react-icons/ti';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

const SITE = 'https://febiverse.tech';

const CollaboratePage = () => {
  const [state, handleSubmit] = useForm('xwpnbwbe');

  if (state.succeeded) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 text-center pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: 'Home', item: `${SITE}/` },
            { name: 'Collaborate', item: `${SITE}/colaborate` },
          ]}
        />

        <TiTick className="text-green-400 w-24 h-24 mb-6 animate-bounce" />
        <p className="text-3xl font-bold mb-4">Message Sent!</p>
        <p className="text-lg text-gray-400 mb-8">
          Thanks for reaching out! We&apos;ll be in touch soon.
        </p>
        <Link
          href="/"
          className="px-6 py-3 border-2 border-white text-white font-bold text-lg hover:bg-green-400 hover:text-black transition-colors duration-300 rounded-md"
        >
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center pt-20">
      {/* Breadcrumbs (normal state) */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', item: `${SITE}/` },
          { name: 'Collaborate', item: `${SITE}/colaborate` },
        ]}
      />

      <div className="w-full max-w-lg p-8 rounded-lg">
        <h1 className="text-6xl font-extrabold mb-12 text-center">
          <span className="text-white">Let&apos;s</span>{' '}
          <span className="text-green-400">Collaborate</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full p-4 bg-gray-900 bg-opacity-70 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:border-green-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-4 bg-gray-900 bg-opacity-70 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:border-green-400"
          />

          <textarea
            name="details"
            placeholder="Tell me about your project or idea..."
            rows="5"
            required
            className="w-full p-4 bg-gray-900 bg-opacity-70 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:border-green-400"
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-4 bg-green-400 text-black font-bold text-lg rounded-md hover:bg-green-500 transition-colors duration-200 disabled:opacity-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default CollaboratePage;

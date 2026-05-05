// app/collaborate/page.js  (server file)
import CollaborateClient from './CollaborateClient';

export const metadata = {
  title: 'Collaborate — Febiverse',
  description: 'Collaboration inquiries with Febin Sebastian.',
  alternates: { canonical: 'https://febiverse.tech/collaborate' },
  openGraph: { url: 'https://febiverse.tech/collaborate' },
};

export default function CollaboratePage() {
  return <CollaborateClient />;
}

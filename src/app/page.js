// app/page.js
'use client';

import { useState, useEffect, useRef } from 'react';
import HeroContent from '@/components/HeroContent';
import Loader from '@/components/Loader';
import SEOJsonLd from '@/components/SEOJsonLd';

export default function HomePage() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Reaffirm flags at runtime for Safari/WebKit quirks
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    try {
      v.muted = true;
      v.playsInline = true;
      v.removeAttribute('controls'); // belt & suspenders
      // Try to play; ignore if blocked (e.g., Low Power Mode)
      const p = v.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch {}
  }, []);

  // One-time tap fallback for iOS Low Power Mode / data saver
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => v.play().catch(() => {});
    window.addEventListener('touchstart', tryPlay, { once: true, passive: true });
    return () => window.removeEventListener('touchstart', tryPlay);
  }, []);

  return (
    <>
      <SEOJsonLd />

      {!videoLoaded && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black z-50">
          <Loader />
        </div>
      )}

      <main
        className={`relative h-screen w-full overflow-hidden transition-opacity duration-500 ${
          videoLoaded ? 'opacity-100' : 'opacity-50'
        }`}
      >
        <div className="absolute inset-0 z-[-1]">
          <video
            ref={videoRef}
            className="bg-video absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            // Autoplay essentials
            autoPlay
            muted
            loop
            playsInline
            // Legacy WebKit hint (must be a literal attribute)
            // @ts-ignore
            webkit-playsinline="true"
            x-webkit-airplay="deny"
            // Keep browser UI off (Safari PiP/AirPlay/etc.)
            controls={false}
            controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
            disablePictureInPicture
            // Smooth load & graceful fallback
            preload="auto"
            poster="/og/febiverse-og.jpg" // ensure this exists
            aria-hidden="true"
            tabIndex={-1}
            onCanPlayThrough={() => setVideoLoaded(true)}
            onError={(e) => {
              console.error('video error', e);
              setVideoLoaded(true);
            }}
          >
            {/* Prefer local MP4 in /public/videos/ for best Safari behavior */}
            {/* <source src="/videos/hero-video.mp4" type="video/mp4" /> */}
            <source
              src="https://github.com/Febinseb/febiverse-hero-video/releases/download/bg-video-crysta/Comp.1.mp4"
              type="video/mp4"
            />
            <source src="/videos/hero-video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Contrast overlay above video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-[1]" />

        <HeroContent />
      </main>
    </>
  );
}

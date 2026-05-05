'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const ProjectCard = ({ type, src, altText, description, href, posterSrc }) => {
  const isVideo = type === 'video';
  const isImage = type === 'image';

  const [playVideo, setPlayVideo] = useState(false);

  // Extract Vimeo ID safely
  const getVimeoId = (url) => {
    const match = url.match(/video\/(\d+)/);
    return match ? match[1] : null;
  };

  const vimeoId = getVimeoId(src);

  const vimeoEmbedSrc = isVideo
    ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1`
    : '';

  return (
    <Link href={href}>
      <div className="bg-gray-900 bg-opacity-70 p-4 rounded-lg shadow-xl hover:shadow-2xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">

        {/* IMAGE PROJECT */}
        {isImage && (
          <div className="w-full h-48 relative overflow-hidden rounded-md mb-4">
            <Image
              src={src}
              alt={altText}
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}

        {/* VIDEO PROJECT */}
        {isVideo && (
          <div className="w-full h-48 relative overflow-hidden rounded-md mb-4">

            {!playVideo && (
              <div
  className="relative w-full h-full cursor-pointer group"
  onClick={(e) => {
    e.preventDefault();
    setPlayVideo(true);
  }}
>
  <Image
    src={posterSrc}
    alt={altText}
    fill
    className="object-cover rounded-md"
  />

  <div className="absolute inset-0 flex items-center justify-center">
    <div className="backdrop-blur-md bg-white/20 px-4 py-2 rounded-full text-white text-sm opacity-0 group-hover:opacity-100 transition">
      Play
    </div>
  </div>
</div>
            )}

            {/* VIDEO PLAYER */}
            {playVideo && (
              <iframe
                src={vimeoEmbedSrc}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-md"
              ></iframe>
            )}

          </div>
        )}

        <div className="text-center">
          <p className="text-sm text-gray-300">{description}</p>
        </div>

      </div>
    </Link>
  );
};

export default ProjectCard;
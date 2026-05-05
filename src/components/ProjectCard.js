'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ type, src, altText, description, href, posterSrc }) => {
  const isVideo = type === 'video';
  const isImage = type === 'image';

  const vimeoEmbedSrc = isVideo ? `https://player.vimeo.com/video/${src.split('/').pop()}` : '';

  return (
    <Link href={href}>
      <div className="bg-gray-900 bg-opacity-70 p-4 rounded-lg shadow-xl hover:shadow-2xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
        {isImage && (
          <div className="w-full h-48 relative overflow-hidden rounded-md mb-4">
            <Image src={src} alt={altText} layout="fill" objectFit="cover" className="rounded-md" />
          </div>
        )}

        {isVideo && (
          <div className="w-full h-48 relative overflow-hidden rounded-md mb-4">
            <iframe
              src={vimeoEmbedSrc}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={altText}
              className="w-full h-full object-cover rounded-md"
            ></iframe>
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
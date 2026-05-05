import ProjectCard from '@/components/ProjectCard';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

const projects = [
  {
    id: 1,
    type: 'video',
    src: 'https://player.vimeo.com/video/1189490778?h=7d83c0bf13', 
    altText: 'Video Editing Project 1',
    description: 'Professional color grading and masking',
    href: '#',
    posterSrc: '/thumbnails/neha.jpg'
  },
  {
    id: 2,
    type: 'image',
    src: '/images/website-project-1.png',
    altText: 'Website Development Project 1',
    description: 'A church website built with HTML and CSS.',
    href: 'https://velankanniparish-mysore.netlify.app'
  },
  {
    id: 3,
    type: 'image',
    src: '/images/game-project-1.png',
    altText: 'Game Development Project 1',
    description: 'A simple game built using HTML, CSS and Javascript.',
    href: 'https://catch-the-id.netlify.app'
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 pt-20">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', item: 'https://febiverse.tech/' },
          { name: 'About', item: 'https://febiverse.tech/about' },
        ]}
      />
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-6xl font-extrabold mb-12 text-center">
          <span className="text-white">My</span>{' '}
          <span className="text-green-400">Projects</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              type={project.type}
              src={project.src}
              altText={project.altText}
              description={project.description}
              href={project.href}
              posterSrc={project.posterSrc}
            />
          ))}
        </div>
      </div>
    </main>
  );
}


<iframe title="vimeo-player" src="c" width="640" height="360" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowfullscreen></iframe>
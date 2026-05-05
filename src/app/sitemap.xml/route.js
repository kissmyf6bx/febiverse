// app/sitemap/route.js
export async function GET() {
  const base = 'https://febiverse.tech';

  // List all public routes (match your folder names)
  const pages = ['', 'about', 'projects', 'services', 'colaborate', 'order'];

  // Album images you want Google to discover (absolute URLs recommended)
  const albumImages = [
    `${base}/images/album-1.jpg`,
    `${base}/images/album-2.jpg`,
    `${base}/images/album-3.jpg`,
    `${base}/images/album-4.jpg`,
  ];

  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
${pages
  .map((p) => {
    const isHome = p === '';
    const loc = `${base}${isHome ? '' : `/${p}`}`;
    const imagesBlock =
      p === 'about'
        ? albumImages
            .map(
              (img, i) => `  <image:image>
    <image:loc>${img}</image:loc>
    <image:title>Febin Sebastian — album ${i + 1}</image:title>
    <image:caption>Photo ${i + 1} from Febin Sebastian’s album</image:caption>
  </image:image>`
            )
            .join('\n')
        : '';

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${isHome ? 'weekly' : 'monthly'}</changefreq>
    <priority>${isHome ? '1.0' : '0.8'}</priority>
${imagesBlock ? imagesBlock : ''}  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

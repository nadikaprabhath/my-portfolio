import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nadika Prabhath - Full Stack Developer',
    short_name: 'Nadika Prabhath',
    description: 'Professional Full Stack Developer | Software Engineer | Web Developer',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#58A6FF',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'public/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'public/png',
      },
    ],
  }
}
import musics from "../../../public/musics.json";

// Optimisation : Mise en cache des métadonnées
const metadataCache = new Map();

export async function generateMetadata({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const { slug } = resolvedParams;

  // Vérifier le cache d'abord
  if (metadataCache.has(slug)) {
    return metadataCache.get(slug);
  }

  const music = musics.find((m) => m.slug === slug);

  if (!music) {
    const notFoundMetadata = Object.assign(
      {},
      {
        title: "Musique non trouvée - Cartel del Ritmo",
      }
    );
    metadataCache.set(slug, notFoundMetadata);
    return notFoundMetadata;
  }

  const metadata = Object.assign(
    {},
    {
      title: `${music.title} - ${music.artist} | Cartel del Ritmo`,
      description: `Écoute "${music.title}" par ${music.artist} sur Cartel del Ritmo - Le son de Nuevo Mexico`,
      openGraph: {
        title: `${music.title} - ${music.artist}`,
        description: "Disponible sur Cartel del Ritmo - Nuevo Mexico",
        type: "music.song",
        audio: music.audioUrl,
        music: {
          duration: 180, // Durée en secondes, à ajuster selon votre musique
          musician: music.artist,
        },
        images: [
          {
            url: music.coverUrl,
            width: 1200,
            height: 630,
            alt: `Couverture de ${music.title} par ${music.artist}`,
          },
        ],
      },
      twitter: {
        card: "player",
        title: `${music.title} - ${music.artist}`,
        description: "Disponible sur Cartel del Ritmo - Nuevo Mexico",
        audio: music.audioUrl,
        image: music.coverUrl,
      },
    }
  );

  metadataCache.set(slug, metadata);
  return metadata;
}

export default function MusicLayout({ children }) {
  return children;
}

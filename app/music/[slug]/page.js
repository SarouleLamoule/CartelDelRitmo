import { notFound } from "next/navigation";
import musics from "../../../public/musics.json";
import MusicPageClient from "./page.client";

// Optimisation : Mise en cache des résultats de recherche
const musicCache = new Map();

async function getMusicData(params) {
  const resolvedParams = await Promise.resolve(params);
  const { slug } = resolvedParams;

  // Vérifier le cache d'abord
  if (musicCache.has(slug)) {
    return musicCache.get(slug);
  }

  const music = musics.find((m) => m.slug === slug);

  if (music) {
    // Utiliser Object.assign au lieu de util._extend
    const musicData = Object.assign({}, music);
    musicCache.set(slug, musicData);
    return musicData;
  }

  return null;
}

export default async function MusicPage({ params }) {
  const music = await getMusicData(params);

  if (!music) {
    notFound();
  }

  return <MusicPageClient music={music} />;
}

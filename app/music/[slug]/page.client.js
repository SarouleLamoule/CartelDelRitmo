"use client";

import Image from "next/image";
import AudioPlayer from "../../components/music/AudioPlayer";

export default function MusicPageClient({ music }) {
  const { title, artist, coverUrl, audioUrl, date } = music;

  return (
    <div className="music-page">
      <div className="music-header">
        <div className="music-cover">
          <Image
            src={coverUrl}
            alt={`${title} - ${artist}`}
            width={400}
            height={400}
            className="cover-image"
          />
        </div>

        <div className="music-info">
          <h1>{title}</h1>
          <h2>{artist}</h2>
          <p className="release-date">
            Sortie le {new Date(date).toLocaleDateString("fr-FR")}
          </p>
        </div>
      </div>

      <div className="music-player-container">
        <AudioPlayer audioUrl={audioUrl} />
      </div>
    </div>
  );
}

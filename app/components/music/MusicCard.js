import Image from "next/image";
import Link from "next/link";

export default function MusicCard({ music }) {
  const { title, artist, coverUrl, slug, date } = music;

  return (
    <Link href={`/music/${slug}`} className="music-card">
      <div className="music-card-cover">
        <Image
          src={coverUrl}
          alt={`${title} - ${artist}`}
          width={300}
          height={300}
          className="cover-image"
        />
      </div>
      <div className="music-card-content">
        <h2 className="music-card-title">{title}</h2>
        <p className="music-card-artist">{artist}</p>
        <p className="music-card-date">
          {new Date(date).toLocaleDateString("fr-FR")}
        </p>
      </div>
    </Link>
  );
}

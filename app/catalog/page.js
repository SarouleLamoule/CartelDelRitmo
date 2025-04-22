import musics from "../../public/musics.json";
import MusicCard from "../components/music/MusicCard";

export default function Catalog() {
  return (
    <div className="catalog">
      <div className="catalog-header">
        <h1>Catalogue Musical</h1>
        <p>Découvrez toutes les productions du Cartel del Ritmo</p>
      </div>

      <div className="catalog-grid">
        {musics.map((music) => (
          <MusicCard key={music.slug} music={music} />
        ))}
      </div>
    </div>
  );
}

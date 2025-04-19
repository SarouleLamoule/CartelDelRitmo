import Link from "next/link";
import Button from "./components/ui/Button";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Cartel del Ritmo</h1>
          <p className="hero-tagline">
            La calle a du talent. <br />
            Cartel del Ritmo produit le son de Nuevo Mexico.
          </p>
          <Link href="/catalog">
            <Button variant="accent">Découvrir nos sons</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <Link href="/" className="logo">
          <Image
            src="/images/logo.png"
            alt="Cartel del Ritmo"
            width={150}
            height={150}
            priority
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/catalog">Catalogue</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

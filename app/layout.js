import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import "./styles/globals.css";

export const metadata = {
  title: "Cartel del Ritmo",
  description: "Le son de Nuevo Mexico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

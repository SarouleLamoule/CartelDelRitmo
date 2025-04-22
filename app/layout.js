import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import "./styles/globals.css";

export const metadata = {
  title: "Cartel del Ritmo",
  description: "Le son de Nuevo Mexico",
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
      </head>
      <body>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

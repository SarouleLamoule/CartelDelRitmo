export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Cartel del Ritmo - Nuevo Mexico</p>
        <div className="social-links">
          <a
            href="https://discord.gg/5GCJjHbcSH"
            target="_blank"
            rel="noopener noreferrer"
            className="discord-link"
          >
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}

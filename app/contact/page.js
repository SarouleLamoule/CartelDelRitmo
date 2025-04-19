import Button from "../components/ui/Button";

export const metadata = {
  title: "Contact - Cartel del Ritmo",
  description:
    "Rejoins le Cartel del Ritmo sur Discord et viens enregistrer ta musique dans nos studios.",
};

const StudioIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 14.5V16.5M7 3V5M17 3V5M7 11H17M7 15H17M5 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9C3 7.89543 3.89543 7 5 7Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProductionIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 17V7M15 7V17M12 3V21M21 12H3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PromotionIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.0489 2.92705C11.3483 2.00574 12.6517 2.00574 12.9511 2.92705L14.9187 9.02786C15.0526 9.43989 15.4365 9.71885 15.8697 9.71885H22.2371C23.2058 9.71885 23.6086 10.9519 22.8249 11.5278L17.6736 15.2764C17.3231 15.5361 17.1764 15.9913 17.3103 16.4033L19.2779 22.5041C19.5773 23.4254 18.5228 24.1981 17.7391 23.6222L12.5878 19.8736C12.2373 19.6139 11.7627 19.6139 11.4122 19.8736L6.2609 23.6222C5.47719 24.1981 4.42271 23.4254 4.72206 22.5041L6.68969 16.4033C6.82356 15.9913 6.67685 15.5361 6.32642 15.2764L1.17511 11.5278C0.391392 10.9519 0.794168 9.71885 1.76289 9.71885H8.13026C8.56349 9.71885 8.94744 9.43989 9.08132 9.02786L11.0489 2.92705Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1>Rejoins le Cartel</h1>

        <div className="contact-message">
          <p className="message-primary">
            La musique coule dans tes veines ? Tu as le rythme de la calle dans
            la peau ? <br />
            Le Cartel del Ritmo t'ouvre ses portes.
          </p>

          <div className="contact-cta">
            <p className="cta-text">
              Prêt à faire partie de la familia ?<br />
              Rejoins-nous sur Discord et commence ton voyage dès maintenant.
            </p>

            <a
              href="https://discord.gg/5GCJjHbcSH"
              target="_blank"
              rel="noopener noreferrer"
              className="discord-button"
            >
              <Button variant="accent">Rejoindre le Discord du Cartel</Button>
            </a>
          </div>
        </div>

        <div className="contact-footer">
          <p>
            « De la rue aux studios, du studio aux ondes. Le Cartel del Ritmo
            fait résonner la voix de Nuevo Mexico. »
          </p>
        </div>
      </div>
    </div>
  );
}

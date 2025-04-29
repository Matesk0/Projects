import "../css/Socials.css";

const Socials = () => {
  return (
    <section className="socials-section">
      <h2>My Social Media</h2>
      <div className="card">
        <a
          href="#"
          className="socialContainer containerOne"
          onClick={() =>
            window.open("https://www.facebook.com/JMatesko", "_blank")
          }
        >
          <img src="/icons/facebook.svg" alt="Facebook" className="socialSvg" />
        </a>

        <a
          href="#"
          className="socialContainer containerTwo"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/jakub-matia%C5%A1ko-2057aa351/",
              "_blank"
            )
          }
        >
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="socialSvg" />
        </a>

        <a
          href="#"
          className="socialContainer containerThree"
          onClick={() => window.open("https://github.com/Matesk0", "_blank")}
        >
          <img src="/icons/github.svg" alt="GitHub" className="socialSvg" />
        </a>

        <a
          href="#"
          className="socialContainer containerFour"
          onClick={() =>
            window.open("https://www.instagram.com/matesko_76/", "_blank")
          }
        >
          <img
            src="/icons/instagram.svg"
            alt="Instagram"
            className="socialSvg"
          />
        </a>
      </div>
    </section>
  );
};

export default Socials;

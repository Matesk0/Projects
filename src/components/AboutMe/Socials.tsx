const Socials = () => {
  return (
    <section>
      <h1>Mine social medias</h1>
      <nav>
        <div>
          <button
            onClick={() =>
              window.open("https://www.facebook.com/JMatesko", "_blank")
            }
          >
            Facebook
          </button>
        </div>
        <div>
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jakub-matia%C5%A1ko-2057aa351/",
                "_blank"
              )
            }
          >
            LinkedIn
          </button>
        </div>
        <div>
          <button
            onClick={() =>
              window.open("https://www.instagram.com/matesko_76/", "_blank")
            }
          >
            Instagram
          </button>
        </div>
        <div>
          <button
            onClick={() => window.open("https://github.com/Matesk0", "_blank")}
          >
            Github
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Socials;

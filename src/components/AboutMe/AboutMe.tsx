import "../css/AboutMe.css";

const AboutMe = () => {
  return (
    <section style={{ perspective: "1000px" }}>
      <h1>About Me</h1>

      <div className="card">
        <div className="card-inner">
          <div className="card-back">
            <img src="/icons/OIP.jpg" alt="Profile" className="avatar" />
          </div>
          <div className="card-front">
            <img
              src="https://github.com/Matesk0.png"
              alt="Jakub's avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
      <h2>Hi, my name is Jakub and I am student at MUNI.</h2>
    </section>
  );
};

export default AboutMe;

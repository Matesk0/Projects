import { useState } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/Navigation/Projects";
import Skills from "./components/Navigation/Skills";
import Minigames from "./components/Navigation/Minigames";
import Contacts from "./components/Navigation/Contacts";
import Blog from "./components/Navigation/Blog";
import Socials from "./components/AboutMe/Socials";

const App = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleSelectSection = (section: string) => {
    setSelectedSection((prevSelection) =>
      prevSelection === section ? null : section
    );
  };

  let content;
  switch (selectedSection) {
    case "skills":
      content = <Skills />;
      break;
    case "projects":
      content = <Projects />;
      break;
    case "contacts":
      content = <Contacts />;
      break;
    case "blog":
      content = <Blog />;
      break;
    case "minigames":
      content = <Minigames />;
      break;
    default:
      content = null;
  }

  return (
    <div id="root">
      <AboutMe />
      <Socials />
      <div>
        <Navigation onSelect={handleSelectSection} />
        <div>{content}</div>
      </div>
    </div>
  );
};

export default App;

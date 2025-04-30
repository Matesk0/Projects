import { useState } from "react";
import "../css/Navigation.css";

interface Props {
  onSelect: (section: string) => void;
}

const Navigation = ({ onSelect }: Props) => {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleClick = (section: string) => {
    setActiveSection(section);
    onSelect(section);
  };

  const getButtonClass = (section: string) =>
    `pushable${activeSection === section ? " active" : ""}`;

  return (
    <nav>
      <div>
        <button
          className={getButtonClass("skills")}
          onClick={() => handleClick("skills")}
        >
          <span>Skills</span>
        </button>
      </div>
      <div>
        <button
          className={getButtonClass("projects")}
          onClick={() => handleClick("projects")}
        >
          <span>Projects</span>
        </button>
      </div>
      <div>
        <button
          className={getButtonClass("contacts")}
          onClick={() => handleClick("contacts")}
        >
          <span>Contacts</span>
        </button>
      </div>
      <div>
        <button
          className={getButtonClass("blog")}
          onClick={() => handleClick("blog")}
        >
          <span>Blog</span>
        </button>
      </div>
      <div>
        <button
          className={getButtonClass("minigames")}
          onClick={() => handleClick("minigames")}
        >
          <span>Minigames</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

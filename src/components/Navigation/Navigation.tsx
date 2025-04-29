import "../css/Navigation.css";

interface Props {
  onSelect: (section: string) => void;
}

const Navigation = ({ onSelect }: Props) => {
  return (
    <nav>
      <div>
        <button className="pushable" onClick={() => onSelect("skills")}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">Skills</span>
        </button>
      </div>
      <div>
        <button className="pushable" onClick={() => onSelect("projects")}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">Projects</span>
        </button>
      </div>
      <div>
        <button className="pushable" onClick={() => onSelect("contacts")}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">Contacts</span>
        </button>
      </div>
      <div>
        <button className="pushable" onClick={() => onSelect("blog")}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">Blog</span>
        </button>
      </div>
      <div>
        <button className="pushable" onClick={() => onSelect("minigames")}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">Minigames</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

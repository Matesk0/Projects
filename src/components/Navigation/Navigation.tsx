interface Props {
  onSelect: (section: string) => void;
}

const Navigation = ({ onSelect }: Props) => {
  return (
    <nav>
      <div>
        <button onClick={() => onSelect("skills")}>Skills</button>
      </div>
      <div>
        <button onClick={() => onSelect("projects")}>Projects</button>
      </div>
      <div>
        <button onClick={() => onSelect("contacts")}>Contacts</button>
      </div>
      <div>
        <button onClick={() => onSelect("blog")}>Blog</button>
      </div>
      <div>
        <button onClick={() => onSelect("minigames")}>Minigames</button>
      </div>
    </nav>
  );
};

export default Navigation;

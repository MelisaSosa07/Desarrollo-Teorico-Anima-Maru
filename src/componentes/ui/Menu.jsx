import { useApp } from "../../context/AppContext";

function Menu({ onSelect }) {
  const { seccionActiva, setSeccionActiva } = useApp();

  const menuItems = [
    { id: "about", label: "Sobre mí" },
    { id: "interest", label: "Intereses" },
    { id: "share", label: "Compartir" },
    { id: "portfolio", label: "Portfolio" },
  ];

  const handleClick = (id) => {
    setSeccionActiva(id);
    if (onSelect) onSelect();
  };

  return (
    <nav className="menu">
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={seccionActiva === item.id ? "activo" : ""}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;

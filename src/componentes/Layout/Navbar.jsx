import { useState } from "react";
import Menu from "../ui/Menu.jsx";
import { useApp } from "../../context/AppContext";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

function Navbar() {
  const { userData } = useApp();
  const { tema, toggleTema } = useTheme();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto((prev) => !prev);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <span className="navbar-titulo">{userData.nombre}</span>
      </div>

      {/* Menú desktop */}
      <div className="menu-desktop">
        <Menu onSelect={cerrarMenu} />
      </div>

      <div className="navbar-acciones">
        {/* Botón toggle tema */}
        <button
          className="btn-tema"
          onClick={toggleTema}
          aria-label="Cambiar tema"
          title={tema === "oscuro" ? "Cambiar a claro" : "Cambiar a oscuro"}
        >
          {tema === "oscuro" ? "☀️" : "🌙"}
        </button>

        {/* Botón hamburguesa (mobile) */}
        <button
          className={`hamburguesa ${menuAbierto ? "abierto" : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menú mobile desplegable */}
      {menuAbierto && (
        <div className="menu-mobile">
          <Menu onSelect={cerrarMenu} />
        </div>
      )}
    </header>
  );
}

export default Navbar;

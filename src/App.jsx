import Navbar from "./componentes/Layout/Navbar.jsx";
import Sidebar from "./componentes/Layout/Sidebar.jsx";
import Footer from "./componentes/Layout/Footer.jsx";
import { useApp } from "./context/AppContext";
import { useTheme } from "./context/ThemeContext";
import About from "./componentes/Sections/About.jsx";
import Interest from "./componentes/Sections/Interest.jsx";
import Share from "./componentes/Sections/Share.jsx";
import Portfolio from "./componentes/Sections/Portfolio.jsx";
import "./App.css";

function App() {
  const { seccionActiva } = useApp();
  const { tema } = useTheme();

  const renderSeccion = () => {
    switch (seccionActiva) {
      case "about":
        return <About />;
      case "interest":
        return <Interest />;
      case "share":
        return <Share />;
      case "portfolio":
        return <Portfolio />;
      default:
        return <About />;
    }
  };

  return (
    <div className={`app-wrapper tema-${tema}`}>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="contenido">{renderSeccion()}</main>
      </div>
      <Footer texto="Marianela Sosa © 2026" />
    </div>
  );
}

export default App;

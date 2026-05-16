import { useApp } from "../../context/AppContext";

function About() {
  const { userData } = useApp();

  return (
    <section className="seccion">
      <div className="seccion-header">
        <h2>Sobre mí</h2>
        <div className="seccion-linea"></div>
      </div>
      <div className="seccion-contenido">
        <p>
          Hola, soy <strong>{userData.nombre}</strong>, una persona{" "}
          {userData.descripcion} apasionada por el desarrollo web y la
          tecnología.
        </p>
        <p>
          Me encanta aprender cosas nuevas, resolver problemas creativos y
          construir experiencias digitales que marquen la diferencia.
        </p>
        <div className="about-tags">
          <span className="tag">React</span>
          <span className="tag">JavaScript</span>
          <span className="tag">CSS</span>
          <span className="tag">Diseño</span>
        </div>
      </div>
    </section>
  );
}

export default About;

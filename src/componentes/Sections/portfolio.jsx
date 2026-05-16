function Portfolio() {
  const proyectos = [
    {
      titulo: "Card React",
      descripcion:
        "Proyecto de tarjeta personal con React, Context API y CSS propio.",
      tecnologias: ["React", "CSS", "Context API"],
      emoji: "🃏",
    },
    {
      titulo: "Proyecto 2",
      descripcion: "Descripción del segundo proyecto. Próximamente.",
      tecnologias: ["JavaScript", "HTML", "CSS"],
      emoji: "🚀",
    },
    {
      titulo: "Proyecto 3",
      descripcion: "Descripción del tercer proyecto. Próximamente.",
      tecnologias: ["React", "API REST"],
      emoji: "🌐",
    },
  ];

  return (
    <section className="seccion">
      <div className="seccion-header">
        <h2>Portfolio</h2>
        <div className="seccion-linea"></div>
      </div>
      <div className="portfolio-grid">
        {proyectos.map((proyecto, index) => (
          <div className="proyecto-card" key={index}>
            <span className="proyecto-emoji">{proyecto.emoji}</span>
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <div className="proyecto-tags">
              {proyecto.tecnologias.map((tec, i) => (
                <span key={i} className="tag">
                  {tec}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

function Share() {
  const redes = [
    { nombre: "GitHub", url: "https://github.com", icono: "🐙" },
    { nombre: "LinkedIn", url: "https://linkedin.com", icono: "💼" },
    { nombre: "Twitter / X", url: "https://twitter.com", icono: "🐦" },
    { nombre: "Instagram", url: "https://instagram.com", icono: "📸" },
  ];

  return (
    <section className="seccion">
      <div className="seccion-header">
        <h2>Compartir</h2>
        <div className="seccion-linea"></div>
      </div>
      <p className="seccion-intro">Encontrame en las redes:</p>
      <div className="share-grid">
        {redes.map((red, index) => (
          <a
            key={index}
            href={red.url}
            target="_blank"
            rel="noopener noreferrer"
            className="share-card"
          >
            <span className="share-icono">{red.icono}</span>
            <span className="share-nombre">{red.nombre}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Share;

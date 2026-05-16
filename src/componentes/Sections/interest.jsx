function Interest() {
  const intereses = [
    {
      emoji: "💻",
      titulo: "Desarrollo Web",
      descripcion: "Construir interfaces modernas con React y CSS.",
    },
    {
      emoji: "🎨",
      titulo: "Diseño UI/UX",
      descripcion: "Crear experiencias visuales intuitivas y atractivas.",
    },
    {
      emoji: "📚",
      titulo: "Lectura",
      descripcion: "Fanática de los libros de fantasía y ciencia ficción.",
    },
    {
      emoji: "🎵",
      titulo: "Música",
      descripcion: "La música es el fondo de todo lo que hago.",
    },
  ];

  return (
    <section className="seccion">
      <div className="seccion-header">
        <h2>Intereses</h2>
        <div className="seccion-linea"></div>
      </div>
      <div className="intereses-grid">
        {intereses.map((item, index) => (
          <div className="interes-card" key={index}>
            <span className="interes-emoji">{item.emoji}</span>
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Interest;

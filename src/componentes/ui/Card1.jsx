import { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import "./Card.css";

function Card() {
  const { userData } = useApp();
  const [fecha, setFecha] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFecha(new Date());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  const fechaFormateada = fecha.toLocaleDateString("es-UY", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const horaFormateada = fecha.toLocaleTimeString("es-UY", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="card animada">
      <div className="card-avatar">
        {userData.foto ? (
          <img src={userData.foto} alt="perfil" className="perfil" />
        ) : (
          <div className="avatar-placeholder">{userData.nombre.charAt(0)}</div>
        )}
      </div>
      <div className="card-info">
        <h2 className="card-nombre">{userData.nombre}</h2>
        <span className="card-descripcion">{userData.descripcion}</span>
      </div>
      <div className="card-frase">
        <p>"{userData.frase}"</p>
        <cite>— {userData.autor}</cite>
      </div>
      <div className="card-reloj">
        <p className="hora">{horaFormateada}</p>
        <p className="fecha">{fechaFormateada}</p>
      </div>
    </div>
  );
}

export default Card;

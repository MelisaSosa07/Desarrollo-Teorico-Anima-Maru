/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";
export const AppContext = createContext();
export function AppProvider({ children }) {
  const [seccionActiva, setSeccionActiva] = useState("about");
  const userData = {
    nombre: "Marianela Sosa",
    descripcion: "creativa",
    foto: null,
    frase: "No dejes que los muggles te quiten tu magia.",
    autor: "Harry Potter",
  };

  return (
    <AppContext.Provider value={{ seccionActiva, setSeccionActiva, userData }}>
      {children}
    </AppContext.Provider>
  );
}
export function useApp() {
  return useContext(AppContext);
}

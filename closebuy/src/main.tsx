import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppRoutes } from "./routes.tsx"; // Importa tu configuración

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      {/* App actúa como el Layout principal */}
      <Route path="/" element={<App />}>
        {/* Mapeamos las rutas de tu archivo routes.tsx como rutas hijas */}
        {AppRoutes.map((route) => (
          <Route 
            key={route.path} 
            index={route.path === "/"} 
            path={route.path === "/" ? undefined : route.path.replace("/", "")} 
            element={route.element} 
          />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
);
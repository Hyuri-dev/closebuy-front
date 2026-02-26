import Home from "./pages/Home";
import Login from "./pages/Login";

export const AppRoutes = [
  { path: "/", element: <Home/> }, // Se usará como 'index'
  { path: "login", element: <Login/> }, // Sin la barra "/" inicial para rutas hijas
];




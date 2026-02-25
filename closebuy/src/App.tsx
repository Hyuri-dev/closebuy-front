import "./App.css";
import { Outlet, Scripts, Meta, Links, href } from "react-router";

function App() {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {/* <NavBar logo={"Romster"}></NavBar> */}

        <main>
          {/* Aquí es donde cambiarán las páginas */}
          <Outlet />
        </main>

        <Scripts />
      </body>
    </html>
  );
}

export default App;

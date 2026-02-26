import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <Link to={"/"}>Inicio</Link>
      </nav>
      
      <Outlet/>
    </div>

  )
  
};

export default App;

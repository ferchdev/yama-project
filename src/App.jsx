import AOS from "aos";
import "aos/dist/aos.css";
import { Home } from "./components/Home";
import { useEffect, useState } from "react";

function App() {
  const [ventana,setVentana] = useState(window.screen.width);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  useEffect(()=>{
    setVentana(window.screen.width);
  },[window.screen.width]);
  return (
      <>
      {ventana>=1200 ? <Home/> : <div className="flex justify-center items-center h-[100vh]"><h1>Solo se puede visualizar en pantallas mayores a 1200px</h1></div>}
      </>
  );
}

export default App;

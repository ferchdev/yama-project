import AOS from "aos";
import "aos/dist/aos.css";
import { Home } from "./components/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
      <Home />
  );
}

export default App;

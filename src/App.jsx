import { useState } from "react";
import "./styles/main.css";
import Hero from "./components/Hero";
import Header from "./globalComponents/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Projects />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;

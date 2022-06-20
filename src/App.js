import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="flex flex-col justify-center items-center h-screen w-screen  bg-[#0a192f]">
          <ClimbingBoxLoader color="#e2196c" loading={loading} size={25} />
        </div>
      ) : (
        <div>
          <NavBar />
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;

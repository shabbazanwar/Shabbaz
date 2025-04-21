import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
// import NavBar from "./components/NavBar";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      {/* <NavBar /> */}

      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

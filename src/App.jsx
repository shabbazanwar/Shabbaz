import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

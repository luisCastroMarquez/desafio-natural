import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import fotos from "./assets/fotos.json";
import { PicProvider } from "./context/PicContext";

function App() {
  console.log(fotos);
  return (
    <div className="App">
      <PicProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </PicProvider>
    </div>
  );
}

export default App;

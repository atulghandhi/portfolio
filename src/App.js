import Navbar from "./components/navbar";
import Footer from "./components/footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Youtube from "./pages/youtube";
import Books from "./pages/books";
import About from "./pages/about";

function App() {
  return (
      <div className={'wrapper'}>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/youtube' element={<Youtube />} />
              <Route path='/books' element={<Books />} />
              <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
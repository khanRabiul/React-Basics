import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Blog />} />
        {/* Step 02: path="/user/:id" is a dynamic route where id is the parameter that will change based on the user clicked on the Home page.
        :id means that part of the URL is a dynamic value and can be accessed in the UserDetails component.
        */}
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;

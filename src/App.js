import Header from "./components/Header";
import Carrousel from "./components/Carrousel";
import About from "./components/About";
import Services from "./components/Services";
import Galeria from "./components/Galeria";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth">
      <Header></Header>
      <Carrousel></Carrousel>
      <About />
      <Services />
      <Galeria />
      <ContactUs />
      <Footer></Footer>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;

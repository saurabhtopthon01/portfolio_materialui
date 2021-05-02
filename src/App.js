import Hero from './components/Hero';
import Footer from './components/Footer';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Footer />
      </header>
    </div>
  );
}

export default App;

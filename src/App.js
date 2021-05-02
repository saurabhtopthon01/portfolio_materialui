import Hero from './components/Hero';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        {/* <Blog /> */}
        <Footer />
      </header>
    </div>
  );
}

export default App;

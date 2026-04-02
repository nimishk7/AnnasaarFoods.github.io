import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-primary text-cream font-body selection:bg-turmeric selection:text-primary">
      <Navbar />
      <main className="flex-grow">
         <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;

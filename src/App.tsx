import AboutMe from './components/AboutMe';
import ServicesOffered from './components/ServicesOffered';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Você pode adicionar um componente de Navbar/Header aqui se desejar */}
      
      <main>
        <AboutMe />
        <ServicesOffered />
      </main>

      <Footer />
    </div>
  );
}

export default App;
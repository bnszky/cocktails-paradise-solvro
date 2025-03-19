import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './pages/About';
import Favorites from './pages/Favorites';
import Drink from './pages/Drink';
import Search from './pages/Search';
import { SidebarProvider } from './components/ui/sidebar';

function App() {
  return (
    <SidebarProvider>
      <Router>
        <div className="flex flex-col min-h-screen w-full">
          <Navbar />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/drink/:id" element={<Drink />} />
            </Routes>
          <Footer />
        </div>
      </Router>
    </SidebarProvider>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './pages/About';
import Drink from './pages/Drink';
import Search from './pages/Search';
import { SidebarProvider } from './components/ui/sidebar';
import { ThemeProvider } from './context/ThemeProvider';
import {links} from '@/constants/links';

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Router>
          <div className="flex flex-col min-h-screen w-full">
            <Navbar />
              <Routes>
                <Route path={links.about} element={<About />} />
                <Route path={links.cocktails} element={<Search />} />
                <Route path={links.cocktail} element={<Drink />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            <Footer />
          </div>
        </Router>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;

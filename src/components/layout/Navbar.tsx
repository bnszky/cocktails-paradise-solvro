import { Link, NavLink } from 'react-router-dom';
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useState, useEffect } from 'react';
import { images } from '@/constants/images';
import { Moon, Sun, Menu, X } from 'lucide-react'; // Import Moon, Sun, Menu, and X icons

function NavItem({name, to, end = false}: {name: string, to: string, end?: boolean}) {
    return (
        <li>
        <NavLink 
            to={to} // Correctly pass the 'to' prop
            className={({ isActive }) => 
            `${isActive ? "border-b-1 border-primary" : "hover:text-accent"} font-medium px-3 py-1`
            } // Correctly use template literals
            end={end} // Conditionally apply the 'end' prop
        >
            {name}
        </NavLink>
        </li>
    );
}

function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Check if theme preference is stored in local storage
    const savedTheme = localStorage.getItem('theme');
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Return true if saved theme is dark or no saved theme but user prefers dark
    return savedTheme === 'dark' || (!savedTheme && prefersDark);
  });

  const toggleTheme = (checked: boolean) => {
    setIsDarkTheme(checked);
  };

  // Apply theme changes
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkTheme]);

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='relative'>
    <header className="relative bg-primary-foreground py-4 w-full text-primary z-10">
      <div className="relative p-4 flex items-center justify-between">
        <Link to="/" className="absolute left-4 top-1">
            <img src={images.logo} alt="Cocktail Paradise" className="h-12" />
        </Link>

        <div className="absolute right-0 top-4 mx-4 flex items-center space-x-2">
            <Switch 
                id="theme-mode" 
                checked={isDarkTheme}
                onCheckedChange={toggleTheme}
            />
            <Label htmlFor="theme-mode">
                {isDarkTheme ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Label>
            <button className="md:hidden" onClick={toggleMenu}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
      </div>
      <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:block w-full justify-center`}>
          <ul className="flex flex-col md:flex-row justify-center items-center font-regular text-lg space-y-4 md:space-y-0 md:space-x-6 bg-primary-foreground">
            <NavItem name="About" to="/" end={true} />
            <NavItem name="Cocktails" to="/search" />
            <NavItem name="Favorites" to="/favorites" />
          </ul>
        </nav>
    </header>
    <div className="h-10 w-full overflow-hidden bg-primary-foreground">
    <svg
        className="absolute bottom-0 w-full h-12"
        viewBox="0 0 500 10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
    >
        <path
        fill="black"
        fillOpacity="1"
        d="M0,5 C80,0 200,10 300,5 C400,0 500,10 500,5 L500,10 L0,10 Z"
        ></path>
    </svg>
  </div>
  </div>
  );
}

export default Navbar;

import { Link, NavLink } from 'react-router-dom';
import { images } from '@/constants/images';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import DarkModeSwitch from '../ui-wrapper/DarkModeSwitch';
import WavesNavbarShape from '../ui-wrapper/WavesNavbarShape';
import { links } from '@/constants/links';

function NavItem({name, to, end = false}: {name: string, to: string, end?: boolean}) {
    return (
        <li>
        <NavLink 
            to={to}
            className={({ isActive }) => 
            `${isActive ? "border-b-1 border-primary" : "hover:text-accent"} font-medium px-3 py-1`
            }
            end={end}
        >
            {name}
        </NavLink>
        </li>
    );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <DarkModeSwitch />
              <button className="md:hidden" onClick={toggleMenu}>
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
          </div>
        </div>
        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:block w-full justify-center`}>
            <ul className="flex flex-col md:flex-row justify-center items-center font-regular text-lg space-y-4 md:space-y-0 md:space-x-6 bg-primary-foreground">
              <NavItem name="About" to={links.about} end={true} />
              <NavItem name="Cocktails" to={links.cocktails} />
            </ul>
          </nav>
      </header>
      <WavesNavbarShape />
    </div>
  );
}

export default Navbar;

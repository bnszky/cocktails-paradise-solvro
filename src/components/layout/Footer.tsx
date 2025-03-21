import { Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { links } from "@/constants/links";

function Footer() {
  return (
    <footer className="bg-primary-foreground text-primary mt-auto py-6 border-t-1 shadow-2xl border-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2">
          <p className="text-md">
            &copy; {new Date().getFullYear()} Cocktail Paradise by <Link to={"/"} className="hover:text-accent text-primary">Bnszky</Link>
          </p>
          <div className="flex space-x-4">
            <Link to={links.github} className="hover:text-accent flex flex-row space-x-2 text-sm justify-center items-center">
              <Github className="w-6 h-6" />
            </Link>
            <Link to={links.email} className="hover:text-accent flex flex-row space-x-2 text-sm justify-center items-center">
              <Mail className="w-6 h-6" />
              <span className="font-bold">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">React Router</a>
          <div className="space-x-4">
            <Link to='/'className="hover:text-gray-400">Home</Link>
            <Link to="/about" className="hover:text-gray-400">About</Link>
            <Link  to="/contact" className="hover:text-gray-400">Contact</Link>
            <Link to= "/blog" className="hover:text-gray-400">Blog</Link>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
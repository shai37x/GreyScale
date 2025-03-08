import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Greyscale</h1>
        <div>
          <Link to="/" className="mx-3">Home</Link>
          <Link to="/portfolio" className="mx-3">Portfolio</Link>
          <Link to="/login" className="mx-3">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

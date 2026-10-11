import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">List of Students</Link>
        <Link to="/favourites">Favourite Students</Link>
      </div>
    </nav>
  );
}

export default Navbar;

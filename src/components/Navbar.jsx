import { Link } from "react-router-dom";
import { useStudentContext } from "../context/StudentContext";

function Navbar() {
  // Access favourite count from global context
  const { favouriteStudents } = useStudentContext();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          ⭐ Favourite Student List
        </Link>

        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Students
          </Link>
          <Link to="/favourites" className="nav-link nav-link-fav">
            Favourites
            <span className="fav-badge">{favouriteStudents.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

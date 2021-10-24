import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  
  const handleClear = () => {
    localStorage.clear()
  }

  return (
    <nav className="navbar">
      <h1>Dashboard</h1>
      <div className="links">
        <Link to="/" style={{
          color: 'white',
          backgroundColor: 'dodgerblue',
          borderRadius: '8px'
        }} onClick={handleClear}>logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
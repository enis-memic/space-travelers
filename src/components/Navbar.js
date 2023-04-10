import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="links">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="Missions">Missions</NavLink>
      <NavLink to="Myprofile">Myprofile</NavLink>
    </div>
  </nav>
);

export default Navbar;

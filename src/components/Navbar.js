import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="links">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="Missions">Missions</NavLink>
      <div className="line"> </div>
      <NavLink to="Myprofile">My Profile</NavLink>
    </div>
  </nav>
);

export default Navbar;

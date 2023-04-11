import planet from '../img/planet.png';
import Navbar from './Navbar';
import './Header.css';

const Header = () => (
  <div className="header">
    <div className="header-1">
      <img src={planet} alt="planet logo" />
      <h1 className="header-photo">Space Travelers&apos; Hub</h1>
    </div>
    <Navbar />
  </div>
);

export default Header;

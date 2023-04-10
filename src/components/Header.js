import planet from '../img/planet.png';
import Navbar from './Navbar';

const Header = () => (
  <div>
    <img src={planet} alt="planet logo" />
    <h1>Space Travelers</h1>
    <Navbar />
  </div>
);

export default Header;

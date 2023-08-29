import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const Header = () => (
  <header>
    <div className="logo">
      <img src={planet} alt="hub-logo" />
      <h2>{'Space Traveler\'s Hub'}</h2>
    </div>
    <nav>
      <NavLink className="rocket-link" to="/" activeClassName="active-link">Rockets</NavLink>
      <NavLink className="mission-link visit" to="/missions" activeClassName="active-link">Missions</NavLink>
      <div className="divider" />
      <NavLink className="profile-link" to="/profile" activeClassName="active-link">My Profile</NavLink>
    </nav>
  </header>
);

export default Header;

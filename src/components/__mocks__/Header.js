import planet from '../../images/planet.png';

const Header = () => (
  <header>
    <div className="logo">
      <img src={planet} alt="hub-logo" />
      <h2>{'Space Traveler\'s Hub'}</h2>
    </div>
    <nav>
      <a href="../Rockets.js" className="rocket-link">Rockets</a>
      <a href="../Missions.js" className="mission-link visit">Missions</a>
      <div className="divider" />
      <a href="../MyProfile.js" className="profile-link">My Profile</a>
    </nav>
  </header>
);

export default Header;

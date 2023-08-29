import '../styles/Rockets.css';
import { PropTypes } from 'prop-types';

function Rocket({ rocket }) {
  return (
    <div className="rocket" id={rocket.id}>
      <img src={rocket.image} alt="Rocket" className="rocketImg" />
      <div className="rocketDetail">
        <h3 className="rocketHead">{rocket.name}</h3>
        <p className="rocketDesc">{rocket.description}</p>
        <button type="button" className="reserveRocket">Reserve Rocket</button>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  rocket: PropTypes.string.isRequired,
};

export default Rocket;

import '../styles/Rockets.css';
import { PropTypes } from 'prop-types';

function Rocket({
  id, image, name, description,
}) {
  return (
    <div className="rocket" id={id}>
      <img src={image} alt="Rocket" className="rocketImg" />
      <div className="rocketDetail">
        <h3 className="rocketHead">{name}</h3>
        <p className="rocketDesc">{description}</p>
        <button type="button" className="reserveRocket">Reserve Rocket</button>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;

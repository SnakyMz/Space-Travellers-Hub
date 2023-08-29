import { useDispatch } from 'react-redux';
import '../styles/Rockets.css';
import { PropTypes } from 'prop-types';
import { cancelRocket, reserveRocket } from '../redux/rockets/rocketSlice';

function Rocket({
  id, image, name, description, reserved,
}) {
  const dispatch = useDispatch();
  return (
    <div className="rocket" id={id}>
      <img src={image} alt="Rocket" className="rocketImg" />
      <div className="rocketDetail">
        <h3 className="rocketHead">{name}</h3>
        <p className="rocketDesc">{description}</p>
        {reserved === false ? <button type="button" className="reserveRocket" onClick={() => dispatch(reserveRocket(id))}>Reserve Rocket</button> : <button type="button" className="cancelRocket" onClick={() => dispatch(cancelRocket(id))}>Cancel Reservation</button>}
      </div>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;

import { useDispatch } from 'react-redux';
import '../styles/Rockets.css';
import { PropTypes } from 'prop-types';
import { cancelRocket, reserveRocket } from '../redux/rockets/rocketSlice';

function Rocket({ rocket }) {
  const dispatch = useDispatch();
  return (
    <div className="rocket" id={rocket.id}>
      <img src={rocket.image} alt="Rocket" className="rocketImg" />
      <div className="rocketDetail">
        <h3 className="rocketHead">{rocket.name}</h3>
        <p className="rocketDesc">{rocket.description}</p>
        {rocket.reserved === false ? <button type="button" className="reserveRocket" onClick={() => dispatch(reserveRocket(rocket.id))}>Reserve Rocket</button> : <button type="button" className="cancelRocket" onClick={() => dispatch(cancelRocket(rocket.id))}>Cancel Reservation</button>}
      </div>
    </div>
  );
}

Rocket.propTypes = {
  rocket: PropTypes.string.isRequired,
};

export default Rocket;

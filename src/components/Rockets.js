import { useSelector } from 'react-redux';

function Rockets() {
  const rockets = useSelector((store) => store.rockets);
  return (
    <section id="rockets">
      {rockets.map((rocket) => (
        <div className="rocket" key={rocket.id}>
          <img src={rocket.flickr_images} alt="Rocket" className="rocketImg" />
          <h3 className="rocketHead">{rocket.rocket_name}</h3>
          <p className="rocketDesc">{rocket.description}</p>
          <button type="button" className="Btn reserveBtn">Reserve Rocket</button>
        </div>
      ))}
    </section>
  );
}

export default Rockets;

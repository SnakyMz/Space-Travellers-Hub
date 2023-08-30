const planet = require('../../images/planet.png');

function Rockets() {
  const rockets = [
    {
      id: 1,
      image: planet,
      name: 'Alpha',
      description: 'Rocket launched in space.',
      reserved: false,
    },
    {
      id: 2,
      image: planet,
      name: 'Beta',
      description: 'Rocket launched in space.',
      reserved: true,
    },
  ];
  return (
    <section id="rockets">
      {rockets.map((rocket) => (
        <div className="rocket" id={rocket.id} key={rocket.id}>
          <img src={rocket.image} alt="Rocket" className="rocketImg" />
          <div className="rocketDetail">
            <h3 className="rocketHead">{rocket.name}</h3>
            <p className="rocketDesc">
              {rocket.reserved === true ? <span className="reserveBadge">Reserved</span> : ''}
              {rocket.description}
            </p>
            {rocket.reserved === false ? <button type="button" className="reserveRocket">Reserve Rocket</button> : <button type="button" className="cancelRocket">Cancel Reservation</button>}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Rockets;

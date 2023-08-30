const planet = require('../../images/planet.png');

function MyProfile() {
  const missions = [
    {
      mission_id: 1,
      mission_name: 'Alpha',
      description: 'Mission to go to space',
      reserved: false,
    },
    {
      mission_id: 2,
      mission_name: 'Beta',
      description: 'Mission to go back to earth',
      reserved: true,
    },
  ];

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
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <section id="profile">
      <section>
        <table>
          <caption><h2>My Missions</h2></caption>
          <tbody>
            {missions.map((mission) => {
              if (mission.reserved === true) {
                return (
                  <tr key={mission.mission_id}>
                    <td><h4>{mission.mission_name}</h4></td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </section>
      <section id="myRockets">
        <table>
          <caption><h2>My Rockets</h2></caption>
          <tbody>
            {reservedRockets.map((reservedRocket) => (
              <tr key={reservedRocket.id}><td><h4>{reservedRocket.name}</h4></td></tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default MyProfile;

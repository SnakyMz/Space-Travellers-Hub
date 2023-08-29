import { useSelector } from 'react-redux';

function MyRockets() {
  const rockets = useSelector((store) => store.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved !== true);
  return (
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
  );
}

export default MyRockets;

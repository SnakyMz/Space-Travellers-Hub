import { useSelector } from 'react-redux';
import MissionCard from './MissionCard';

const Missions = () => {
  const missions = useSelector((store) => store.mission.missions);

  return (
    <section className="missions-list">
      <table className="missions">
        <thead>
          <tr>
            <th><h3>Mission</h3></th>
            <th><h3>Description</h3></th>
            <th><h3>Status</h3></th>
            <th>
              <small />
            </th>
          </tr>
        </thead>
        <MissionCard missions={missions} />
      </table>
    </section>
  );
};

export default Missions;

import { useSelector } from 'react-redux/es/hooks/useSelector';

const MyMission = () => {
  const missions = useSelector((store) => store.missions.missions);
  const newMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <section>
      <table>
        <caption><h2>My Missions</h2></caption>
        <tbody>
          {newMissions.map((mission) => {
            if (mission) {
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
  );
};
export default MyMission;

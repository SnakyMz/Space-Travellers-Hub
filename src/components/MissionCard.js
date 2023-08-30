import { useDispatch } from 'react-redux';
import { reserve, cancel } from '../redux/missions/missionSlice';

// eslint-disable-next-line react/prop-types
const MissionCard = ({ missions }) => {
  const dispatch = useDispatch();
  const reservation = (id) => {
    dispatch(reserve(id));
  };

  const Cancel = (id) => {
    dispatch(cancel(id));
  };
  return (
    <tbody>
      {
    // eslint-disable-next-line react/prop-types
    missions.map((mission) => (
      <tr key={mission.mission_id}>
        <td><h4>{mission.mission_name}</h4></td>
        <td>{mission.description}</td>
        <td>
          {mission.reserved === true ? <small className="member">Active Member</small> : <small className="not-member">NOT A MEMBER</small>}
        </td>
        <td>
          {mission.reserved === true ? <button onClick={() => { Cancel(mission.mission_id); }} className="cancel" type="button">Leave Mission</button> : <button onClick={() => { reservation(mission.mission_id); }} className="join" type="button">Join Mission</button>}
        </td>
      </tr>
    ))
  }
    </tbody>
  );
};

export default MissionCard;

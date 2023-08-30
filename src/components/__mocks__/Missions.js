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

const Missions = () => (
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
          {mission.reserved === true ? <button className="cancel" type="button">Leave Mission</button> : <button className="join" type="button">Join Mission</button>}
        </td>
      </tr>
    ))
  }
      </tbody>
    </table>
  </section>
);

export default Missions;

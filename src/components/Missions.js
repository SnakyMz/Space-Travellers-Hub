import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MissionCard from './MissionCard';
import { getMission } from '../redux/missions/missionSlice';
import MyMission from './MyMission';

const Missions = () => {
  const { isLoading, isError, missions } = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);
  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  if (isError) {
    return (
      <div><h1>No missions Found!</h1></div>
    );
  }

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
      <MyMission />
    </section>
  );
};

export default Missions;

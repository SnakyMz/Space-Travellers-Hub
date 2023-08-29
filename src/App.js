import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMission } from './redux/missions/missionSlice';
import MyMission from './components/MyMission';
import Missions from './components/Missions';

function App() {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((store) => store.mission);
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
    <div className="App">
      <Missions />
      <MyMission />
    </div>
  );
}

export default App;

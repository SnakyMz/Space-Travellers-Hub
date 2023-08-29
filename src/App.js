import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';

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
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;

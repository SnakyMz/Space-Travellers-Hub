import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { getRockets } from '../redux/rockets/rocketSlice';

function Rockets() {
  const { isLoading, hasError, rockets } = useSelector((store) => store.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Something went wrong!</div>;
  }
  return (
    <section id="rockets">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          rocket={rocket}
        />
      ))}
    </section>
  );
}

export default Rockets;

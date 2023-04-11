import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const { rockets, fetched } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchRockets());
    }
  }, [dispatch, fetched]);

  return (
    <div className="Rockets">
      <h1>Rockets</h1>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
            <h2>{rocket.rocket_name}</h2>
            <p>{rocket.description}</p>
            <button type="button">Reserve Rocket</button>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default Rockets;

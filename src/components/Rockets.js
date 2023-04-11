import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets, bookRockets, unBookRockets } from '../redux/rockets/rocketsSlice';
import './rocketscss.css';

const Rockets = () => {
  const { rockets, fetched } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchRockets());
    }
  }, [dispatch, fetched]);

  const handleClick = (rocketId) => {
    dispatch(bookRockets(rocketId));
  };

  const handleReject = (rocketId) => {
    dispatch(unBookRockets(rocketId));
  };

  return (
    <div className="rockets">
      <ul className="rul">
        {rockets.map((rocket) => (
          <li className="rli" key={rocket.id}>
            <img className="rimg" src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
            <div className="rdiv">
              <h4 className="rh4">{rocket.rocket_name}</h4>
              <p className="rp">
                {rocket.reserved && <span className="rspan">Reserved</span>}
                {' '}
                {rocket.description}
              </p>
              {rocket.reserved ? (
                <button className="rcancel" type="button" onClick={() => handleReject(rocket.id)}>
                  Cancel Reservation
                </button>
              ) : (
                <button className="rreserve" type="button" onClick={() => handleClick(rocket.id)}>
                  Reserve Rocket
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default Rockets;

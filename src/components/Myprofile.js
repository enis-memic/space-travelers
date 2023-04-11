import { useSelector } from 'react-redux';
import './myprofile.css';

const Myprofile = () => {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <div className="my-profile-div">
      <div>
        <h2 className="my-profile-h2">My missions</h2>
      </div>
      <div className="mprdiv">
        <h2 className="my-profile-h2">My rockets</h2>
        <table className="mprtable">
          <tbody>
            {rockets.map((rocket) => (rocket.reserved ? (
              <tr key={rocket.id}>
                <td className="mprtd">{rocket.rocket_name}</td>
              </tr>
            ) : null))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myprofile;

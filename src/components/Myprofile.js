import { useSelector } from 'react-redux';
import './myprofile.css';

const Myprofile = () => {
  const { rockets } = useSelector((state) => state.rockets);

  const { missions } = useSelector((state) => state.missions);

  return (
    <div className="my-profile-div">
      <div>
        <h2 className="my-profile-h2">My missions</h2>
        <table className="mprtable">
          <tbody>
            {missions
              .filter((mission) => mission.joined)
              .map((joinedMission) => (
                <tr key={joinedMission.mission_id}>
                  <td className="mprtd">{joinedMission.mission_name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="mprdiv">
        <h2 className="my-profile-h2">My rockets</h2>
        <table className="mprtable">
          <tbody>
            {rockets
              .filter((rocket) => rocket.reserved)
              .map((reservedRocket) => (
                <tr key={reservedRocket.id}>
                  <td className="mprtd">{reservedRocket.rocket_name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myprofile;

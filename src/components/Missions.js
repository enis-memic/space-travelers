import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMissions,
  joinMission,
  cancelMission,
} from '../redux/missions/missionsSlice';

const Missions = () => {
  const { missions, fetched } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!fetched) {
      dispatch(fetchMissions());
    }
  }, [dispatch, fetched]);

  const reserveMission = (missionId) => {
    dispatch(joinMission(missionId));
  };
  const unresMission = (missionId) => {
    dispatch(cancelMission(missionId));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr className="mission-list" key={mission.mission_id}>
            <td className="mission-title">{mission.mission_name}</td>
            <td className="mission-description">{mission.description}</td>
            <td className="mission-button">
              {mission.joined ? (
                <button
                  id={mission.mission_id}
                  type="button"
                  onClick={() => unresMission(mission.mission_id)}
                >
                  Leave Mission
                </button>
              ) : (
                <button
                  id={mission.mission_id}
                  type="button"
                  onClick={() => reserveMission(mission.mission_id)}
                >
                  Join mission
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;

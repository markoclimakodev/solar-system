import Title from '../Title';
import missions from '../../data/missions';
import MissionCard from '../MissionCard';

import './index.css';

export default function Missions() {
  return (
    <div data-testid="missions" className="missions-container">
      <Title headline="Missões" />
      <div className="missions-card-container">
        {missions.map((mission) => {
          return (
            <MissionCard
              name={ mission.name }
              country={ mission.country }
              year={ mission.year }
              destination={ mission.destination }
              key={ mission.name }
            />
          );
        })}
      </div>
    </div>
  );
}

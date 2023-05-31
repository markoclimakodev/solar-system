import Title from '../Title';
import missions from '../../data/missions';
import MissionCard from '../MissionCard';

export default function Missions() {
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
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
  );
}

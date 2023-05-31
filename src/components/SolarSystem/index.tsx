import Title from '../Title';
import planets from '../../data/planets';
import PlanetCard from '../PlanetCard';
import planetSizes from '../../data/planetsSize';

import './index.css';

export default function SolarSystem() {
  return (
    <div data-testid="solar-system" className="solar-system-container">
      <Title headline="Planetas" />
      <hr />
      <div className="planets-container">
        {planets.map((planet, index) => {
          return (
            <PlanetCard
              planetImage={ planet.image }
              planetName={ planet.name }
              width={ planetSizes[index][0] }
              height={ planetSizes[index][1] }
              key={ planet.name }
            />
          );
        })}
        <hr />
      </div>
    </div>
  );
}

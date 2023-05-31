import Title from '../Title';
import Planets from '../../data/planets';
import PlanetCard from '../PlanetCard';

import './index.css';

export default function SolarSystem() {
  return (
    <div data-testid="solar-system" className="solar-system-container">
      <Title headline="Planetas" />
      <hr />
      <div className="planets-container">
        {Planets.map((planet) => {
          return (
            <PlanetCard
              planetImage={ planet.image }
              planetName={ planet.name }
              key={ planet.name }
            />
          );
        })}
      </div>
    </div>
  );
}

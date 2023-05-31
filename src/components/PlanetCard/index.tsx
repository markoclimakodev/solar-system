import './index.css';

interface PlanetCardProps {
  planetName: string;
  planetImage: string;
}

export default function PlanetCard({
  planetName,
  planetImage,
}
: PlanetCardProps) {
  return (
    <div className="planet-card-container" data-testid="planet-card">
      <img
        src={ planetImage }
        alt={ `Planeta ${planetName}` }
      />
      <p data-testid="planet-name">{ planetName }</p>
    </div>
  );
}

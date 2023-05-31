import './index.css';

interface PlanetCardProps {
  planetName: string;
  planetImage: string;
  width: string;
  height: string;
}

export default function PlanetCard(props : PlanetCardProps) {
  const { planetName, planetImage, width, height } = props;
  return (
    <div className="planet-card-container" data-testid="planet-card">
      <div className="planet-image-container">
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          width={ width }
          height={ height }
        />
      </div>
      <div className="planet-name-container">
        <p data-testid="planet-name">{planetName}</p>
      </div>
    </div>
  );
}

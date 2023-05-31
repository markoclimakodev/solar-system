import './index.css';
import * as Icon from 'react-icons/md';

interface MissionCardProps {
  name: string;
  year: string;
  country: string;
  destination: string;
}
export default function MissionCard(props: MissionCardProps) {
  const { name, year, country, destination } = props;
  return (
    <div data-testid="mission-card" className="mission-card">
      <p data-testid="mission-name" className="mission-name">
        {name}
      </p>
      <div className="mission-infos">
        <p data-testid="mission-year" className="mission-year">
          <Icon.MdCalendarMonth size={ 20 } />
          {year}
        </p>
        <p data-testid="mission-country" className="mission-country">
          <Icon.MdLocationOn size={ 20 } />
          {country}
        </p>
        <p data-testid="mission-destination" className="mission-destination">
          <Icon.MdFlag size={ 20 } />
          {destination}
        </p>
      </div>
    </div>
  );
}

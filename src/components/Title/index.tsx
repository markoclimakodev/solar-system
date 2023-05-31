import './index.css';

interface TitleProps {
  headline: string;
}
export default function Title({ headline }: TitleProps) {
  return <h2 className="headline">{headline}</h2>;
}

import { Link } from 'react-router-dom';
import '../styles/components/_panelbutton.scss';

export default function PanelButton({ label, link }) {
  return (
    <Link to={link} className="panel-button">
      {label}
    </Link>
  );
}

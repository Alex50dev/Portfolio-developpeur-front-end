import PanelButton from './PanelButton';
import '../styles/components/hall.scss';

export default function Hall() {
  return (
    <div className="hall">
      <div className="hall__painting">
        <h2>Bienvenue dans mon univers</h2>
      </div>
      <div className="hall__panels">
        <PanelButton label="Mon CV" link="/cv.pdf" />
        <PanelButton label="Mes Projets" link="#projects" />
      </div>
    </div>
  );
}

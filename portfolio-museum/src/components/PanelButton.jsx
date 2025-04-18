import '../styles/components/panel-button.scss';

export default function PanelButton({ label, link }) {
  return (
    <a href={link} className="panel-button" target={link.endsWith('.pdf') ? "_blank" : "_self"}>
      {label}
    </a>
  );
}

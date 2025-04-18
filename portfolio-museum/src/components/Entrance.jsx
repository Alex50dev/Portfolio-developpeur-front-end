import { motion } from 'framer-motion';
import '../styles/components/entrance.scss';

export default function Entrance({ onEnter }) {
  return (
    <motion.div
      className="entrance"
      initial={{ scale: 1, opacity: 1 }}
      exit={{ scale: 2, opacity: 0 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <div className="entrance__painting">
        <h1 className="entrance__title">Nom Prénom</h1>
        <p className="entrance__desc">Développeur Web Passionné</p>
      </div>
      <button className="entrance__button" onClick={onEnter}>
        Entrer
      </button>
    </motion.div>
  );
}

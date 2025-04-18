import { Routes, Route } from 'react-router-dom';
import PortfolioMuseum from './components/PortfolioMuseum';
import Projects from './pages/Projects';
import CV from './pages/CV';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioMuseum />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/cv" element={<CV />} />
    </Routes>
  );
}

export default App;

import { useState } from 'react';
import Entrance from './Entrance';
import Hall from './Hall';

export default function PortfolioMuseum() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <Entrance onEnter={() => setEntered(true)} />}
      {entered && <Hall />}
    </>
  );
}

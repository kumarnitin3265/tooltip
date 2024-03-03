import Tooltip from './Components/Tooltip';
import './App.css';
import { useState } from 'react';

function App() {

  const [isHover, setIsHover] = useState(false);
  

  return (
    <>
      <Tooltip isHover={isHover} setIsHover={setIsHover} position="right"/>
    </>
  );
}

export default App;

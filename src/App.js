import React, {useState} from 'react';
import './App.css';
import Home from './containers/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <NavBar active={active} setActive={setActive} />
      {active === 0 && <Home />}
    </div>
    
  );
}

export default App;

import { useState } from 'react';
import './App.css';
function App() {
  const [count, setCount] = useState(0);
  function getRedGradient(count) {
    const shift = (count * 15) % 360;
    const color1 = `hsl(${shift}, 100%, 50%)`;
    const color2 = `hsl(${(shift + 20) % 360}, 100%, 40%)`;
    const color3 = `hsl(${(shift + 40) % 360}, 100%, 30%)`;

    return {
      '--color1': color1,
      '--color2': color2,
      '--color3': color3
    };
  }

  return (
    <div classname ="container" style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Simple React Counter</h1>
      <p>You clicked {count} times</p>
      <button className = 'rainbow-button' style={getRedGradient(count)} onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default App;


import logo from './logo.svg';
import './App.css';
import NumberInput from './components/NumberInput';
import CalculatorForm from './components/CalculatorForm';
import { useState } from 'react';

function App() {
  const [titleState] = useState('React kalkulačka');
  const [xState, setXState] = useState(0);
  const [yState, setYState] = useState(0);

  const inputXonchange = (event) => {
    console.log(event.target.value);
    sexXState(event.target.value);
  };

  const inputYonchange = (event) => {
    console.log(event.target.value);
    sexYState(event.target.value);
  };

  return (
    <div className="App">
      <CalculatorForm/>
    </div>
  );
}

export default App;

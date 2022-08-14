import './App.css';
import Button from './components/Button'
import Screen from './components/Screen'
import Clear from './components/Clear'
import {useState} from 'react';
import {evaluate} from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const newInput = value =>{
    setInput(input + value)
  };

  const clearScreen = () => {
    setInput('');
  };

  const calculateResult = () =>{
    if (input) {
      setInput(evaluate(input));
    }else {
      alert('The value can not be empty, please enter a valid input!');
    } 

  };

  return (
    <div className='App'>
      <h1>Calculate</h1>
      <div className='principal-container'>
        <Screen input = {input}> </Screen>
        <div className='row'>
          <Button manageClick = {newInput}>1</Button>
          <Button manageClick = {newInput}>2</Button>
          <Button manageClick = {newInput}>3</Button>
          <Button manageClick = {newInput}>+</Button>
        </div>
        <div className='row'>
          <Button manageClick = {newInput}>4</Button>
          <Button manageClick = {newInput}>5</Button>
          <Button manageClick = {newInput}>6</Button>
          <Button manageClick = {newInput}>-</Button>
        </div>
        <div className='row'>
          <Button manageClick = {newInput}>7</Button>
          <Button manageClick = {newInput}>8</Button>
          <Button manageClick = {newInput}>9</Button>
          <Button manageClick = {newInput}>*</Button>
        </div>
        <div className='row'>
          <Button manageClick = {calculateResult}>=</Button>
          <Button manageClick = {newInput}>0</Button>
          <Button manageClick = {newInput}>.</Button>
          <Button manageClick = {newInput}>/</Button>
        </div>
        <div className='row'>
        <Clear manageClear = {clearScreen}>C</Clear>
        </div>
        

      </div>
    </div>
  );
}

export default App;

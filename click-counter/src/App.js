import './App.css';
import Button from './components/Button'
import Counter from './components/Counter'
import {useState} from 'react'

function App() {
  //Two Elements: Name state variable, function, 0 -> Initial values
  const [numClicks, setNumClicks] = useState(0); 

  const manageCLickF = () => {
    setNumClicks(numClicks + 1);  
  };

  const resetCount = () =>{ 
    setNumClicks(0);  
  };

  return (
    <div className="App">
      <div className ='container-head'>
        <h1>Counter Clicks!</h1>
      </div>

      <div className='container-counter'>
        <Counter  
          numberCLicks = {numClicks}        
        />
        <Button
          text = 'Click'
          clickButton = {true}
          manageCLick = {manageCLickF}/>
        <Button
          text = 'Reset'
          clickButton = {false}
          manageCLick = {resetCount}/>       
      </div>
    </div>
  );
}

export default App;

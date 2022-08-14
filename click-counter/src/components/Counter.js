import React from 'react' 
import '../styles/Counter.css';

function Counter({numberCLicks}){
  return (
      <div className='counter'>
        {numberCLicks}          
      </div>

  )


}

export default Counter;
import React from 'react';
import '../styles/Button.css'

function Button(props){

  const isSymbol = value  => {
    return ['-','*','+','/'].includes(value);
  };

  return(
    <div className = {`button-container ${isSymbol(props.children) ? 'operator' : ''}`.trimEnd()} 
         onClick = { () => props.manageClick(props.children)} >
        {props.children}  
    </div>
  )

}

export default Button;
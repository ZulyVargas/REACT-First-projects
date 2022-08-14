import React from  'react';
import '../styles/Button.css';

function Button({text, clickButton, manageCLick}){
	return (
		<button className={clickButton ? 'click-button' : 'reset-button'}
			onClick = {manageCLick}>
			{text}
		</button>
	)
}

export default Button;
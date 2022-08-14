import React from 'react';
import '../styles/Clear.css'

const Clear = (props) => (
    <div className='clear-button'
         onClick =  {props.manageClear}>
        {props.children}
    </div>
);


export default Clear;
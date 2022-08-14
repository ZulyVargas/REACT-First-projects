//Se importa React
import React from 'react';

//Se crea el componente como componente funcional
//Un componente funcional retorna un elemento jsx(html + javascript)
function Artist(props){
  var imgn = props.img 
  return (
    <div className='container-artist'>
      <img 
        className='imagen-user'
        src ={require(`../img/${props.img}.jpg`)} 
        alt = 'Foto del usuario'
        />
      <div className='container-text'>
        <p className='name-user'><strong>{props.name}</strong></p>
        <p className='occupation'>{props.occupation}</p>
        <p className='text-description'>{props.description}</p>
      </div>
    </div>

  );
}

export default Artist;
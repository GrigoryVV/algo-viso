import React from 'react';
import css from './Pole.module.css'

function Pole(props) {
  let color = props.color !== undefined ? props.color : '';

  return (
    <div className={`${color} ${css.pole}`} style={{height: props.value + 'px'}}>

    </div>
  );
}

export default Pole;
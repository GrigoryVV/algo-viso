import React from 'react';
import css from './Pole.module.css'

function Pole(props) {

  return (
    <div className={css.pole} style={{height: props.value + 'px'}}>

    </div>
  );
}

export default Pole;
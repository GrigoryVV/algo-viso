import React from 'react';
import css from './PolesField.module.css'
import Pole from './Pole/Pole';


function PolesField(props) {

  let polesElements = props.poles.map(pole => {
    return <Pole key={pole.index} value={pole.value} />
  });


  return (
      <div className={css.field}>
        {polesElements}
      </div>
  );
}

export default PolesField;
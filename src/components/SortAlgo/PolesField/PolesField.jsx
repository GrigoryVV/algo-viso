import React from 'react';
import css from './PolesField.module.css'
import Pole from './Pole/Pole';


function PolesField(props) {

  let polesElements = props.poles.map(pole => {
    if (pole.index === props.redId) {
      return <Pole key={pole.index} color='red' value={pole.value} />
    } else if (pole.index === props.greenId) {
      return <Pole key={pole.index} color='green' value={pole.value} />
    } else if (pole.index === props.blueId) {
      return <Pole key={pole.index} color='blue' value={pole.value} />
    } else {
      return <Pole key={pole.index} value={pole.value} />
    }
  });


  return (
      <div className={css.field}>
        {polesElements}
      </div>
  );
}

export default PolesField;
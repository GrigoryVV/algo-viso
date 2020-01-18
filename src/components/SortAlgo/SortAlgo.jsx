import React from 'react';
import css from './SortAlgo.module.css';
import PolesFieldContainer from './PolesField/PolesFieldContainer';


function SortAlgo(props) {
  return (
    <div className={css.wrap}>
      <PolesFieldContainer />
    </div>
  );
}

export default SortAlgo;
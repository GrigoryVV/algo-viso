import React from 'react';
import css from './PathAlgo.module.css'
import CommentsContainer from './Comments/CommentsContainer';
import NodesFieldContainer from './NodesField/NodesFieldContainer';


function PathAlgo(props) {
  return (
    <div className={css.wrap}>
      <NodesFieldContainer />
      <CommentsContainer/>
    </div>
  );
}

export default PathAlgo;
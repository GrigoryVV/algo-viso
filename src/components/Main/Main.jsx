import React from 'react';
import css from './Main.module.css'
import CommentsContainer from './Comments/CommentsContainer';
import NodesFieldContainer from './Node/NodesFieldContainer';


function Main(props) {
  return (
    <div className={css.wrap}>
      <NodesFieldContainer />
      <CommentsContainer/>
    </div>
  );
}

export default Main;
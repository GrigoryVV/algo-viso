import React from 'react';
import css from './CommentElement.module.css'

function CommentElement(props) {

  return (
    <div className={css.wrap}>
      <div className={css.message}>
        {props.comment}
      </div>
      <hr/>
    </div>
  );
}

export default CommentElement;
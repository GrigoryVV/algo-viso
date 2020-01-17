import React from 'react';
import css from './Node.module.css'

function Node() {

  function nodePressed(e) {
    e.target.classList.toggle(css.wall);
    e.target.parentNode.childNodes.forEach(node => {
      node.onmouseenter = () => {
        node.classList.toggle(css.wall);
      };
    });
  }

  function nodeUnpressed(e) {
    e.target.parentNode.childNodes.forEach(node => {
      node.onmouseenter = null;
    });
  }

  return (
    <div className={css.node} onMouseDown={nodePressed} onMouseUp={nodeUnpressed} >

    </div>
  );
}

export default Node;
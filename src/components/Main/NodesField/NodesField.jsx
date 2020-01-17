import React from 'react';
import Node from './Node/Node'
import css from './NodesField.module.css'


function NodesField(props) {

  let nodeElements = props.nodes.map(row => {
      return row.map(node => {
          return <Node key={node.id} />
      });
      
  });



  return (
      <div className={css.field}>
        {nodeElements}
      </div>
  );
}

export default NodesField;
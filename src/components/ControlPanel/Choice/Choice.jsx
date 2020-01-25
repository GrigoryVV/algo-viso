import React from 'react';
import css from './Choice.module.css'

function Choice(props) {

    let listData = props.listData.map(data => {
        if (data.name === props.selectedAlgo) {
            return <li 
                key={data.id} 
                onClick={() => props.selectSortType(data.name)}
                className={css.active}
                >{data.name}</li>;
        } else {
            return <li key={data.id} onClick={() => {
                props.selectSortType(data.name);
            }} >{data.name}</li>;
        }
    });

    return (
        <ul className={`${props.className} ${css.algo_choice}`}>
            {listData}
        </ul>
    );
}

export default Choice;
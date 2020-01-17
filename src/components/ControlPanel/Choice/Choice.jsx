import React from 'react';
import css from './Choice.module.css'

function Choice(props) {

    let listData = props.listData.map(data => {
        return <li key={data.id}>{data.name}</li>;
    });

    return (
        <ul className={css.algo_choice}>
            {listData}
        </ul>
    );
}

export default Choice;
import React from 'react';
import css from './ControlPanel.module.css'
import Choice from './Choice/Choice';


function ControlPanel(props) {
    return (
        <div className={css.wrap}>
            <ul className={css.menu}>
                <li>
                    <span className={css.btn}>Тип Алгоритма</span>
                    <Choice listData={props.store.getState().controlPanel.algorithms}/>
                </li>
                <li>
                    <span className={css.btn}>Лабиринт</span>
                    <Choice listData={props.store.getState().controlPanel.mazes}/>
                </li>
                <li className={css.btn}>Очистить путь</li>
                <li className={css.btn}>Очистить доску</li>
                <li className={css.btn}>Визуализировать</li>
            </ul>
        </div>
    );
}

export default ControlPanel;

//
//
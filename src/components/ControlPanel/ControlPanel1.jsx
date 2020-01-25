import React from 'react';
import css from './ControlPanel.module.css'
import Choice from './Choice/Choice';


function ControlPanel(props) {
    
    let classForMenu = '';
    if (!props.menuIsOpen) {
        classForMenu = 'hide';
    }

    function switchMenu() {
        props.switchMenu();
    }

    function mixPoles() {
        props.mixPoles();
    }

    function visualizeSort() {
        props.visualizeSort(props.selectedAlgo);
    }

    if (props.sortingPage) {
        return (
            <div className={css.wrap}>
                <ul className={css.menu}>
                    <li className={css.btn}>
                        <span className={css.hover_btn} onClick={switchMenu}>
                            Тип Алгоритма
                        </span>
                        <Choice 
                            listData={props.sorting} 
                            className={classForMenu}
                            selectedAlgo={props.selectedAlgo}
                            selectSortType={props.selectSortType}
                        />
                    </li>
                    <li className={css.btn}>
                        <span className={css.hover_btn} onClick={mixPoles}>Перемешать</span>
                    </li>
                    <li className={css.btn}>
                        <span className={css.hover_btn} onClick={visualizeSort}>Сортировать</span>
                    </li>
                </ul>
            </div>
        );
    } else {
        return (
            <div className={css.wrap}>
                <ul className={css.menu}>
                    <li className={css.btn}>
                        <span className={css.hover_btn} onClick={switchMenu}>Тип Алгоритма</span>
                        <Choice listData={props.pathFinding} className={classForMenu}/>
                    </li>
                    <li className={css.btn}>
                        <span className={css.hover_btn}>Очистить путь</span>
                    </li>
                    <li className={css.btn}>
                        <span className={css.hover_btn}>Очистить доску</span>
                    </li>
                    <li className={css.btn}>
                        <span className={css.hover_btn}>Визуализировать</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ControlPanel;
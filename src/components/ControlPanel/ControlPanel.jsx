import React from 'react';
import css from './ControlPanel.module.css'
import Choice from './Choice/Choice';


class ControlPanel extends React.Component {

    switchMenu = () => {
        this.props.switchMenu();
    }

    mixPoles = () => {
        this.props.mixPoles();
    }
    
    visualizeSort = () => {
        this.props.switchControls();
        let timerID = setInterval(() => {
            if (this.props.isSorted) {
                clearInterval(timerID);
                this.props.switchControls();
            }
            console.log(this.props.isSorted);
            this.props.visualizeSort(this.props.selectedAlgo)
        }, 10)
    }

    stopSort = () => {
        this.props.stopSort();
    }

    render() {
        let classForMenu = !this.props.menuIsOpen ? 'hide' : '';

        let controlsSwitchClass = this.props.busy ? '' : 'hide';

        if (this.props.sortingPage) {
            return (
                <div className={css.wrap}>
                    <ul className={css.menu}>
                        <li className={css.btn}>
                            <span className={css.hover_btn} onClick={this.switchMenu}>
                                Тип Алгоритма
                            </span>
                            <Choice 
                                listData={this.props.sorting} 
                                className={classForMenu}
                                selectedAlgo={this.props.selectedAlgo}
                                selectSortType={this.props.selectSortType}
                            />
                        </li>
                        <li className={css.btn}>
                            <span className={css.hover_btn} onClick={this.mixPoles}>Перемешать</span>
                        </li>
                        <li className={css.btn}>
                            <span className={css.hover_btn} onClick={this.visualizeSort}>Сортировать</span>
                        </li>
                    </ul>
                    <div onClick={this.stopSort} className={`${controlsSwitchClass} ${css.controls_off}`}></div>
                </div>
            );
        } else {
            return (
                <div className={css.wrap}>
                    <ul className={css.menu}>
                        <li className={css.btn}>
                            <span className={css.hover_btn} onClick={this.switchMenu}>Тип Алгоритма</span>
                            <Choice listData={this.props.pathFinding} className={classForMenu}/>
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
                    <div className={`${controlsSwitchClass} ${css.controls_off}`}></div>
                </div>
            );
        }
    }
}

export default ControlPanel;
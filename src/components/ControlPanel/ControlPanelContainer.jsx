import { connect } from 'react-redux';
import ControlPanel from './ControlPanel';
import { switchMenuAC, selectSortTypeAC, switchControlsAC } from '../../redux/controlPanelReducer';
import { mixPolesAC, visualizeSortAC, stopSortAC } from '../../redux/sortAlgoReducer';

function mapStateToProps(state){
    return {
        sorting: state.controlPanel.sorting,
        pathFinding: state.controlPanel.pathFinding,
        selectedAlgo: state.controlPanel.selectedAlgo,
        busy: state.controlPanel.busy,
        menuIsOpen: state.controlPanel.menuIsOpen,
        sortingPage: state.header.sortingPage,
        isSorted: state.sortAlgo.isSorted
    }
}

function mapDispatchToProps(dispatch){
    return {
        switchMenu: () => {
            dispatch(switchMenuAC());
        },
        selectSortType: (sortName) => {
            dispatch(selectSortTypeAC(sortName));
        },
        mixPoles: () => {
            dispatch(mixPolesAC());
        },
        visualizeSort: (sortName) => {
            dispatch(visualizeSortAC(sortName));
        },
        stopSort: () => {
            dispatch(stopSortAC());
        },
        switchControls: () => {
            dispatch(switchControlsAC());
        }
    }
}

const ControlPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ControlPanel)

export default ControlPanelContainer;
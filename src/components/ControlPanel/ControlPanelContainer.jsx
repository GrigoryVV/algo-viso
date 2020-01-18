import { connect } from 'react-redux';
import ControlPanel from './ControlPanel';
import { switchMenuAC } from '../../redux/controlPanelReducer';
import { mixPolesAC } from '../../redux/sortAlgoReducer';

function mapStateToProps(state){
    return {
        sorting: state.controlPanel.sorting,
        pathFinding: state.controlPanel.pathFinding,
        selectedAlgo: state.controlPanel.selectedAlgo,
        menuIsOpen: state.controlPanel.menuIsOpen,
        sortingPage: state.header.sortingPage
    }
}

function mapDispatchToProps(dispatch){
    return {
        switchMenu: () => {
            dispatch(switchMenuAC());
        },
        mixPoles: () => {
            dispatch(mixPolesAC());
        }
    }
}

const ControlPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ControlPanel)

export default ControlPanelContainer;
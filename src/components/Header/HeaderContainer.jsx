import { connect } from 'react-redux';
import Header from './Header';
import { selectSortingAC, selectPathFindAC } from '../../redux/headerReducer';

function mapStateToProps(state){
    return {
        sortingPage: state.header.sortingPage
    }
}

function mapDispatchToProps(dispatch){
    return {
        selectSorting: () => {
            dispatch(selectSortingAC())
        },
        selectPathFind: () => {
            dispatch(selectPathFindAC())
        }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
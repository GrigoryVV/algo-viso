import {createStore, combineReducers} from 'redux';
import mainReducer from "./pathAlgoReducer";
import controlPanelReducer from "./controlPanelReducer";
import headerReducer from './headerReducer';
import sortAlgoReducer from './sortAlgoReducer';

let reducers = combineReducers({
    header: headerReducer,
    main: mainReducer,
    controlPanel: controlPanelReducer,
    sortAlgo: sortAlgoReducer
});

let store = createStore(reducers);

export default store;
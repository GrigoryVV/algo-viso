import {createStore, combineReducers} from 'redux';
import mainReducer from "./mainReducer";
import controlPanelReducer from "./controlPanelReducer";

let reducers = combineReducers({
    main: mainReducer,
    controlPanel: controlPanelReducer
});

let store = createStore(reducers);

export default store;
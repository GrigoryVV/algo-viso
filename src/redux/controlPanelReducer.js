const SWITCH_MENU = 'SWITCH_MENU';
const SELECT_SORT_TYPE = 'SELECT_SORT_TYPE';
const SWITCH_CONTROLS = 'SWITCH_CONTROLS';

let initialState = {
    sorting: [
        {
            id: 0,
            name: "Bubble Sort" 
        },
        {
            id: 1,
            name: "Quick Sort" 
        },
        {
            id: 2,
            name: "Choise Sort" 
        },
        {
            id: 3,
            name: "Insert Sort" 
        },
        {
            id: 4,
            name: "Merge Sort" 
        }
    ],
    pathFinding: [
        {
            id: 0,
            name: "Dijkstra's Algorithm" 
        },
        {
            id: 1,
            name: "A* Search" 
        },
        {
            id: 2,
            name: "Greedy Best-first Search" 
        },
        {
            id: 3,
            name: "Swarm Algorithm" 
        },
        {
            id: 4,
            name: "Convergent Swarm Algorithm" 
        },
        {
            id: 5,
            name: "Bidirectional Swarm Algorithm" 
        },
        {
            id: 6,
            name: "Breadth-first Search" 
        },
        {
            id: 7,
            name: "Depth-first Search" 
        }
    ],
    selectedAlgo: '',
    menuIsOpen: false,
    busy: false
};

function controlPanelReducer(state = initialState, action) {
    switch(action.type) {
        case SWITCH_MENU:
            return state.menuIsOpen ? {
                ...state,
                menuIsOpen: false
            } : {
                ...state,
                menuIsOpen: true
            };
        case SELECT_SORT_TYPE:
            return {
                ...state,
                selectedAlgo: action.sortName
            };
        case SWITCH_CONTROLS:
            return state.busy ? {
                ...state,
                busy: false
            } : {
                ...state,
                busy: true
            };
        default:
            return state;
    }
}

export const switchMenuAC = () => {
    return {
      type: SWITCH_MENU
    };
}

export const selectSortTypeAC = (sortName) => {
    return {
      type: SELECT_SORT_TYPE,
      sortName: sortName
    };
}

export const switchControlsAC = () => {
    return {
      type: SWITCH_CONTROLS
    };
}

export default controlPanelReducer;
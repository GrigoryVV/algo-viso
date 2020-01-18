const SWITCH_MENU = 'SWITCH_MENU';

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
            name: "Some Sort" 
        },
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
    menuIsOpen: false
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
        default:
            return state;
    }
}

export const switchMenuAC = () => {
    return {
      type: SWITCH_MENU
    };
}

export default controlPanelReducer;
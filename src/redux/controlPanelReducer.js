let initialState = {
    mazes: [
        {
            id: 0,
            name: "Лабиринт 1" 
        },
        {
            id: 1,
            name: "Лабиринт 2" 
        },
        {
            id: 2,
            name: "Лабиринт 3" 
        },
        {
            id: 3,
            name: "Лабиринт 4" 
        },
    ],
    algorithms: [
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
};

function controlPanelReducer(state = initialState, action) {

    return state;
}

export default controlPanelReducer;
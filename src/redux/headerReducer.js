const SORTING_IS_SELECTED = 'SORTING_IS_SELECTED'
const PATHFIND_IS_SELECTED = 'PATHFIND_IS_SELECTED'

let initialState = {
    sortingPage: true
};

function headerReducer(state = initialState, action) {
    switch(action.type) {
        case SORTING_IS_SELECTED:
            return {
                ...state,
                sortingPage: true
            };
        case PATHFIND_IS_SELECTED:
            return {
                ...state,
                sortingPage: false
            };
        default:
            return state;
    }
}

export const selectSortingAC = () => {
    return {
      type: SORTING_IS_SELECTED
    }
}
export const selectPathFindAC = () => {
    return {
      type: PATHFIND_IS_SELECTED
    }
}

export default headerReducer;
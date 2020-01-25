import bubbleSort from "../Algorithms/bubbleSort";
import choiseSort from "../Algorithms/choiceSort";
import insertSort from "../Algorithms/insertSort";
import mergeSortManager from "../Algorithms/mergeSort";

const MIX_POLES = 'MIX_POLES'
const VISUALIZE_SORT = 'VISUALIZE_SORT';
const STOP_SORT = 'STOP_SORT';

const BUBBLE_SORT = 'Bubble Sort';
const CHOISE_SORT = 'Choise Sort';
const INSERT_SORT = 'Insert Sort';
const MERGE_SORT = 'Merge Sort';

let poles = [];

for (let i = 0; i < 100; i++) {
    poles.push({
        value: 5 * (i + 1),
        index: i
    });
}

let initialState = {
    poles: poles,
    firstIter: -1,
    secondIter: -1,
    thirdIter: -1,
    firstIterLimit: 10,
    secondIterLimit: 0,
    redId: -1,
    greenId: -1,
    isStart: true,
    isSorted: true
};

function sortAlgoReducer(state = initialState, action) {
    switch(action.type) {
        case MIX_POLES: {
            let changedState = {...state, poles:[...state.poles], isSorted: false};
            let temp, j;
            for (let i = changedState.poles.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                temp = changedState.poles[j];
                changedState.poles[j] = changedState.poles[i];
                changedState.poles[i] = temp;
            }
            return changedState;
        }
        case VISUALIZE_SORT: {
            switch(action.sortName) {
                case BUBBLE_SORT:
                    return bubbleSort(state);
                case CHOISE_SORT:
                    return choiseSort(state);
                case INSERT_SORT:
                    return insertSort(state);
                case MERGE_SORT:
                    return mergeSortManager(state);
                default:
                    return state;
            }
        }
        case STOP_SORT: {
            return {
                ...state,
                redId: -1,
                greenId: -1,
                isStart: true,
                isSorted: true
            }
        }
        default:
            return state;
    }
    
}

export const mixPolesAC = () => {
    return {
        type: MIX_POLES
    }
}

export const stopSortAC = () => {
    return {
        type: STOP_SORT
    }
}

export const visualizeSortAC = (sortName) => {
    return {
      type: VISUALIZE_SORT,
      sortName: sortName
    };
}

export default sortAlgoReducer;
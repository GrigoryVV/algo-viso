let stepsList = [];

function quickSort(array, from=0, to=array.length) {

    if (to - from === 0) return;

    let pivot = from;
    let storedIndex = pivot + 1;

    for (let i = pivot + 1; i < to; i++) {
        if (array[i].value < array[pivot].value) {
            let temp = array[i];
            array[i] = array[storedIndex];
            array[storedIndex] = temp;
            stepsList.push({
                from: i,
                to: storedIndex,
                pivot: pivot
            });
            storedIndex++;
        }
    }

    let temp = array[pivot];
    array[pivot] = array[storedIndex - 1];
    array[storedIndex - 1] = temp;

    stepsList.push({
        from: pivot,
        to: storedIndex - 1,
        pivot: pivot
    });

    quickSort(array, from, storedIndex - 1);
    quickSort(array, storedIndex, to);
}

function quickSortManager(state) {
    let changedState;

    if (state.isSorted) {
        stepsList = [];
        return state;
    }

    if (state.isStart) {
        let arrayToSort = [...state.poles];
        quickSort(arrayToSort);
        changedState = {
            ...state,
            poles:[...state.poles],
            firstIter: 0,
            redId: -1,
            greenId: -1,
            blueId: -1,
            isStart: false
        };
    } else {
        changedState = {
            ...state,
            poles:[...state.poles],
            firstIter: state.firstIter + 1
        };
        if (changedState.firstIter >= stepsList.length) {
            stepsList = [];
            return {
                ...state,
                firstIter: -1,
                redId: -1,
                greenId: -1,
                blueId: -1,
                isSorted: true,
                isStart: true
            };
        }
    }

    let secondIter = stepsList[changedState.firstIter].from;
    let thirdIter = stepsList[changedState.firstIter].to;
    let pivot = stepsList[changedState.firstIter].pivot;
    changedState.redId = changedState.poles[thirdIter].index;
    changedState.greenId = changedState.poles[secondIter].index;
    changedState.blueId = changedState.poles[pivot].index;

    let temp = changedState.poles[thirdIter];
    changedState.poles[thirdIter] = changedState.poles[secondIter];
    changedState.poles[secondIter] = temp;

    return changedState;
}

export default quickSortManager;
function insertSort(state) {
    let len = state.poles.length;
    let firstIter = 1;
    let secondIter = 1;
    let changedState;
    if (state.isSorted) return state;
    if (state.isStart) {
        changedState = {
            ...state,
            poles: [...state.poles],
            firstIter: firstIter,
            secondIter: secondIter,
            firstIterLimit: len,
            secondIterLimit: 0,
            isStart: false
        };
        changedState.redId = changedState.poles[secondIter].index;
        changedState.greenId = changedState.poles[firstIter].index;
    } else {
        secondIter = state.secondIter - 1;
        if (secondIter <= state.secondIterLimit) {
            firstIter = state.firstIter + 1;
            secondIter = firstIter;
            if (firstIter === len) return {
                ...state,
                firstIter: -1,
                secondIter: -1,
                isStart: true,
                isSorted: true,
                redId: -1,
                greenId: -1
            };
        } else {
            firstIter = state.firstIter
        }
        changedState = {
            ...state,
            poles: [...state.poles],
            firstIter: firstIter,
            secondIter: secondIter
        };
        changedState.redId = changedState.poles[secondIter].index;
        changedState.greenId = changedState.poles[firstIter].index;
    }

    if (changedState.poles[secondIter].value < changedState.poles[secondIter - 1].value) {
        let temp = changedState.poles[secondIter];
        changedState.poles[secondIter] = changedState.poles[secondIter - 1];
        changedState.poles[secondIter - 1] = temp;
    }
    return changedState;
}

export default insertSort;
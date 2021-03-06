function bubbleSort(state) {
    let len = state.poles.length;
    let firstIter = 1;
    let secondIter = 0;
    let changedState;
    if (state.isSorted) return state;
    if (state.isStart) {
        changedState = {
            ...state,
            poles: [...state.poles],
            firstIter: firstIter,
            secondIter: secondIter,
            firstIterLimit: len,
            secondIterLimit: len - firstIter,
            isStart: false
        };
        changedState.redId = changedState.poles[secondIter].index;
    } else {
        secondIter = state.secondIter + 1;
        if (secondIter >= state.secondIterLimit) {
            secondIter = 0;
            firstIter = state.firstIter + 1;
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
            secondIter: secondIter,
            secondIterLimit: len - firstIter
        };
    }
    
    if (changedState.poles[secondIter].value > changedState.poles[secondIter + 1].value) {
        let temp = changedState.poles[secondIter];
        changedState.poles[secondIter] = changedState.poles[secondIter + 1];
        changedState.poles[secondIter + 1] = temp;
    } else {
        changedState.redId = changedState.poles[secondIter + 1].index;
    }

    return changedState;
}

export default bubbleSort;
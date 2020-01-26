let stepsList = [];

function merge(array, lStart, lEnd) {
    
    let lDelta = lEnd - lStart;

    let i = 0,
        k = lDelta,
        limit = lDelta;

    while (i < limit && k < array.length) {
        if (array[k].value < array[i].value) {
            array = array.slice(0, i).concat(
                array.slice(k, k+1),
                array.slice(i, limit),
                array.slice(k+1)
            );
            stepsList.push({
                from: k + lStart,
                to: i + lStart,
                did: true
            });
            limit++;
            i++;
            k++;
        } else {
            stepsList.push({
                from: i + lStart,
                to: i + lStart,
                did: false
            });
            i++;
        }
    }
    while (i < limit) {
        stepsList.push({
            from: i + lStart,
            to: i + lStart,
            did: false
        });
        i++;
    }
    while (k < array.length) {
        stepsList.push({
            from: k + lStart,
            to: k + lStart,
            did: false
        });
        k++;
    }
    return array;
}

function mergeSort(array, start=0, end=array.length) {
    if (array.length <= 1) {
        return array;
    }
    let middle = Math.floor(array.length / 2);
    let leftArray = [];
    let leftStart = start;
    let leftEnd = start + middle;
    let rightArray = [];
    let rightStart = start + middle;   
    let rightEnd = end;   

    for (let i = 0; i < middle; i++) {
        leftArray.push(array[i]);
    }
    for (let i = middle; i < array.length; i++) {
        rightArray.push(array[i]);
    }

    mergeSort(leftArray, leftStart, leftEnd);
    mergeSort(rightArray, rightStart, rightEnd);

    let arrayToMerge = leftArray.concat(rightArray);
    let sortedArray = merge(arrayToMerge, leftStart, leftEnd);
    for (let i = 0; i < array.length; i++) {
        array[i] = sortedArray[i];
    }
    return array;
}

function mergeSortManager(state) {

    let changedState;

    if (state.isSorted) {
        stepsList = [];
        return state;
    }

    if (state.isStart) {
        let arrayToSort = [...state.poles];
        mergeSort(arrayToSort);
        changedState = {
            ...state,
            poles:[...state.poles],
            firstIter: 0,
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
                secondIter: -1,
                thirdIter: -1,
                redId: -1,
                greenId: -1,
                isSorted: true,
                isStart: true
            };
        }
    }

    changedState.secondIter = stepsList[changedState.firstIter].from;
    changedState.thirdIter = stepsList[changedState.firstIter].to;
    changedState.redId = changedState.poles[changedState.thirdIter].index;
    changedState.greenId = changedState.poles[changedState.secondIter].index;
    
    if (stepsList[changedState.firstIter].did) {
        changedState.poles = changedState.poles.slice(
            0, changedState.thirdIter
        ).concat(
            changedState.poles.slice(changedState.secondIter, changedState.secondIter+1),
            changedState.poles.slice(changedState.thirdIter, changedState.secondIter),
            changedState.poles.slice(changedState.secondIter+1)
        );
    }

    return changedState;
}

export default mergeSortManager;
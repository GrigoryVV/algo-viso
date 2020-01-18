const MIX_POLES = 'MIX_POLES'

let poles = [];

for (let i = 0; i < 100; i++) {
    poles.push({
        value: 5 * (i + 1),
        index: i
    });
}

let initialState = {
    poles: poles
};

function sortAlgoReducer(state = initialState, action) {
    switch(action.type) {
        case MIX_POLES: {
            let changedState = {...state, poles:[...state.poles]};
            let temp, j;
            for (let i = changedState.poles.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                temp = changedState.poles[j];
                changedState.poles[j] = changedState.poles[i];
                changedState.poles[i] = temp;
            }
            return changedState;
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

export default sortAlgoReducer;
const UPD_NEW_COMMENT_TEXT = 'UPD-NEW-COMMENT-TEXT';
const ADD_COMMENT = 'ADD-COMMENT';

let nodes = [];
let fieldWidth = 1000;
let fieldHeight = 500;

for (let h = 0; h < fieldWidth / 20; h++) {
    nodes.push([]);
    for (let v = 0; v < fieldHeight / 20; v++) {
      nodes[h].push({
        id:`${h}_${v}`,
        horizontIndex: h,
        verticalIndex: v,
        weight: 1,
        start: false,
        finish: false
      });
    }
}

let initialState = {
    comments: ['Привет Мир!', 'Я Люблю Пропсы'],
    newCommentText: '',
    nodes: nodes
};

function mainReducer(state = initialState, action) {

    switch(action.type) {
        case ADD_COMMENT:
            let commentText = state.newCommentText;
            return {
                ...state,
                newCommentText: '',
                comments: [...state.comments, commentText]
            };                       
        case UPD_NEW_COMMENT_TEXT:
            return {
                ...state,
                newCommentText: action.text
            };
        default:
            return state;
    }
}

export const addCommentActionCreator = () => {
    return {
      type: ADD_COMMENT
    }
}
export const updNewCommentTextActionCreator = (text) => {
    return {
      type: UPD_NEW_COMMENT_TEXT,
      text: text
    }
}

export default mainReducer;
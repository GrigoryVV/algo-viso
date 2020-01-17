import { updNewCommentTextActionCreator, addCommentActionCreator } from '../../../redux/mainReducer';
import Comments from './Comments';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    comments: state.main.comments,
    newCommentText: state.main.newCommentText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addComment: () => {
      dispatch(addCommentActionCreator());
    },
    changeText: (text) => {
      dispatch(updNewCommentTextActionCreator(text));
    }
  }
}

const CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(Comments)

export default CommentsContainer;
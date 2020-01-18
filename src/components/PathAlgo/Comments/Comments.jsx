import React from 'react';
import css from './Comments.module.css'
import CommentElement from './CommentElement/CommentElement'


class Comments extends React.Component {

  addComment = () => {
    this.props.addComment();
  }

  changeText = (e) => {
    let text = e.target.value;
    this.props.changeText(text);
  }

  render() {

    let commentsToShow = this.props.comments.map(comment => {
      return <CommentElement comment={comment} />;
    });

    return (
      <div className={css.wrap}>
        <div className={css.wrap_flex}>
          <div className={css.textarea}>
            <textarea
            onChange={this.changeText}
            value={this.props.newCommentText}/>
          </div>
          <div className={css.comment_btn}>
            <button onClick={this.addComment}>Опубликовать</button>
          </div>
        </div>
        <div className={css.comment_field}>
          {commentsToShow}
        </div>
      </div>
    );
  }
}

export default Comments;
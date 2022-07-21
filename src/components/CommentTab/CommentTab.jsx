import CommentForm from '../CommentForm/CommentForm';
import styles from './CommentTab.module.css'

const CommentTab = (props) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainNextDiv}>
          <CommentForm user={props.user} event={props.event} comments={props.comments} setEvent={props.setEvent} handleDeleteComment={props.handleDeleteComment}/>
        </div>
      </div>
    </>
  );
}

export default CommentTab;
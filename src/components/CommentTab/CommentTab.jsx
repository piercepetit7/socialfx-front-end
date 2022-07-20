import CommentForm from '../CommentForm/CommentForm';
import styles from './CommentTab.module.css'

const CommentTab = (props) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainNextDiv}>
          <CommentForm event={props.event} comments={props.comments} setComments={props.setComments} handleDeleteComment={props.handleDeleteComment}/>
        </div>
      </div>
    </>
  );
}

export default CommentTab;
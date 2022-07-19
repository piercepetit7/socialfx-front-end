import CommentForm from '../CommentForm/CommentForm';
import styles from './CommentTab.module.css'

const CommentTab = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainNextDiv}>
          <div className={styles.commentArea}>
            <h1>CommentTab</h1>
          </div>
          <CommentForm />
        </div>
      </div>
    </>
  );
}

export default CommentTab;
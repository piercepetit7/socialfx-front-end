import CommentForm from '../CommentForm/CommentForm';
import styles from './CommentTab.module.css'

const CommentTab = (props) => {

  // console.log(props)
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainNextDiv}>
          <div className={styles.commentArea}>
            <h1>CommentTab</h1>
          </div>
          <CommentForm event={props.state}/>
        </div>
      </div>
    </>
  );
}

export default CommentTab;
import CommentForm from '../CommentForm/CommentForm';
import styles from './CommentTab.module.css'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import * as eventService from '../../services/eventService'

const CommentTab = (props) => {
  // const [comments, setComments] = useState(props.event?.comments)
  // useEffect(() => {
  //   const getComments = async () => {
  //     const formData = await eventService.getAllComments()
  //     setComments(props.state.event.comments)
  //   }
  // })

  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainNextDiv}>
          {/* <div className={styles.commentArea}>
            <h1 className={styles.commentTab}>CommentTab</h1>
            {comments?.map(comment =>
              <li className={styles.comment} key={comment._id}><button onClick={() => handleDeleteComment(comment._id)}><FontAwesomeIcon icon={faTrashCan}/></button>{comment.content}</li>
            )}
          </div> */}
          <CommentForm event={props.event} comments={props.comments} setComments={props.setComments} handleDeleteComment={props.handleDeleteComment}/>
        </div>
      </div>
    </>
  );
}

export default CommentTab;
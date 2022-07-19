import CommentForm from '../CommentForm/CommentForm';
import styles from './CommentTab.module.css'
import { useEffect, useState } from 'react';
import * as eventService from '../../services/eventService'


const CommentTab = (props) => {
  const [comments, setComments] = useState(props.event?.comments)
  useEffect(() => {
  //   const getComments = async () => {
  //     const formData = await eventService.getAllComments()
  //     setComments(props.state.event.comments)
  //   }
  })

  // console.log('comments' ,props.state.event.comments)

  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainNextDiv}>
          <div className={styles.commentArea}>
            <h1>CommentTab</h1>
            {comments?.map(comment =>
              <li key={comment._id}>{comment.content}</li>
            )}
          </div>
          <CommentForm event={props.event} comments={comments} setComments={setComments}/>
        </div>
      </div>
    </>
  );
}

export default CommentTab;
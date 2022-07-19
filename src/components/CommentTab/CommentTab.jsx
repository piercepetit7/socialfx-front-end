import CommentForm from '../CommentForm/CommentForm';
import styles from './CommentTab.module.css'
import { useEffect } from 'react';
import * as eventService from '../../services/eventService'


const CommentTab = (props) => {

  useEffect(() => {
  //   const getComments = async () => {
  //     const formData = await eventService.getAllComments()
  //     setComments(props.state.event.comments)
  //   }
  })

  console.log('comments' ,props.state.event.comments)

  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainNextDiv}>
          <div className={styles.commentArea}>
            <h1>CommentTab</h1>
            {props.state.event.comments.map(comment =>
              <li>{comment.content}</li>
            )}
          </div>
          <CommentForm event={props.state}/>
        </div>
      </div>
    </>
  );
}

export default CommentTab;
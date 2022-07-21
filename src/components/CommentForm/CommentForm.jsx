import { useState, useRef} from 'react';
import * as eventService from '../../services/eventService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import styles from './CommentForm.module.css'



const CommentForm = (props) => {
  const formElement = useRef()
  const [commentData, setCommentData] = useState({
    content:''
  })

  const handleChange = evt => {
    setCommentData({...commentData, [evt.target.name]: evt.target.value})
  }

  const handleCommentSubmit = async (evt) => {
    evt.preventDefault()
    const updatedEvent = await eventService.createComment(commentData, props.event._id)
    props.setEvent(updatedEvent)
    setCommentData({content:''})
  }
console.log(props.user.profile, 'hello')
  return (
    <>
      <div>
        <h1>CommentTab</h1>
          {props.comments.map((comment, idx) =>
            <li 
              className={styles.list} 
              key={idx}
            >
              {comment.author?.name} said: {comment.content}
              {props.user?.profile === comment?.author?._id &&
                <button className={styles.delete} onClick={() => props.handleDeleteComment(comment._id, props.event._id)}>
                  <FontAwesomeIcon icon={faTrashCan}/>
                </button>
              }
            </li>,
          
          console.log(props.comments)
        )}
        </div>
      <form autoComplete="off" ref={formElement} onSubmit={handleCommentSubmit}>
        <label htmlFor="comment-input">Comment:</label>
        <textarea 
          type="text" 
          name="content"
          value={commentData.content}
          onChange={handleChange}
          required={true}
        />
        <button
          type='submit'
          >
            Add Comment!
        </button>
      </form>

    </>
  );
}

export default CommentForm;
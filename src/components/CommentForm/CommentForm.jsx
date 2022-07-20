import { useState, useRef} from 'react';
import * as eventService from '../../services/eventService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'



const CommentForm = (props) => {
  const formElement = useRef()
  const [formData, setFormData] = useState({
    content:''
  })

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleCommentSubmit = async (evt) => {
    evt.preventDefault()
    const comment = await eventService.createComment(formData, props.event._id)
    props.setComments([...props.comments, comment])
    setFormData({content:''})
  }

  return (
    <>
      <div>
        <h1>CommentTab</h1>
          {props.comments?.map((comment, idx) =>
            <li  key={idx}><button onClick={() => props.handleDeleteComment(comment._id, props.event._id)}><FontAwesomeIcon icon={faTrashCan}/></button>{comment.content}</li>
          )}
        </div>
      <form autoComplete="off" ref={formElement} onSubmit={handleCommentSubmit}>
        <label htmlFor="comment-input">Comment:</label>
        <textarea 
          type="text" 
          name="content"
          value={formData.content}
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
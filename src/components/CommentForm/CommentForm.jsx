import { useState, useRef } from 'react';
import * as eventService from '../../services/eventService'




const CommentForm = (props) => {
  const formElement = useRef()
  const [formData, setFormData] = useState({
    comments:''
  })

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleCommentSubmit = evt => {
    evt.preventDefault()
    eventService.createComment(formData, props.event._id)
    console.log(formData)
  }


  return (
    <>
      <form autoComplete="off" ref={formElement} onSubmit={handleCommentSubmit}>
        <label htmlFor="comment-input">Comment:</label>
        <textarea 
          type="text" 
          name="comments"
          value={formData.comments}
          onChange={handleChange}
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
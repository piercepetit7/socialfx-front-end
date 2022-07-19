import { useState, useRef } from 'react';
import * as eventService from '../../services/eventService'




const CommentForm = (props) => {
  const formElement = useRef()
  const [formData, setFormData] = useState({
    content:''
  })

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleCommentSubmit = evt => {
    evt.preventDefault()
    eventService.createComment(formData, props.event.event._id)
    console.log(formData)
  }
console.log('HELLO', props.event.event._id)

  return (
    <>
      <form autoComplete="off" ref={formElement} onSubmit={handleCommentSubmit}>
        <label htmlFor="comment-input">Comment:</label>
        <textarea 
          type="text" 
          name="content"
          value={formData.content}
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
import { useState, useRef, useEffect } from 'react';
import * as eventService from '../../services/eventService'




const CommentsForm = () => {
  const formElement = useRef()
  const [formData, setFormData] = useState({
    comment:''
  })

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleCommentSubmit = evt => {
    evt.preventDefault()
    eventService.createComment()
  }

  return (
    <>
      <form autoComplete="off" ref={formElement} onSubmit={handleCommentSubmit}>
        <label htmlFor="comment-input">Comment:</label>
        <textarea 
          type="text" 
          name="comment"
          value={formData.comment}
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

export default CommentsForm;
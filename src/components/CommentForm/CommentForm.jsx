import { useState, useRef, useEffect } from 'react';





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
    console.log('button works!')
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
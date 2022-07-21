import { useState, } from "react"
import styles from '../../AddDetails/AddDetails.module.css'

const ActForm = (props) => {
  const [formData, setFormData] = useState({
    actName:''
  })
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleActSubmit = evt => {
    evt.preventDefault()
    props.setAct([...props.activities, formData ])
    setFormData({actName:''})
  }
  console.log("ACT",props)


  return (
    <>
    <form onSubmit={handleActSubmit}>
      <input
        type="text"
        name="actName"
        placeholder="Activity..."
        value={formData.actName}
        onChange={handleChange}
        autoComplete="off"
      />
      <button
        type="submit"
        className={styles.act_btn}
      >
        Add Activity 
      </button>
    </form>
    </>
  )
}
export default ActForm
import { useEffect, useState, useRef } from "react";
import * as profileService  from "../../../services/profileService"
import styles from '../../AddDetails/AddDetails.module.css'

const AddGuestList = (props) => {
  const formElement = useRef()
  const [formData, setFormData] =useState('')
  const [profiles, setProfiles] = useState([])
console.log(formData);
  const handleChange = evt => {
    setFormData(evt.target.value)
  }

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])
//console.log('****Fetched People YO!****',profiles)

const handleGuestSubmit = evt => {
  evt.preventDefault()
  props.setGuests([...props.guests, formData ])
  setFormData('')
}
  return (
    <div className={styles.guestdiv}> 
    <form ref={formElement} onSubmit={handleGuestSubmit}>
      <label className={styles.guest_txt}>
        Add Guests: 
      </label>
      <select name="guestList" onChange={handleChange}>
        <option value={null}>pick guest</option>
          {profiles.map(profile => 
            <option value={profile._id} key={profile._id}>
              {profile.name}
            </option>
          )}
      </select>
      <button
        type="submit"
        className={styles.add_guest_btn}
      >
        Add guest
      </button>
    </form>
    </div>
  )
}

export default AddGuestList;
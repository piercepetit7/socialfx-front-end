import { useEffect, useState, useRef } from "react";
import * as profileService  from "../../../services/profileService"

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
    <> 
    <form ref={formElement} onSubmit={handleGuestSubmit}>
      <label>
        Who's Invited?
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
      >
        Add guest
      </button>
    </form>
    </>
  )
}

export default AddGuestList;
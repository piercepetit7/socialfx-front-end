import { useEffect, useState, useRef } from "react";
import * as profileService  from "../../../services/profileService"

const AddGuestList = (props) => {
  const formElement = useRef()
  const [formData, setFormData] =useState({
    guestList: ''
  })
  const [profiles, setProfiles] = useState([])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])
console.log('****Fetched People YO!****',profiles)

const handleGuestSubmit = evt => {
  evt.preventDefault()
  props.setGuests([...props.guests, formData ])
  console.log('****ADD Guest*****')
  console.log('*formData****Guest****',formData)
}
console.log("*****Guests****",props.guests)

  return (
    <> 
    <form ref={formElement} onSubmit={handleGuestSubmit}>
      <label>
        Who's Invited?
      </label>
      <select name="guests" onChange={handleChange}>
        <option>pick guest</option>
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
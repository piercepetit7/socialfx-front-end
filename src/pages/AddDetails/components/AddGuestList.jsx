import { useEffect, useState } from "react";
import * as profileService  from "../../../services/profileService"

const AddGuestList = (props) => {
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
console.log(profiles)
  return (
    <> 
    <form>
      <label>
        Who's Invited?
      </label>
      <select name="guestList" onChange={handleChange}>
        <option>pick guest</option>
          {profiles.map(profile => 
            <option key={profile._id}>
              {profile.name}
            </option>
          )}
      </select>
    </form>
    </>
  )
}

export default AddGuestList;
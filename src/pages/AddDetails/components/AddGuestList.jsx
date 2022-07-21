import { useEffect, useState, useRef } from "react";


const AddGuestList = (props) => {
  const formElement = useRef()
  const [formData, setFormData] =useState('')
  const [filteredProfiles, setFilteredProfiles] = useState([])
  const handleChange = evt => {
    setFormData(evt.target.value)
  }

  useEffect(() => {
    const notGoing = props.profiles.filter(profile => {
      return !props.guests.includes(profile._id)
    })
    setFilteredProfiles(notGoing)
  }, [props.profiles, props.guests])


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
          {filteredProfiles.map(profile => 
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
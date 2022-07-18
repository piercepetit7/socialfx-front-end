import { useState, useEffect, React } from 'react';
//import GuestList from '../../components/GuestList/GuestList'
//import Activities from '../../components/Activities/Activities'
import FoodSupplies from '../../components/FoodSupplies/FoodSupplies'
import CommentForm from '../../components/CommentForm/CommentForm'
import { show } from '../../services/eventService'
import { useLocation } from 'react-router-dom';

const EventShow = (props) => {
  const [component, setComponent] = useState('Comments')
  const [event, setEvent] = useState({}) 
  const location = useLocation()
  console.log('*************************')
  console.log(typeof location.state.event._id)

  useEffect(()=>{
    const fetchEvent = async() => {
      const eventData = await show(location.state.event._id)
      console.log('EVENTDATA',eventData)
      setEvent(eventData)
    }
    fetchEvent()
  },[])

  // if(!props?.events?.length){
  //   return <h1>No Events</h1>
  //   console.log("here",props.events)
  // }

  return (
    <>
      <h1>Hello</h1>
    <div id='mainleft-showPage'>
    </div> 
    <div id='mainright-showPage'>
      <div id='mainright-left'>
        {/* <button onClick={() => setComponent('GuestList')}>Guest List</button> */}
        {/* <button onClick={() => setComponent('Activities')}>Activities</button> */}
        <button onClick={() => setComponent('FoodSupplies')}>Food/Supplies</button>
        <button onClick={() => setComponent('Comments')}>Comments</button>
      </div>
      <div id='mainright-right'>
        {/* { component === 'GuestList' ? <GuestList />: "" } */}
        {/* { component === 'Activities' ? <Activities />: "" } */}
        { component === 'FoodSupplies' ? <FoodSupplies />: "" }
        { component === 'Comments' ? <CommentForm />: "" }
      </div>
    </div>
    
    </>
  );
}

export default EventShow;
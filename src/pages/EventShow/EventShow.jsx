import { useState } from 'react';
import GuestList from '../../components/GuestList/GuestList'
import Activities from '../../components/Activities/Activities'
import FoodSupplies from '../../components/FoodSupplies/FoodSupplies'
import CommentForm from '../../components/CommentForm/CommentForm'
import CommentForm from '../../components/CommentForm/CommentForm';


const EventShow = (props) => {
  const [component, setComponent] = useState('GuestList')

  if(!props.events.length){
    return <h1>No Events</h1>
  }

  return (
    <>
    <div id='mainleft-showPage'>

    </div> 
    <div id='mainright-showPage'>
      <div id='mainright-left'>
        <button onClick={() => setComponent('GuestList')}>Guest List</button>
        <button onClick={() => setComponent('Activities')}>Activities</button>
        <button onClick={() => setComponent('FoodSupplies')}>Food/Supplies</button>
        <button onClick={() => setComponent('Comments')}>Comments</button>
      </div>
      <div id='mainright-right'>
        if({component === 'GuestList' && <GuestList />}) {
          <GuestList />
        } else if({component === 'Activities' && <Activities />}) {
          <Activities />
        } else if({component === 'FoodSupplies' && <FoodSupplies />}) {
          <FoodSupplies />
        } else({component === 'Comments' && <CommentForm />}) {
          <CommentForm />
        }
      </div>
    </div>
    
    </>
  );
}

export default EventShow;
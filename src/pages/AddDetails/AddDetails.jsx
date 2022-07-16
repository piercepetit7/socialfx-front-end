import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { show } from '../../services/eventService'

const AddDetails = (props) => {
  const {eventId} = useParams()
  console.log('EVENTID',eventId)
	const navigate = useNavigate()
  const [event, setEvent] = useState()
  const [formData, setFormData] = useState({
    activities: '',
    guestList: '',
    items: '',

  })
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleAddEvent(formData)
      navigate('/')
      // change to item and act page ^
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(()=>{
    const fetchEvent = async() => {
      const eventData = await show(eventId)
      console.log('EVENTDATA',eventData)
      setEvent(eventData)
    }
    fetchEvent()
  },[])
  
return (
  <>
    <div className="event-header">
      <h1>add details</h1>
      <h3>{event?.eventName}</h3>
      {/* <h1>{props.eventName}</h1>
      <h4>{props.eventDate}</h4>
      <h5>{props.eventDetails}</h5> */}
    </div>
    {/* <section>
        <div id="multple-step-form-n" class="container overflow-hidden" style="margin-top: 0px;margin-bottom: 10px;padding-bottom: 300px;padding-top: 57px;">
            <div id="progress-bar-button" class="multisteps-form">
                <div class="row">
                    <div class="col-12 col-lg-8 ml-auto mr-auto mb-4">
                        <div class="multisteps-form__progress"><a class="btn multisteps-form__progress-btn js-active" role="button" title="User Info">User Info</a><a class="btn multisteps-form__progress-btn" role="button" title="User Info">About</a><a class="btn multisteps-form__progress-btn" role="button" title="User Info">Contact </a></div>
                    </div>
                </div>
            </div>
            <div id="multistep-start-row" class="row">
                <div id="multistep-start-column" class="col-12 col-lg-8 m-auto">
                    <form id="main-form" class="multisteps-form__form">
                        <div id="single-form-next" class="multisteps-form__panel shadow p-4 rounded bg-white js-active" data-animation="scaleIn">
                            <h3 class="text-center multisteps-form__title">User Info</h3>
                            <div id="form-content" class="multisteps-form__content">
                                <div id="input-grp-double" class="form-row mt-4">
                                    <div class="col-12 col-sm-6"><input class="form-control multisteps-form__input" type="text" placeholder="First name " /></div>
                                    <div class="col-12 col-sm-6 mt-4 mt-sm-0"><input class="form-control multisteps-form__input" type="text" placeholder="Last name " /></div>
                                </div>
                                <div id="input-grp-single" class="form-row mt-4">
                                    <div class="col-12"><input class="form-control multisteps-form__input" type="text" placeholder="House" /></div>
                                </div>
                                <div id="next-button" class="button-row d-flex mt-4"><button class="btn btn btn-primary ml-auto js-btn-next" type="button" title="Next">Next</button></div>
                            </div>
                        </div>
                        <div id="single-form-next-prev" class="multisteps-form__panel shadow p-4 rounded bg-white" data-animation="scaleIn">
                            <h3 class="text-center multisteps-form__title">About</h3>
                            <div id="form-content-1" class="multisteps-form__content">
                                <div id="input-grp-double-1" class="form-row mt-4">
                                    <div class="col-12 col-sm-6"><input class="form-control multisteps-form__input" type="text" placeholder="First name " /></div>
                                    <div class="col-12 col-sm-6 mt-4 mt-sm-0"><input class="form-control multisteps-form__input" type="text" placeholder="Last name " /></div>
                                </div>
                                <div id="input-grp-single-1" class="form-row mt-4">
                                    <div class="col-12"><input class="form-control multisteps-form__input" type="text" placeholder="House" /></div>
                                </div>
                                <div id="next-prev-buttons" class="button-row d-flex mt-4"><button class="btn btn btn-primary js-btn-prev" type="button" title="Prev">Prev</button><button class="btn btn btn-primary ml-auto js-btn-next" type="button" title="Next">Next</button></div>
                            </div>
                        </div>
                        <div id="single-form-next-prev-1" class="multisteps-form__panel shadow p-4 rounded bg-white" data-animation="scaleIn">
                            <h3 class="text-center multisteps-form__title">About</h3>
                            <div id="form-content-2" class="multisteps-form__content">
                                <div id="input-grp-double-2" class="form-row mt-4">
                                    <div class="col-12 col-sm-6"><input class="form-control multisteps-form__input" type="text" placeholder="First name " /></div>
                                    <div class="col-12 col-sm-6 mt-4 mt-sm-0"><input class="form-control multisteps-form__input" type="text" placeholder="Last name " /></div>
                                </div>
                                <div id="input-grp-single-2" class="form-row mt-4">
                                    <div class="col-12"><input class="form-control multisteps-form__input" type="text" placeholder="House" /></div>
                                </div>
                                <div id="next-prev-buttons-1" class="button-row d-flex mt-4"><button class="btn btn btn-primary js-btn-prev" type="button" title="Prev">Prev</button><button class="btn btn btn-primary ml-auto js-btn-next" type="button" title="Next">Next</button></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section> */}
</>
 )


}
export default AddDetails
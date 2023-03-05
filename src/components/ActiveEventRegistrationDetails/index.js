import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="no-active-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationsClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails

// import {Component} from 'react'

// import './index.css'

// const ActiveEventDetails = {
//   clickOnEvent: 'CLICK_ON_EVENT',
//   register: 'YET_TO_REGISTER',
//   registered: 'REGISTERED',
//   closeRegister: 'REGISTRATIONS_CLOSED',
// }

// class ActiveEventRegistrationDetails extends Component {
//   renderActiveRegister = () => (
//     <div className="bg-active-container">
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
//         alt="yet to register"
//         className="image-register"
//       />
//       <p className="register-event">
//         A live performance brings so much to your relationship with dance.Seeing
//         dance live can often make you fall totally in love with this beautiful
//         art form
//       </p>
//       <button type="button">Register Here</button>
//     </div>
//   )

//   renderActiveRegistered = () => (
//     <div className="bg-active-container">
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
//         alt="registered"
//         className="registered-image"
//       />
//       <h1>You have already registered for the event</h1>
//     </div>
//   )

//   renderActiveCloseRegister = () => (
//     <div className="bg-active-container">
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
//         alt="registrations closed"
//         className="close-image"
//       />
//       <h1>Registrations Are Closed Now!</h1>
//       <p>Stay tuned. We will reopen the registrations soon!</p>
//     </div>
//   )

//   renderActiveClickOnEvent = () => (
//     <div>
//       <p>Click on an event, to view its registration details</p>
//     </div>
//   )

//   render() {
//     const {eventActive} = this.props
//     switch (eventActive) {
//       case ActiveEventDetails.clickOnEvent:
//         return this.renderActiveClickOnEvent()
//       case ActiveEventDetails.register:
//         return this.renderActiveRegister()
//       case ActiveEventDetails.registered:
//         return this.renderActiveRegistered()
//       case ActiveEventDetails.closeRegister:
//         return this.renderActiveCloseRegister()

//       default:
//         return null
//     }
//   }
// }

// export default ActiveEventRegistrationDetails

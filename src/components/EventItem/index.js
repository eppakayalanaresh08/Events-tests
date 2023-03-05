import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem

// import './index.css'

// const EventItem = props => {
//   const {eachItemList, onClickEachEvent} = props
//   const {imageUrl, name, location, registrationStatus} = eachItemList
//   const onClickEvent = () => {
//     onClickEachEvent(registrationStatus)
//   }
//   return (
//     <li className="list-event">
//       <button type="button" onClick={onClickEvent} className="event-button">
//         <img src={imageUrl} alt="event" className="image-event" />
//       </button>
//       <p className="name-event">{name}</p>
//       <p className="location-event">{location}</p>
//     </li>
//   )
// }

// export default EventItem

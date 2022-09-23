export default function Card(props) {
  return (
    <div className="card">
    <img className="mainImg" src={props.item.imageUrl} />
      <div>
        <div className="headline" >
      <p>{props.item.location}</p>
    <a href={props.item.googleMapsUrl}> View on google maps</a>
          </div>
      <h2>{props.item.title}</h2>
      <h4>{props.item.startDate} - {props.item.endDate}</h4>
      <p>{props.item.description}</p>
        </div>
    </div>
  )
}
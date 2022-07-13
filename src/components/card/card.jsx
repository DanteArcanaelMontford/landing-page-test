
import "./card.css";

const Card = ({title, img, children})=> {
  return(
    <div className="card">
    <h4 className="card__title">{title}</h4>
    <p className="card__description">
      {children}
    </p>
    <div className="card__img">
      <img src={img} alt={""}/>
    </div>
  </div>
  )
}

export default Card;
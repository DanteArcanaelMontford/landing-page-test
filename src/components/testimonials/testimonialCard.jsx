import "./testimonialCard.css";

const TestimonialCard = ({name, company, img, children}) => {
  return (
    <div className="testimonial__card">
      <div className="testimonial__description">
        {children}
      </div>
      <div className="testimonial__data">
        <div className="testimonial__profile-img">
          <img src={img} alt="" />
        </div>
        <div className="testimonial__info">
          <p><strong>{name}</strong></p>
          <p>{company}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard;
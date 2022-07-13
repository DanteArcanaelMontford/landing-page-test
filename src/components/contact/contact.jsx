import "./contact.css";

const Contact = () => {
  return(
    <section className="section__contact">
      <div className="contact__container">
        <div className="contact__titles">
          <h3>Alta perfomance para competir, inteligência de dados para liderar</h3>
          <h5>Conte com a maior especialista em inteligência de dados para negócios B2B e supere suas metas em 2022</h5>
        </div>
        <div className="contact__btn">
          <button type="button" name="concat" id="contact_btn" className="contact_button">
            <a href="#home__form">
              Fale com a gente
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact;
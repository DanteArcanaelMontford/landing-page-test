import "./home.css";
import img from "../imgs/logo neoway b3.png";

const Home = () => {
  return (
    <section className='section__home'>
      <div className='home'>
        <div className="home__information">
          <div className='home__container-logo'>
            <img src={img} alt="imagem" />
          </div>
          <div>
            <h1 className="home__h1">
              Lidere o futuro com
            </h1>
          </div>
          <div>
            <h1 className="home__h1">inteligência de</h1>
          </div>
          <div>
            <div className="home__scroll-titles">
              <a href="#mercado" className="home__scroll-title" id="dados"><strong>dados</strong></a>
              <a href="#vendas" className="home__scroll-title" id="mercado"><strong>mercado</strong></a>
              <a href="#marketing" className="home__scroll-title" id="vendas"><strong>vendas</strong></a>
              <a href="#dados" className="home__scroll-title" id="marketing"><strong>marketing</strong></a>
            </div>
          </div>
          <div className="home__description">
            <p>
              Transformamos dados em <strong>soluções de valor</strong>  para potencializar seus resultados de <strong>vendas</strong> e <strong>marketing</strong>
            </p>
          </div>
        </div>
        <div className="home__form-container" id="home__form">
          <h3>Entre em contato</h3>
          <form action="">
            <div className="form__item">
              <label htmlFor="first_name">Nome</label>
              <input type="text" name="first_name" id="first_name" placeholder="Pedro Alves" />
            </div>
            <div className="form__item">
              <label htmlFor="last_name">Sobrenome</label>
              <input type="text" name="last_name" id="last_name" placeholder="Farias" />
            </div>
            <div className="form__item">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" placeholder="pedro.alves@corp.com" />
            </div>
            <div className="form__item">
              <label htmlFor="email">CNPJ</label>
              <input type="text" name="cnpj" id="cnpj" placeholder="CNPJ da empresa"/>
            </div>
            <div className="form__item-checkbox">
              <div>
                <input type="checkbox" name="privacy" id="privacy" />
              </div>
              <div>
                <label htmlFor="email">Eu concordo com as disposições do <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">aviso de privacidade</a></label>
              </div>
            </div>
            <div className="form__item-checkbox">
              <div>
                <input type="checkbox" name="education" id="education" />

              </div>
              <div>
                <label htmlFor="education">Eu aceito receber da Neoway informações de produtors de caráter educativo sobre as soluções e produtos.</label>
              </div>
            </div>
            <div className="form__item-checkbox">
              <div>
                <input type="checkbox" name="information" id="information" />
              </div>
              <div>
                <label htmlFor="information">Eu aceito receber da Neoway informações de produtors de caráter publicitário sobre as soluções e produtos.</label>
              </div>
            </div>
            <div className="form__item-submit">
              <input type="submit" name="submit" id="submit" value={"FALE COM A GENTE"} />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Home;
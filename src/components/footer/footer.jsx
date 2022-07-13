import "./footer.css";

import facebook from "../imgs/facebook.png";
import insta from "../imgs/insta.png";
import linkedin from "../imgs/linkedin.png";
import footerLogo from "../imgs/logo neoway.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={footerLogo} alt="" />
      </div>
      <div className="footer__social-media">
        <span className="social__media-msg">Nos siga nas redes sociais</span>
        <div className="social__media-logos">
          <img src={facebook} alt="" className="social__media-logo" />
          <img src={linkedin} alt="" className="social__media-logo" />
          <img src={insta} alt="" className="social__media-logo" />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
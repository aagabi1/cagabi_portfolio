import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";
import "../stylesheets/footer.css";

function Footer() {
  return (
    <footer>
      <a className="social-link" href="https://www.instagram.com/topboyxoxo/">
        <img src={instagram} alt="" />
      </a>
      <a className="social-link" href="https://www.linkedin.com/in/aagabi1/">
        <img src={linkedin} alt="" />
      </a>
      <a
        className="social-link"
        href="https://www.youtube.com/channel/UC_GCi_Qu7IfNubvqYVWWZeA"
      >
        <img src={youtube} alt="" />
      </a>
    </footer>
  );
}

export default Footer;

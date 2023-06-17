import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";
import "../stylesheets/footer.css";

function Footer() {
  return (
    <footer>
      <a className="social-link" href="https://www.instagram.com/topboyxoxo/">
        <img src={instagram} />
      </a>
      <a className="social-link" href="https://www.linkedin.com/in/aagabi1/">
        <img src={linkedin} />
      </a>
      <a
        className="social-link"
        href="https://www.youtube.com/channel/UC_GCi_Qu7IfNubvqYVWWZeA"
      >
        <img src={youtube} />
      </a>
    </footer>
  );
}

export default Footer;

import "../stylesheets/contact.css";
import local_data from "../data/local_data";

function ContactPage() {
  const aboutMe = local_data.find((article) => article.name === "about");
  return (
    <>
      <section id="contact">
        <div className="contact-image">
          <img src={require("../assets/pfp01.jpg")} alt="" />
        </div>
        <div className="contact-description">
          <p>{aboutMe.content[0]}</p>
        </div>
      </section>
      <section id="contact-info">
        <div className="contact-info-description">
          <div className="contact-info-details">
            <div className="contact-info-details-inner">
              <p>
                <span className="em">What I know...</span>
              </p>
              <ul>
                <li>Python</li>
                <li>Javascript & React</li>
                <li>ASP.net</li>
                <li>Java</li>
                <li>Object oriented programming</li>
              </ul>
            </div>
          </div>
          <div className="contact-info-details">
            <div className="contact-info-details-inner">
              <p>
                <span className="em">Email</span>
              </p>
              <p>aagabi1@yahoo.com</p>
            </div>
            <div className="contact-info-details-inner">
              <p>
                <span className="em">Phone</span>
              </p>
              <p>(404) 936-7763</p>
            </div>
            <div className="contact-info-details-inner">
              <p>
                <span className="em">Resume</span>
              </p>
              <p>
                <a
                  href="../assets/resume.pdf"
                  className="contact-details-info-inner-link"
                  download
                >
                  "Agabi, Courage - Resume.pdf"
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;

import "../stylesheets/contact.css";
import local_data from "../data/local_data";

function ContactPage() {
  const aboutMe = local_data.find((article) => article.name === "about");
  return (
    <section id="contact">
      <div className="contact-image">
        <img src={require("../assets/pfp01.jpg")} alt="" />
      </div>
      <div className="contact-description">
        <p>{aboutMe.content[0]}</p>
        <p>
          <span className="italic">{}</span>
        </p>
      </div>
    </section>
  );
}

export default ContactPage;

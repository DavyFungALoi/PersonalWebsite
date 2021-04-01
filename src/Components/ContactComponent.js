import React from "react";
import GitHubIcon from "../Images/GitHubIcon.png";
import LinkedinIcon from "../Images/LinkedinIcon.png";
import EmailIcon from "../Images/Contact/EmailIcon.png";
import PhoneIcon from "../Images/Contact/PhoneIcon.png";

const ContactComponent = () => {
  return (
    <div className="Contact__Container">
      <h2>Contact Me</h2>
      <div className="Contact__Container__Main">
        <a
          href="mailto:davyfungaloi@gmail.com"
          className="Contact__Container__Element"
        >
          <img src={EmailIcon} alt="EmailIcon"></img>

          <a
            className="Container__Element_Description"
            href="mailto:davyfungaloi@gmail.com"
          >
            Email me at davyfungaloi@gmail.com
          </a>
        </a>
        <a href="tel:0641223947" className="Contact__Container__Element">
          <img src={PhoneIcon} alt="Phone Icon"></img>

          <a className="Container__Element_Description" href="tel:0641223947">
            Call me at 0641223947
          </a>
        </a>

        <a
          href="https://www.linkedin.com/in/davyfungaloi/"
          className="Contact__Container__Element"
        >
          <img src={LinkedinIcon} alt="LinkedinIcon"></img>

          <div className="Container__Element_Description">
            Let's connect on Linkedin
          </div>
        </a>
        <a
          href="https://github.com/DavyFungALoi"
          div
          className="Contact__Container__Element"
        >
          <img src={GitHubIcon} alt="GithubIcon"></img>

          <div className="Container__Element_Description">
            Check out my Github
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactComponent;

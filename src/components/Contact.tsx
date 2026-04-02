import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/syed-mohsin-ali-shah/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — syed-mohsin-ali-shah
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Ph.D. Engineering, University of Deusto, Bilbao, Spain — 2023–2026
            </p>
            <p>
              M.S. Computer Engineering, Bahria University, Islamabad — 2019–2021
            </p>
            <p>
              B.S. Computer Engineering, Bahria University, Islamabad — 2013–2017
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/syed-mohsin-ali-shah/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://scholar.google.com/citations?user=gjNkrLMAAAAJ&hl"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Google Scholar <MdArrowOutward />
            </a>
            <a
              href="https://www.youtube.com/@MachineLearningForEveryone"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              YouTube <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/dr.mohsin.syed"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Dr. Syed Mohsin <br /> <span>Ali Shah</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

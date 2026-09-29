import "./styles/About.css";
import { t } from "../i18n";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{t.about.title}</h3>
        <p className="para">{t.about.text}</p>
      </div>
    </div>
  );
};

export default About;

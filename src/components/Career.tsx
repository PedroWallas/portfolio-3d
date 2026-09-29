import "./styles/Career.css";
import { t } from "../i18n";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          {t.career.title[0]} <span>{t.career.title[1]}</span>
          <br /> {t.career.title[2]}
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {t.career.items.map((item) => (
            <div className="career-info-box" key={item.role}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.period}</h3>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;

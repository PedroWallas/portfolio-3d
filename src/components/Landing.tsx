import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { t } from "../i18n";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>{t.landing.hello}</h2>
            <h1>
              {t.landing.first}
              <br />
              <span>{t.landing.last}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>{t.landing.lead}</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{t.landing.a}</div>
              <div className="landing-h2-2">{t.landing.b}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{t.landing.b}</div>
              <div className="landing-h2-info-1">{t.landing.a}</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;

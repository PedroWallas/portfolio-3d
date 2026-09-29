import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { repoUrl, t } from "../i18n";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>{t.contact.title}</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>{t.contact.email}</h4>
            <p>
              <a href={`mailto:${t.email}`} data-cursor="disable">
                {t.email}
              </a>
            </p>
            <h4>{t.phoneLabel}</h4>
            <p>
              <a
                href={t.phoneHref}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                {t.phone}
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>{t.contact.social}</h4>
            <a
              href={t.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href={t.phoneHref}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              WhatsApp <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              {t.contact.made[0]} <br /> {t.contact.made[1]}{" "}
              <span>{t.contact.made[2]}</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-credit"
            >
              {t.contact.inspired}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

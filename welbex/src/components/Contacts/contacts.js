import styles from "./contacts.module.css";
import telegram from "../../images/telegram.svg";
import viber from "../../images/viber.svg";
import whatsapp from "../../images/whatsapp.svg";

function Contacts() {
  return (
    <section className={styles.сontacts}>
      <a className={styles.phone} href="tel:+75555555555">
        +7 555 555-55-55
      </a>

      <ul className={styles.icons}>
        <li className="contacts__social-icon">
          <a href="&">
            <img alt="telegram" src={telegram} />
          </a>
        </li>
        <li className="contacts__social-icon">
          <a href="&">
            <img alt="Viber" src={viber} />
          </a>
        </li>
        <li className="contacts__social-icon">
          <a href="&">
            <img alt="Whatsapp" src={whatsapp} />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;

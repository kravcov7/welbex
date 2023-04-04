import styles from "./contacts.module.css";
import Ttt from "../../images/telegram.svg";
// import Teleg from "/images/telegram.svg";
import viber from "../../images/viber.svg";
import whatsapp from "../../images/whatsapp.svg";

const ICONS = [
  {
    id: 1,
    name: "Telegram",
    src:'',
  },
  {
    id: 2,
    name: "viber",
    scr: "",
  },
  {
    id: 3,
    name: "",
    scr: {whatsapp},
  },
];

function Contacts() {
  return (
    <section className={styles.сontacts}>
      <a className={styles.phone} href="tel:+75555555555">
        +7 555 555-55-55
      </a>
      <ul className={styles.icons}>
        {ICONS.map(({ id, name, src }) => (
          <li key={id} className="contacts__social-icon">
            <a href="&">
              {/* <img alt={name} src={src} /> */}
              <img alt={name} src="../../images/telegram.svg" />
            </a>
          </li>
        ))}

    
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

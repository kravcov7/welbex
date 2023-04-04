import styles from "./header.module.css";
import { Link } from "react-router-dom";
import Contacts from "../Contacts/contacts";
import logo from "../../images/logo.svg";

const MENU = [
  {
    id: 1,
    name: "Услуги",
    link: "#",
  },
  {
    id: 2,
    name: "Виджеты",
    link: "#",
  },
  {
    id: 3,
    name: "Интеграции",
    link: "#",
  },
  {
    id: 4,
    name: "Кейсы",
    link: "#",
  },
  {
    id: 5,
    name: "Сертификаты",
    link: "#",
  },
];

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.mainBlock}>
        <div className={styles.logoBlock}>
          <a href="&">
            <img alt="logo" src={logo} />
          </a>
          <p className={styles.logoText}>
            крупный интегратор CRM в Росcии и ещё 8 странах
          </p>
        </div>
        <nav className={styles.menu}>
          <ul className={styles.wrapper}>
            {MENU.map(({ id, name, link }) => (
              <li className={styles.link} key={id}>
                <Link to="#" className={styles.ff}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.contacts}>
        <Contacts />
      </div>
    </header>
  );
}

export default Header;

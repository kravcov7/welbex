import styles from "./footer.module.css";

const ABOUT = [
  {
    id: 1,
    name: "Партнёрская программа",
  },
  {
    id: 2,
    name: "Вакансии",
  },
];
const MENU = [
  {
    id: 1,
    name: "Расчёт стоимости",
  },
  {
    id: 2,
    name: "Услуги",
  },
  {
    id: 3,
    name: "Виджеты",
  },
  {
    id: 4,
    name: "Интеграции",
  },
  {
    id: 5,
    name: "Наши клиенты",
  },
  {
    id: 6,
    name: "Кейсы",
  },
  {
    id: 7,
    name: "Благодарственные письма",
  },
  {
    id: 8,
    name: "Сертификаты",
  },
  {
    id: 9,
    name: "Блог на Youtube",
  },
  {
    id: 10,
    name: "Вопрос / Ответ",
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.menu}>
        <div className={styles.wrapperAbout}>
          <h2 className={styles.title}>О компании</h2>
          <ul className={styles.wrapper}>
            {ABOUT.map(({ id, name }) => (
              <li className={styles.link} key={id}>
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.wrapperMenu}>
          <h2 className={styles.title}>Меню</h2>
          <ul className={styles.containerMenu}>
            {MENU.map(({ id, name }) => (
              <li className={styles.linkMenu} key={id}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.contacts}>
        <div className={styles.contact}>
          <h3 className={styles.title}>Контакты</h3>
          <h3 className={styles.tel}>+7 555 555-55-55</h3>
          <h3 className={styles.address}>Москва, Путевой проезд 3с1, к 902</h3>
        </div>
        <div className={styles.copyright}>
          <p className={styles.copyrightE}>&copy;WELBEX 2022. Все права защищены.</p>
          <p className={styles.copyrightErr}>Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

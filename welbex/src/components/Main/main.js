import styles from "./main.module.css";

const CARDS = [
  {
    id: 1,
    title: "Виджеты",
    description: "30 готовых решений",
  },
  {
    id: 2,
    title: "Dashboard",
    description: "с показателями вашего бизнеса",
  },
  {
    id: 3,
    title: "Skype Аудит",
    description: "отдела продажи CRM системы",
  },
  {
    id: 4,
    title: "35 дней",
    description: "использования CRM",
  },
];
const CARDSMOBILE = [
  {
    id: 1,
    title: "Skype аудит",
  },
  {
    id: 2,
    title: "Dashboard",
  },
  {
    id: 3,
    title: "30 виджетов",
  },
  {
    id: 4,
    title: "Месяц аmoCRM",
  },
];

function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.tittleBlock}>
        <h1 className={styles.title}>Зарабатывайте больше</h1>
        <span className={styles.subtitleColor}>с WELBEX</span>
        <p className={styles.subtitle}>
          Развиваем и контролируем продажи за вас
        </p>
      </div>
      <div className={styles.promoBlock}>
        <h2 className={styles.promoTitle}>
          Вместе с 
          <span className={styles.color}>бесплатной консультацией</span>{" "}
          мы дарим:
        </h2>
        <ul className={styles.cards}>
          {CARDS.map(({ id, title, description }) => (
            <li key={id} className={styles.card}>
              <h3 className={styles.titleCard}>{title}</h3>
              <p className={styles.descriptionCard}>{description}</p>
            </li>
          ))}
        </ul>
        <ul className={styles.cardsMobile}>
          {CARDSMOBILE.map(({ id, title, description }) => (
            <li key={id} className={styles.card}>
              <h3 className={styles.titleCard}><span>—</span> {title}</h3>
            </li>
          ))}
        </ul>
        <button className={styles.button}>Получить консультацию</button>
      </div>
    </main>
  );
}

export default Main;

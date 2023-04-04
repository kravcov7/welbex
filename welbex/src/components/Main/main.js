import styles from "./main.module.css";

const CARDS = [
  {
    id: 1,
    title: "Виджеты",
    description: "отдела продажи CRM системы",
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

function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.tittleBlock}>
        <h1 className={styles.title}>Зарабатывайте больше</h1>
        <p className={styles.subtitle}>
          Развиваем и контролируем продажи за вас
        </p>
      </div>
      <div className={styles.promoBlock}>
        <h2 className={styles.promoTitle}>
          Вместе с бесплатной консультацией мы дарим:
        </h2>
        <ul className={styles.cards}>
          {CARDS.map(({ id, title, description }) => (
            <li key={id} className={styles.card}>
              <h3 className={styles.titleCard}>{title}</h3>
              <p className={styles.descriptionCard}>{description}</p>
            </li>
          ))}
        </ul>
        <button className={styles.button}>Получить консультацию</button>
      </div>
    </main>
  );
}

export default Main;

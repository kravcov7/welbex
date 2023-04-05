import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Main from "./components/Main/main";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <div className={styles.purple}></div>
        <div className={styles.yellow}></div>
        <div className={styles.red}></div>
        <div className={styles.glass}></div>
        <div className={styles.redLight}></div>
        <div className={styles.purpleBall}></div>
        <div className={styles.redBall}></div>
        <div className={styles.yellowBall}></div>
      </div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

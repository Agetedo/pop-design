import introImage from "/card-intro-image.png";
import styles from "../styles/Intro.module.scss";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <img className={styles.introImage} src={introImage} alt="#" />
      <div className={styles.button}>button</div>

    </section>
  )
}
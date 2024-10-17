import styles from "../styles/DesignTitle.module.scss";

interface TitleProps {
  title: string;
  text: string;
}

export default function DesignTitle({ title, text }: TitleProps) {
  return(
    <section className={styles.designTitle}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.titleAnimation}>
        <span className={styles.roll}></span>
      </div>
      <p className={styles.text}>{text}</p>
    </section>
  );
}
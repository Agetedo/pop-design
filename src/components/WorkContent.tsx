import WorkLinksSlider from "./WorkLinksSlider";
import styles from "../styles/WorkContent.module.scss";

export default function WorkContent({ title, text }: { title: string, text: string }) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <WorkLinksSlider />
    </>
  );
} 
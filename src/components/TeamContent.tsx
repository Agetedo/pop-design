import styles from "../styles/TeamContent.module.scss";

export default function TeamContent({ title  }: { title: string }) {
  return(
    <section className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
    
    </section>
  );
} 

/*interface Content1Props {
  imgAlt1: string;
  text1: string;
  text2: string;
}*/

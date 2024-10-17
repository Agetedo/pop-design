import styles from "../styles/DesignPages.module.scss";

export default function DesignPages() {
  return(
    <div className={styles.designPages}>
      <button className={styles.page}></button>
      <button className={styles.page}></button>
      <button className={styles.page}></button>
      <button className={styles.page}></button>
    </div>
  );
}
import { buttons } from "../dataBase/buttons";
import styles from "../styles/DesignPages.module.scss";

export default function DesignPages() {
  const buttonsList = buttons.map( button =>
    <button key={button.id} className={styles.pageButton}>
      <img src={button.imgSrc} alt="#" />
      <h2 className={styles.buttonText}>{button.buttonText}</h2>
    </button>
  )

  return(
    <div className={styles.designPages}>
      {buttonsList}
    </div>
  );
}
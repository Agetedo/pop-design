import Conteiner from "./Conteiner";
import DesignItems from "./DesignItems";
import styles from "../styles/Design.module.scss";

export default function Design() {
  return (
    <Conteiner className={styles.design}>
      <DesignItems />
    </Conteiner>
  )
}
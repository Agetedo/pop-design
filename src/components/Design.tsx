import Conteiner from "./Conteiner";
import DesignItems from "./DesignItems";
import Copyright from "./Copyright";
import styles from "../styles/Design.module.scss";

export default function Design() {
  return (
    <Conteiner className={styles.design}>
      <DesignItems />
      <Copyright 
        copyright={"Copyright"}
        text={"Pop Design Company"} 
      />
    </Conteiner>
  )
}
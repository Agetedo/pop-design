import WelcomePage from "./WelcomePage";
import ButtonPage from "./ButtonPage";/////////////////////
import styles from "../styles/DesignPages.module.scss";

export default function DesignPages() {
  
  return(
    <div className={styles.designPages}>
      <WelcomePage />
      <ButtonPage imgSrc={""} buttonText={""} />
      <ButtonPage imgSrc={""} buttonText={""} />
      <ButtonPage imgSrc={""} buttonText={""} />
    </div>
  );
} 
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
//Отдельно объявить .pageButton(без списочного рендеринга) и в этот компонент <DesignPages />
//будут приходить готовые 4страницы с креэйт-порталами (каждая из своего файла) 
//<<props в своих файлах??? (посмотреть) 
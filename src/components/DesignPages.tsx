import WelcomePage from "./WelcomePage";
import TeamPage from "./TeamPage";
import WorkPage from "./WorkPage";
import ContactPage from "./ContactPage";
import styles from "../styles/DesignPages.module.scss";

export default function DesignPages() {
  
  return(
    <div className={styles.designPages}>
      <WelcomePage />
      <TeamPage />
      <WorkPage />
      <ContactPage />
    </div>
  );
} 
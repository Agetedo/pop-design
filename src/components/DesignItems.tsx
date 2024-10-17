import DesignTitle from "./DesignTitle";
import DesignPages from "./DesignPages";
import styles from "../styles/DesignItems.module.scss";

export default function DesignItems() {
  
  return (
    <div className={styles.designItems}>
      <DesignTitle 
        title={"POP design"} 
        text={"Attractive template with pop-up pages. Use this layout for your website"} 
      />
      <DesignPages />
    </div>
  );
}
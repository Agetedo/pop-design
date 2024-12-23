import welcomeImage1 from "/welcome-1.jpg";
import welcomeImage2 from "/welcome-2.jpg";
import styles from "../styles/WelcomeContent.module.scss";
const welcomeText1 = "You are allowed to download, modify and use this template for your commercial or business websites.";
const welcomeText2 = "Please tell your friends about PopDesign. That will be very helpful for us. Thank you.";
const welcomeText3 = "You are allowed to download, modify and use this template for your commercial or business websites.";
const welcomeText4 = "You are allowed to download, modify and use this template for your commercial or business websites.";

export default function WelcomeContent({ title }: { title: string }) {
  return (
    <section className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.contentItems}>
        <Content1 
          imgAlt1={"Image"} 
          text1={welcomeText1} 
          text2={welcomeText2} 
        />
        <Content2 
          imgAlt2={"Image"} 
          text3={welcomeText3} 
          text4={welcomeText4} 
        />
      </div>
    </section>
  );
} 

interface Content1Props {
  imgAlt1: string;
  text1: string;
  text2: string;
}
function Content1({ imgAlt1, text1, text2 }: Content1Props) {
  return (
    <div className={styles.itemTop}>
      <img src={welcomeImage1} alt={imgAlt1} />
      <p className={styles.text}>{text1}</p>
      <p className={styles.text}>{text2}</p>
    </div>
  );
}

interface Content2Props {
  imgAlt2: string;
  text3: string;
  text4: string;
}
function Content2({ imgAlt2, text3, text4 }: Content2Props) {
  return (
    <div className={styles.itemBottom}>
      <p className={styles.text}>{text3}</p>
      <p className={styles.text}>{text4}</p>
      <img src={welcomeImage2} alt={imgAlt2} />
    </div>
  );
}
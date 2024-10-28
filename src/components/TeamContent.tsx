import teamImage from "/team.jpg";
import styles from "../styles/TeamContent.module.scss";
const teamText1 = "When developing your custom solution, we ensure conformity with ISO 2700 and NIST 800 to make sure your web app is developed in line with benchmark security requirements. Our comprehensive InfoSec approach relies on multiple levels of protection.";
const teamText2 = "When it comes to architecture design, we prepare your app for now and for the unexpected. That's why we create a robust, flexible server architecture.";
const teamText3 = "We goes by your end user's needs, preferences, and behaviors to develop engaging web experiences";

export default function TeamContent({ title }: { title: string }) {
  return (
    <section className={styles.content}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.contentItems}>
        <TextContent 
          text1={teamText1} 
          text2={teamText2} 
          text3={teamText3} 
        />
        <ImageContent imgAlt={"Image"} />
      </div>
      <ButtonLink buttonText={"Read More"} />
    </section>
  );
} 

interface TextContentProps {
  text1: string;
  text2: string;
  text3: string;
}
function TextContent({ text1, text2, text3 }: TextContentProps) {
  return (
    <div className={styles.textContent}>
      <p className={styles.text}>{text1}</p>
      <p className={styles.text}>{text2}</p>
      <p className={styles.text}>{text3}</p>
    </div>
  );
}

function ImageContent({ imgAlt }: { imgAlt: string }) {
  return (
    <div className={styles.image}>
      <img src={teamImage} alt={imgAlt} />
    </div>
  );
}

function ButtonLink({ buttonText }: { buttonText: string }) {
  return (
    <a href="https://developer.mozilla.org" 
      rel="noopener" 
      target="_blank"
      className={styles.buttonLink}>
      {buttonText}
    </a>
  );
}
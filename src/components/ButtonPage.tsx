import styles from "../styles/ButtonPage.module.scss";

interface ButtonProps {
  imgSrc: string;
  buttonText: string;
  onClick: () => void;
}

export default function ButtonPage({ onClick, imgSrc, buttonText }: ButtonProps) {
  return (
    <button className={styles.pageButton} onClick={onClick}>
      <img src={imgSrc} alt="#" />
      <h2 className={styles.buttonText}>{buttonText}</h2>
    </button>
  );
}
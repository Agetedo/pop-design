import styles from "../styles/Copyright.module.scss";

interface CopyrightProps {
  copyright: string;
  text: string;
}
export default function Copyright({ copyright, text }: CopyrightProps) {
  return(
    <div className={styles.copyright}>
      <p className={styles.text}>{copyright} &copy; {new Date().getFullYear()} {text}</p>
    </div>
  );
}
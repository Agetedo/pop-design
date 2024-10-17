import styles from "..//styles/Conteiner.module.scss";

interface ContainerProps {
  className: string;
  children?: React.ReactNode;
}
export default function Conteiner({ children, className }: ContainerProps) {
  return (
    <div className={className}>
      <div className={styles.conteiner}>{children}</div>
    </div>
  );
}
import styles from "..//styles/Wrapper.module.scss";

interface WrapperProps {
  className: string;
  children?: React.ReactNode;
}
export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div className={className}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
}
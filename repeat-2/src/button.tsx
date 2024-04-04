import styles from "./Button.module.css";

interface BtnProps {
  text: string;
}

function Button({ text }: BtnProps) {
  return <button className={styles.btn}>{text}</button>;
}

export default Button;

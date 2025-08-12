import Image from "next/image";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image src="/logo.svg" alt="" width="220" height="24" />
      </div>
      <small className={styles.copyright}>&copy; 2024 Yamada Taro.</small>
    </footer>
  );
}

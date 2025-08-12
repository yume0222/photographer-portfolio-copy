import Image from "next/image";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Image src="/logo.svg" alt="" width="220" height="24" />
      </h1>
    </header>
  );
}

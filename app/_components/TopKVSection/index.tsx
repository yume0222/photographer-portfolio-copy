import Sheet from "../Sheet";
import SheetStyles from "../Sheet/index.module.css";
import styles from "./index.module.css";

export default function TopKVSection() {
  return (
    <Sheet className1={styles.bg} className2={SheetStyles.container}>
      <div className={styles.body}>
        <span className={styles.text}>photographer</span>
        <span className={styles.text}>yamada taro</span>
        <span className={styles.text}>official site</span>
      </div>
    </Sheet>
  );
}

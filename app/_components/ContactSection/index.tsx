import ContactForm from "../ContactForm";
import Sheet from "../Sheet";
import SheetStyles from "../Sheet/index.module.css";
import TitleLevel2 from "../TitleLevel2";
import TitleLevel2Styles from "../TitleLevel2/index.module.css";
import styles from "./index.module.css";

export default function ContactSection() {
  return (
    <Sheet
      className1={`${SheetStyles.ptb} ${styles.bg}`}
      className2={SheetStyles.containerSmall}
    >
      <TitleLevel2
        english="Contact"
        japanese="お問い合わせ"
        englishClassName={TitleLevel2Styles.englishCenter}
        japaneseClassName={TitleLevel2Styles.titleCenter}
      />
      <div className={styles.body}>
        <ContactForm />
      </div>
    </Sheet>
  );
}

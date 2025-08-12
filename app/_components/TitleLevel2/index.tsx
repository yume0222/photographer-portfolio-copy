import styles from "./index.module.css";

type Props = {
  english: React.ReactNode;
  japanese: React.ReactNode;
  englishClassName?: string;
  japaneseClassName?: string;
};

export default function TitleLevel2({
  english,
  japanese,
  englishClassName,
  japaneseClassName,
}: Props) {
  return (
    <div className={styles.wrap}>
      <span className={`${styles.english} ${englishClassName}`}>{english}</span>
      <h2 className={`${styles.japanese} ${japaneseClassName}`}>{japanese}</h2>
    </div>
  );
}

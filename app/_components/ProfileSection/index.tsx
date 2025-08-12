import Image from "next/image";
import Sheet from "../Sheet";
import SheetStyles from "../Sheet/index.module.css";
import TitleLevel2 from "../TitleLevel2";
import TitleLevel2Styles from "../TitleLevel2/index.module.css";
import styles from "./index.module.css";

export default function ProfileSection() {
  return (
    <Sheet className1={SheetStyles.ptb} className2={SheetStyles.container}>
      <TitleLevel2
        english="Profile"
        japanese="プロフィール"
        englishClassName={TitleLevel2Styles.englishCenter}
        japaneseClassName={TitleLevel2Styles.titleCenter}
      />
      <div className={styles.body}>
        <div className={styles.image}>
          <Image src="/pic-top-profile.jpg" alt="" width="1080" height="708" />
        </div>
        <div className={styles.text}>
          <p className={styles.name}>
            <span className={styles.nameJapanese}>山田 太郎</span>
            <span className={styles.nameEnglish}>yamada taro</span>
          </p>
          <div className={styles.desc}>
            <p>
              親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。
            </p>
            <p>
              別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。
            </p>
          </div>
        </div>
      </div>
    </Sheet>
  );
}

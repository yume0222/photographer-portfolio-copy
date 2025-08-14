import Sheet from "../Sheet";
import SheetStyles from "../Sheet/index.module.css";
import TitleLevel2 from "../TitleLevel2";
import TitleLevel2Styles from "../TitleLevel2/index.module.css";
import styles from "./index.module.css";
import AwardItem from "../AwardItem";
import { Award } from "@/app/_libs/microcms";

const data: {
  contents: Award[];
} = {
  contents: [
    {
      title: "第20回 Photo Award",
      thumbnail: {
        url: "/pic-top-award.jpg",
        width: 1040,
        height: 800,
      },
    },
    {
      title: "第12回 Photo Award",
      thumbnail: {
        url: "/pic-top-award02.jpg",
        width: 1040,
        height: 800,
      },
    },
  ],
};

export default function AwardsSection() {
  return (
    <Sheet
      className1={`${SheetStyles.ptb} ${styles.bg}`}
      className2={SheetStyles.container}
    >
      <TitleLevel2
        english="Awards"
        japanese="受賞した賞"
        englishClassName={TitleLevel2Styles.englishCenter}
        japaneseClassName={TitleLevel2Styles.titleCenter}
      />
      <div className={styles.body}>
        <AwardItem awards={data.contents} />
      </div>
    </Sheet>
  );
}

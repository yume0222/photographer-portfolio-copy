import ButtonLink from "../ButtonLink";
import ButtonLinkStyles from "../ButtonLink/index.module.css";
import SchoolTable from "../SchoolTable";
import Sheet from "../Sheet";
import SheetStyles from "../Sheet/index.module.css";
import TitleLevel2 from "../TitleLevel2";
import TitleLevel2Styles from "../TitleLevel2/index.module.css";
import styles from "./index.module.css";
import { SchoolTableRow } from "@/app/_libs/microcms";

const data: {
  contents: SchoolTableRow[];
} = {
  contents: [
    {label: "受講料", value: "￥49,000円（税込）" },
    { label: "参加人数", value: "1クラス10人まで" },
    { label: "レッスン日程", value: "毎週土日にレッスンを行います" },
    {
      label: "こんな方にオススメ",
      value: [
        "カメラを始めたばかり",
        "カメラの使い方を、一から学びたい方",
        "良い写真の基準がわからない",
        "カメラの機能を使いこなせていない",
        "いつかは賞を取るほどのカメラマンになりたい",
      ],
    },
  ],
};

export default function PhotoSchoolSection() {
  return (
    <Sheet className1={SheetStyles.ptb} className2={SheetStyles.container}>
      <TitleLevel2
        english="Photo School"
        japanese="写真教室"
        englishClassName={TitleLevel2Styles.englishCenter}
        japaneseClassName={TitleLevel2Styles.titleCenter}
      />
      <div className={styles.body}>
        <SchoolTable rows={data.contents} />
        <p className={styles.text}>
          <span>まずは無料の体験レッスンに</span>
          <span>ご参加ください</span>
        </p>
        <div className={styles.button}>
          <ButtonLink href="#" className={ButtonLinkStyles.buttonCenter}>
            体験レッスンに申し込む
          </ButtonLink>
        </div>
      </div>
    </Sheet>
  );
}

import ButtonLink from "../ButtonLink";
import ButtonLinkStyles from "../ButtonLink/index.module.css";
import Sheet from "../Sheet";
import SheetStyles from "../Sheet/index.module.css";
import TitleLevel2 from "../TitleLevel2";
import TitleLevel2Styles from "../TitleLevel2/index.module.css";
import WorksGallery from "../WorksGallery";
import styles from "./index.module.css";
import { GalleryImage } from "@/app/_libs/microcms";

const data: {
  contents: GalleryImage[];
} = {
  contents: [
    {
      url: "/pic-top-works.jpg",
      alt: "〇〇の風景写真",
    },
    {
      url: "/pic-top-works02.jpg",
      alt: "〇〇の風景写真",
    },
    {
      url: "/pic-top-works03.jpg",
      alt: "〇〇の風景写真",
    },
    {
      url: "/pic-top-works04.jpg",
      alt: "〇〇の風景写真",
    },
    {
      url: "/pic-top-works05.jpg",
      alt: "〇〇の風景写真",
    },
    {
      url: "/pic-top-works06.jpg",
      alt: "〇〇の風景写真",
    },
    {
      url: "/pic-top-works07.jpg",
      alt: "〇〇の風景写真",
    },
    {
      url: "/pic-top-works08.jpg",
      alt: "〇〇の風景写真",
    },
  ],
};

export default function WorksSection() {
  return (
    <Sheet className1={SheetStyles.ptb} className2={SheetStyles.containerSmall}>
      <TitleLevel2
        english="Works"
        japanese="作品"
        englishClassName={TitleLevel2Styles.englishCenter}
        japaneseClassName={TitleLevel2Styles.titleCenter}
      />
      <div className={styles.body}>
        <WorksGallery images={data.contents} />
      </div>
      <p className={styles.text}>
        <span>実績や作品は</span>
        <span>全てInstagramで公開しています</span>
      </p>
      <div className={styles.button}>
        <ButtonLink
          href="#"
          className={ButtonLinkStyles.buttonCenter}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagramを見る
        </ButtonLink>
      </div>
    </Sheet>
  );
}

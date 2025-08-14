import ProductItem from "../ProductItem";
import Sheet from "../Sheet";
import SheetStyles from "../Sheet/index.module.css";
import TitleLevel2 from "../TitleLevel2";
import TitleLevel2Styles from "../TitleLevel2/index.module.css";
import styles from "./index.module.css";
import { Product } from "@/app/_libs/microcms";

const data: {
  contents: Product[];
} = {
  contents: [
    {
      title: "Y.T Collection 2020",
      text: [
        "親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。",
        "新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。",
      ],
      image: {
        url: "/pic-top-products.jpg",
        width: 800,
        height: 800,
      },
    },
    {
      title: "Y.T Collection 2019",
      text: [
        "親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。",
        "新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。",
      ],
      image: {
        url: "/pic-top-products02.jpg",
        width: 800,
        height: 800,
      },
    },
    {
      title: "Y.T Collection 2018",
      text: [
        "親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。",
        "新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。",
      ],
      image: {
        url: "/pic-top-products03.jpg",
        width: 800,
        height: 800,
      },
    },
  ],
};

export default function ProductsSection() {
  return (
    <Sheet
      className1={`${SheetStyles.ptb} ${styles.bg}`}
      className2={SheetStyles.container}
    >
      <TitleLevel2
        english="Products"
        japanese="販売作品集"
        englishClassName={TitleLevel2Styles.englishCenter}
        japaneseClassName={TitleLevel2Styles.titleCenter}
      />
      <div className={styles.body}>
        <ProductItem products={data.contents} />
      </div>
    </Sheet>
  );
}

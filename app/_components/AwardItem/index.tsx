import styles from "./index.module.css";
import { Award } from "@/app/_libs/microcms";
import Image from "next/image";

type Props = {
  awards: Award[];
};

export default function AwardItem({ awards }: Props) {
  return (
    <ul className={styles.list}>
      {awards.map((award, index) => (
        <li key={index} className={styles.item}>
          <div className={styles.thumbnail}>
            <Image
              src={award.thumbnail.url}
              alt=""
              width={award.thumbnail.width}
              height={award.thumbnail.height}
            />
          </div>
          <h3 className={styles.title}>{award.title}</h3>
        </li>
      ))}
    </ul>
  );
}

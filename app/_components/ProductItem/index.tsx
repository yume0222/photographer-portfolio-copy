import Image from "next/image";
import styles from "./index.module.css";
import { Product } from "@/app/_libs/microcms";

type Props = {
  products: Product[];
};

export default function ProductItem({ products }: Props) {
  return (
    <ul className={styles.list}>
      {products.map((product, index) => (
        <li key={index} className={styles.item}>
          <div className={styles.image}>
            <Image
              src={product.image.url}
              alt=""
              width={product.image.width}
              height={product.image.height}
            />
          </div>
          <div className={styles.body}>
            <h3 className={styles.title}>{product.title}</h3>
            <div className={styles.text}>
              {product.text.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

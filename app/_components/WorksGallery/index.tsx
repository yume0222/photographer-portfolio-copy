"use client";

import { useState } from "react";
import styles from "./index.module.css";
import { GalleryImage } from "@/app/_libs/microcms";
import Image from "next/image";

type Props = {
  images: GalleryImage[];
};

export default function WorksGallery({ images }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [fadeClass, setFadeClass] = useState<string>(styles.fadeIn);

  // index の型を number に指定
  const handleThumbnailClick = (index: number) => {
    if (index === selectedIndex) return; // 同じ画像なら何もしない
    // フェードアウト開始
    setFadeClass(styles.fadeOut);
    // フェードアウト完了後に画像差し替え + フェードイン
    setTimeout(() => {
      setSelectedIndex(index);
      setFadeClass(styles.fadeIn);
    }, 500); // 500ms後に切り替え
  };

  return (
    <>
      <div className={`${styles.mainImage} ${fadeClass}`}>
        <Image
          src={images[selectedIndex].url}
          alt={images[selectedIndex].alt}
          width={1520}
          height={856}
        />
      </div>

      <ul className={styles.list}>
        {images.map((image, index: number) => (
          <li
            key={index}
            className={`${styles.item} ${
              selectedIndex === index ? styles.active : ""
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={88}
              height={88}
              onClick={() => handleThumbnailClick(index)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
